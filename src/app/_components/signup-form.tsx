"use client";

import { useState } from "react";

interface SignupFormProps {
  onSignupSubmit: (formData: FormData) => Promise<void>;
  onToggleToLogin: () => void;
}

export function SignupForm({ onSignupSubmit, onToggleToLogin }: SignupFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("tenant"); // default to tenant
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
      
      await onSignupSubmit(formData);
      setSuccess(true);
      setName("");
      setEmail("");
      setPassword("");
      // Automatically toggle to login after a short delay
      setTimeout(() => {
        onToggleToLogin();
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md px-8 py-10 bg-white rounded-2xl shadow-xl border border-slate-100/80 transition-all duration-300 hover:shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-800">SIGN UP</h2>
        <p className="mt-2 text-sm text-slate-500">Create an All The Yards Account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-lg font-bold">
            {error}
          </div>
        )}

        {success && (
          <div className="p-3 bg-emerald-50 border border-emerald-250 text-emerald-800 text-xs rounded-lg font-bold">
            ✓ Account successfully created! Redirecting to login...
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            required
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
            Account Type
          </label>
          <div className="flex gap-3">
            {[
              { label: "Tenant", value: "tenant" },
              { label: "Admin", value: "admin" }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setRole(option.value)}
                className={`flex-1 py-2.5 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                  role === option.value
                    ? "bg-[#062c1a] text-white border-[#062c1a] shadow-xs"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 cursor-pointer px-4 rounded-lg bg-[#062c1a] hover:bg-[#0c472c] text-white font-semibold shadow-md transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-wider text-xs"
        >
          {loading ? "Registering..." : "Sign Up"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-slate-500">Already have an account? </span>
        <button
          type="button"
          onClick={onToggleToLogin}
          className="font-bold text-[#062c1a] hover:text-[#0c472c] hover:underline cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
}
