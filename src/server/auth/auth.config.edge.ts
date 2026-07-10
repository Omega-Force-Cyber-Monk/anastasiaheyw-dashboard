/**
 * auth.config.edge.ts
 *
 * This file contains ONLY the NextAuth configuration that is safe to use
 * in Next.js Middleware (Edge Runtime). It must NOT import Prisma, Node.js
 * built-ins, or any server-only libraries.
 *
 * Used by: src/middleware.ts
 * For full config (with Prisma adapter): src/server/auth/config.ts
 */
import type { NextAuthConfig } from "next-auth";

export const authConfigEdge: NextAuthConfig = {
  pages: {
    signIn: "/",
  },
  providers: [], // No providers needed in middleware — we only verify existing JWT tokens
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.role = user.role;
        token.email = user.email;
        token.name = user.name;
        token.sub = user.id;
      }
      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub ?? session.user.id,
        role: (token.role as string | undefined) ?? "tenant",
        email: token.email ?? session.user.email,
        name: token.name ?? session.user.name,
      },
    }),
  },
};
