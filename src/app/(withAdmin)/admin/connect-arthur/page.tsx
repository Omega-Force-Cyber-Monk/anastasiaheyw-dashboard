"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { api } from "~/trpc/react";

export default function ArthurConnectPage() {
  const router = useRouter();
  const [isSimulating, setIsSimulating] = useState(false);
  const { data: authUrlData, isLoading: isLoadingUrl } = api.arthur.getAuthUrl.useQuery();

  const mockConnectMutation = api.arthur.mockConnect.useMutation({
    onSuccess: () => {
      // Redirect to the success screen
      router.push("/admin/oauth-success");
    },
    onError: (err) => {
      console.error("Simulation failed:", err);
      setIsSimulating(false);
    },
  });

  const handleSimulate = () => {
    setIsSimulating(true);
    mockConnectMutation.mutate();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4 select-none">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c8a270]/5 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-lg bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 text-center shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Top gradient highlight */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-emerald-500 via-[#c8a270] to-emerald-500"></div>

        {/* Header Icon */}
        <div className="mx-auto w-20 h-20 bg-emerald-50 border border-emerald-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10 text-emerald-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight mb-3 font-serif">
          Arthur Online Authorization
        </h1>
        <p className="text-sm text-slate-500 mb-8 max-w-md mx-auto leading-relaxed">
          Select an authentication method to link your dashboard to Arthur Online.
        </p>

        {/* Action Options */}
        <div className="space-y-6 text-left mb-8">
          {/* Option 1: Live Connection */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-emerald-200 transition-all duration-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Option 1: Live OAuth API</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">Live API</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Open the Arthur Online portal to authenticate with real credentials. Note that Arthur&apos;s authentication page must be working on their servers.
            </p>
            {isLoadingUrl ? (
              <div className="h-10 w-full bg-slate-100 rounded-xl flex items-center justify-center text-xs text-slate-400 font-medium">
                Generating authorization link...
              </div>
            ) : authUrlData ? (
              <a
                href={authUrlData}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm"
              >
                Open Arthur Portal (New Tab)
              </a>
            ) : (
              <div className="text-rose-600 text-xs py-2">Could not retrieve authentication link. Check system variables.</div>
            )}
          </div>

          {/* Option 2: Simulated Connection */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 hover:border-amber-200 transition-all duration-200">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Option 2: Simulated Offline API</h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-100">Developer Option</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Bypass Arthur&apos;s server-side errors (<code className="bg-amber-100/50 px-1 py-0.5 rounded text-amber-900 font-mono">Controller class not found</code>) by initiating a simulated connection. This populates your dashboard with rich mock properties and tenants.
            </p>
            <button
              onClick={handleSimulate}
              disabled={isSimulating}
              className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
            >
              {isSimulating ? "Simulating Connection..." : "Simulate Connection"}
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center border-t border-slate-100 pt-6">
          <Link
            href="/admin/dashboard"
            className="w-full sm:flex-1 py-3 px-5 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-[0.98] text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center"
          >
            Back to Dashboard
          </Link>
          <Link
            href="/admin/settings"
            className="w-full sm:flex-1 py-3 px-5 bg-white hover:bg-slate-50 border border-slate-200 active:scale-[0.98] text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all text-center"
          >
            Cancel Settings
          </Link>
        </div>
      </div>
    </div>
  );
}
