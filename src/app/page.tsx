import Image from "next/image";
import { LatestPost } from "~/app/_components/post";
import { AuthContainer } from "~/app/_components/auth-container";
import { auth, signIn, signOut } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { db } from "~/server/db";

import { redirect } from "next/navigation";

export default async function Home() {
  let hello = null;
  try {
    hello = await api.post.hello({ text: "from tRPC" });
  } catch (error) {
    console.error("tRPC hello query failed:", error);
  }

  let session = null;
  try {
    session = await auth();
  } catch (error) {
    console.error("Auth session check failed:", error);
  }

  if (session?.user) {
    // Explicitly check for admin role. Any other role (tenant, undefined) goes to tenant dashboard.
    if (session.user.role === "admin") {
      redirect("/admin/dashboard");
    } else {
      redirect("/tanent/dashboard");
    }
  }

  // Server Actions for Authentication
  const handleDiscordSignIn = async () => {
    "use server";
    await signIn("discord");
  };

  const handleCredentialsSignIn = async (formData: FormData) => {
    "use server";
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    
    try {
      // Check the user's role from the database to determine redirect target
      // Admin check: either exact admin email OR role = "admin" in User table
      const userRecord = await db.user.findUnique({
        where: { email: email.trim().toLowerCase() },
      });

      const isAdmin = userRecord?.role === "admin" || email.trim().toLowerCase() === "admin@heywood.com";
      const redirectTo = isAdmin ? "/admin/dashboard" : "/tanent/dashboard";

      await signIn("credentials", {
        email,
        password,
        redirectTo,
      });
    } catch (error) {
      if (
        error instanceof Error &&
        (error.message.includes("NEXT_REDIRECT") ||
          (typeof error === "object" &&
            error !== null &&
            "digest" in error &&
            typeof (error as Record<string, unknown>).digest === "string" &&
            String((error as Record<string, unknown>).digest).startsWith("NEXT_REDIRECT")))
      ) {
        throw error;
      }
      throw new Error("Invalid email or password");
    }
  };

  const handleSignupSubmit = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const role = formData.get("role") as string;

    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw new Error("Email already registered");
    }

    await db.user.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
  };

  const handleSignOut = async () => {
    "use server";
    await signOut();
  };

  // If user is not authenticated, show the photo-matching login page
  if (!session) {
    return (
      <div className="relative min-h-screen bg-white flex flex-col justify-center items-center font-sans antialiased overflow-hidden">
        {/* Top Right Project Name */}
        <div className="absolute top-8 right-8 z-10">
          <span className="text-xl font-bold tracking-widest text-slate-800 uppercase">
            All The Yeard
          </span>
        </div>

        {/* Main Content Area */}
        <div className="container max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Column: Vector Illustration */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[480px] aspect-square transition-all duration-500 hover:scale-[1.02]">
              <Image
                src="/login-illustration.png"
                alt="Login Illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Form Component */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <AuthContainer 
              onDiscordSignIn={handleDiscordSignIn} 
              onCredentialsSignIn={handleCredentialsSignIn}
              onSignupSubmit={handleSignupSubmit}
            />
          </div>
        </div>
      </div>
    );
  }

  // Dashboard Page when Authenticated
  return (
    <HydrateClient>
      <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
        {/* Header/Navbar */}
        <header className="bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center text-white font-bold">
              Y
            </div>
            <span className="font-extrabold text-lg tracking-wider text-slate-800 uppercase">
              All The Yeard
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {session.user.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name ?? "Avatar"}
                  width={36}
                  height={36}
                  className="rounded-full ring-2 ring-amber-400"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold">
                  {session.user.name?.[0]?.toUpperCase() ?? "U"}
                </div>
              )}
              <div className="hidden sm:block text-right">
                <p className="text-sm font-semibold text-slate-800">{session.user.name}</p>
                <p className="text-xs text-slate-400">{session.user.email}</p>
              </div>
            </div>

            <form action={handleSignOut}>
              <button
                type="submit"
                className="bg-slate-100 hover:bg-red-50 hover:text-red-600 text-slate-600 font-semibold px-4 py-2 rounded-lg text-sm transition-all active:scale-95"
              >
                Sign out
              </button>
            </form>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col gap-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col gap-4">
            <h2 className="text-3xl font-extrabold text-slate-800">
              Welcome back, <span className="text-amber-500">{session.user.name}</span>!
            </h2>
            <p className="text-slate-500">
              You have successfully authenticated via Discord. Below is the greeting and post feed from the database.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm text-slate-600 font-medium">
                {hello ? hello.greeting : "Loading tRPC query..."}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-3">
              Posts Feed
            </h3>
            <LatestPost />
          </div>
        </main>
      </div>
    </HydrateClient>
  );
}
