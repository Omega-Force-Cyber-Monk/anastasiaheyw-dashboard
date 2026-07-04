import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "~/server/db";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface User {
    role?: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authConfig = {
  providers: [
    DiscordProvider,
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        // 1. Check PostgreSQL User table first (enables dynamic database accounts)
        const user = await db.user.findUnique({
          where: { email },
        });

        if (user?.password === password) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role ?? "tenant",
          };
        }

        // 2. Check ArthurTenancy table for synced tenants (password is tenant123)
        const tenancy = await db.arthurTenancy.findFirst({
          where: {
            email: {
              has: email,
            },
          },
        });

        if (tenancy && password === "tenant123") {
          return {
            id: tenancy.id,
            name: tenancy.tenants[0] ?? "Tenant",
            email: email,
            role: "tenant",
          };
        }

        // 3. Fallback Admin User (if database has not been populated yet)
        if (email === "admin@heywood.com" && password === "admin123") {
          return {
            id: "admin-singleton-id",
            name: "Admin User",
            email: "admin@heywood.com",
            role: "admin",
          };
        }

        // 4. Fallback Tenant Demo User
        if (email.startsWith("tenant") && password === "tenant123") {
          return {
            id: "tenant-demo-singleton-id",
            name: "Demo Tenant",
            email: email,
            role: "tenant",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(db),
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
        role: token.role as string | undefined,
      },
    }),
  },
} satisfies NextAuthConfig;
