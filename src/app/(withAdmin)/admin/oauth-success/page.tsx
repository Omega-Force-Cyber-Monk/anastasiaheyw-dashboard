"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ArthurOAuthSuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/admin/dashboard");
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, router]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 select-none">
      {/* Decorative animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse duration-4000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c8a270]/5 rounded-full blur-3xl animate-pulse duration-6000"></div>

      <div className="relative w-full max-w-md bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-xl overflow-hidden">
        {/* Subtle top border highlight */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500 via-[#c8a270] to-emerald-500"></div>

        {/* Animated Checkmark Circle */}
        <div className="mx-auto w-24 h-24 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
          <svg
            className="w-12 h-12 text-emerald-600 animate-in zoom-in duration-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="3"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight mb-2 font-serif">
          Arthur Online Connected
        </h1>
        <p className="text-sm text-slate-500 px-2 leading-relaxed mb-8">
          The OAuth authorization was successful. Your dashboard is now synchronized with Arthur Online real-time property and tenancy databases.
        </p>

        {/* Progress & Countdown Area */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8">
          <div className="flex justify-between items-center text-xs text-slate-500 mb-3">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
              Redirecting to Dashboard...
            </span>
            <span className="font-mono text-emerald-600 font-bold">{countdown}s</span>
          </div>

          {/* Animated Progress Bar */}
          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-[#c8a270] h-full rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${(countdown / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href="/admin/dashboard"
          className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#062c1a] hover:bg-[#0c472c] active:scale-[0.98] text-white text-sm font-bold uppercase rounded-xl transition-all shadow-md"
        >
          Go to Dashboard Now
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
