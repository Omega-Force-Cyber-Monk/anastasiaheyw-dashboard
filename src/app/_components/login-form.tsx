"use client";

import { useState } from "react";

interface LoginFormProps {
  onDiscordSignIn: () => void;
  onCredentialsSignIn: (formData: FormData) => Promise<void>;
  onToggleToSignup: () => void;
}

export function LoginForm({
  // onDiscordSignIn,
  onCredentialsSignIn,
  // onToggleToSignup,
}: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      await onCredentialsSignIn(formData);
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);

      // Ignore NEXT_REDIRECT as it is the framework's redirect handler, not a real error.
      if (errMsg.includes("NEXT_REDIRECT")) {
        return;
      }

      setError(
        err instanceof Error
          ? err.message
          : "Invalid credentials. Please try again.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white px-8 py-10 shadow-xs transition-all duration-300 hover:shadow-2xl">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800">
          LOGIN
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          Access to All The Yards Services
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-bold text-red-600">
            {error}
          </div>
        )}

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-800 placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-200 px-4 py-3 pr-12 text-slate-800 placeholder-slate-400 transition-all focus:border-transparent focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 transition-colors hover:text-slate-600"
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded-lg bg-[#062c1a] px-4 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0c472c] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-slate-400">or</span>
        </div>
      </div>

      <button
        type="button"
        onClick={onDiscordSignIn}
        className="flex w-full items-center justify-center gap-3 rounded-lg bg-[#5865F2] px-4 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#4752C4] active:scale-[0.98]"
      >
        <svg className="h-5 w-5 fill-current" viewBox="0 0 127.14 96.36">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.43-5c.87-.64,1.72-1.31,2.53-2a75.46,75.46,0,0,0,72.63,0c.81.7,1.66,1.37,2.53,2a68.86,68.86,0,0,1-10.43,5,80.21,80.21,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,122.52,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z" />
        </svg>
        Sign in with Discord
      </button>

      <div className="mt-6 text-center text-sm">
        <span className="text-slate-500">I have no account? </span>
        <button
          type="button"
          onClick={onToggleToSignup}
          className="cursor-pointer font-bold text-[#062c1a] hover:text-[#0c472c] hover:underline"
        >
          Sign Up
        </button>
      </div> */}
    </div>
  );
}
