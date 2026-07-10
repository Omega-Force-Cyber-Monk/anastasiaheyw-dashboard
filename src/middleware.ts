import NextAuth from "next-auth";
import { authConfigEdge } from "~/server/auth/auth.config.edge";

/**
 * Middleware runs on every request at the Edge, BEFORE any page renders.
 *
 * Why Edge-safe config?
 * - Middleware runs in Edge Runtime (not Node.js)
 * - Prisma and Node.js built-ins are NOT available here
 * - We only need to READ the existing JWT cookie to check role
 * - No database calls needed — the role is already baked into the JWT
 *
 * This solves the "white page + unauthenticated" issue:
 * - The server page.tsx had `redirect("/tanent/dashboard")` working
 * - But client-side `useSession()` was returning unauthenticated
 * - Because the JWT cookie wasn't being verified before React hydration
 * - Now middleware enforces routing before any page code runs
 */
const { auth } = NextAuth(authConfigEdge);

export default auth((req) => {
  const session = req.auth;
  const { pathname } = req.nextUrl;

  // ── Already logged in → redirect away from login page ─────────────────────
  if (pathname === "/") {
    if (session?.user) {
      const role = session.user.role;
      if (role === "admin") {
        return Response.redirect(new URL("/admin/dashboard", req.url));
      }
      // tenant or any other role → tenant dashboard
      return Response.redirect(new URL("/tanent/dashboard", req.url));
    }
    return; // Not authenticated → show login page
  }

  // ── /admin/* — only admins allowed ────────────────────────────────────────
  if (pathname.startsWith("/admin")) {
    if (!session?.user) {
      return Response.redirect(new URL("/", req.url));
    }
    if (session.user.role !== "admin") {
      return Response.redirect(new URL("/tanent/dashboard", req.url));
    }
    return; // OK
  }

  // ── /tanent/* — must be authenticated ─────────────────────────────────────
  if (pathname.startsWith("/tanent")) {
    if (!session?.user) {
      return Response.redirect(new URL("/", req.url));
    }
    if (session.user.role === "admin") {
      return Response.redirect(new URL("/admin/dashboard", req.url));
    }
    return; // OK
  }
});

export const config = {
  matcher: [
    // Match all paths except API routes, static assets, Next.js internals
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
