"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { api } from "~/trpc/react";

function SettingsContent() {
  const [activeTab, setActiveTab] = useState<"branding" | "xero" | "arthur">("branding");
  const [siteName, setSiteName] = useState("All The Yards");
  const [xeroStatus, setXeroStatus] = useState("Connected");

  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const error = searchParams.get("error");
  const errorMsg = searchParams.get("message");

  const { data: connectionStatus, refetch: refetchConnection } = api.arthur.checkConnection.useQuery();
  const { data: authUrlData } = api.arthur.getAuthUrl.useQuery();

  const mockConnect = api.arthur.mockConnect.useMutation({
    onSuccess: () => {
      void refetchConnection();
    },
  });

  return (
    <div className="space-y-8 w-full pb-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight font-serif">System Settings</h1>
          <p className="text-slate-500 text-sm sm:text-base mt-1">Configure your property management system integrations, branding, and billing accounts.</p>
        </div>
      </div>

      {/* Notifications/Alert Banners */}
      {success === "arthur_connected" && (
        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm font-semibold flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Arthur Online API connected and authenticated successfully!
        </div>
      )}
      {error && (
        <div className="p-4 bg-rose-50 border border-rose-100 rounded-xl text-rose-800 text-sm font-semibold flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
          Connection Error: {errorMsg ?? error}. Please check credentials and try again.
        </div>
      )}

      {/* Settings Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column: Vertical Tabs */}
        <div className="md:col-span-1 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("branding")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
              activeTab === "branding"
                ? "bg-[#062c1a] text-white shadow-md border-l-4 border-[#c8a270]"
                : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-100"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Branding & Style
          </button>
          
          <button
            onClick={() => setActiveTab("xero")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
              activeTab === "xero"
                ? "bg-[#062c1a] text-white shadow-md border-l-4 border-[#c8a270]"
                : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-100"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Xero Accounting
          </button>

          <button
            onClick={() => setActiveTab("arthur")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
              activeTab === "arthur"
                ? "bg-[#062c1a] text-white shadow-md border-l-4 border-[#c8a270]"
                : "bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-100"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Arthur Online API
          </button>
        </div>

        {/* Right Column: Tab Contents */}
        <div className="md:col-span-3 space-y-6">
          {activeTab === "branding" && (
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-xs animate-in fade-in slide-in-from-right-4 duration-300">
              <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">
                Branding & Customization
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Brand Name (White-Label)
                  </label>
                  <input
                    type="text"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a] transition-all bg-white shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Portal Domain CNAME
                  </label>
                  <input
                    type="text"
                    defaultValue="portal.alltheyards.com"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a] transition-all bg-white shadow-xs"
                  />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-end">
                <button className="px-5 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer">
                  Save General Style
                </button>
              </div>
            </div>
          )}

          {activeTab === "xero" && (
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-xs animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-xl font-bold text-slate-800">Xero Accounting Integration</h3>
                <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-100">
                  {xeroStatus}
                </span>
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Landlord Tracking Categories
                  </h4>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Ensure funds are partitioned correctly by mapping each landlord to Xero tracking categories.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200">
                      <span className="font-semibold text-slate-600">Landlord A (Apex Properties)</span>
                      <code className="bg-white px-3 py-1 border border-slate-200 rounded-lg text-[#062c1a] font-bold">Landlord_A_Apex</code>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200">
                      <span className="font-semibold text-slate-600">Landlord B (Golden Crest)</span>
                      <code className="bg-white px-3 py-1 border border-slate-200 rounded-lg text-[#062c1a] font-bold">Landlord_B_Golden</code>
                    </div>
                    <div className="flex items-center justify-between text-xs py-2">
                      <span className="font-semibold text-slate-600">Landlord C (River Oaks)</span>
                      <code className="bg-white px-3 py-1 border border-slate-200 rounded-lg text-[#062c1a] font-bold">Landlord_C_River</code>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setXeroStatus("Disconnected")}
                    className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-700 transition-all cursor-pointer"
                  >
                    Disconnect Xero
                  </button>
                  <button className="px-5 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer">
                    Save Mappings
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "arthur" && (
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-xs animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                <h3 className="text-xl font-bold text-slate-800">
                  Arthur Online API Integration
                </h3>
                <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  connectionStatus?.connected
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                    : "bg-amber-50 text-amber-800 border border-amber-100"
                }`}>
                  {connectionStatus?.connected ? "Connected" : "Disconnected"}
                </span>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Arthur Client ID
                    </label>
                    <input
                      type="text"
                      value="4f723f4748d4b14cd17f97a3835e623dd96e28c..."
                      disabled
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Active Tier
                    </label>
                    <input
                      type="text"
                      defaultValue="Arthur Enterprise API Integration"
                      disabled
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => mockConnect.mutate()}
                    className="px-5 py-2.5 bg-[#c8a270] hover:bg-[#b58d59] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {mockConnect.isPending ? "Connecting Mock..." : "Mock Connect (Dev)"}
                  </button>
                  {authUrlData && (
                    <a
                      href={authUrlData}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-md ${
                        connectionStatus?.connected
                          ? "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                          : "bg-[#062c1a] text-white hover:bg-[#0c472c]"
                      }`}
                    >
                      {connectionStatus?.connected ? "Reconnect Arthur Online" : "Connect Arthur Online"}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AdminSettingsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-slate-500 font-semibold">Loading Settings...</div>}>
      <SettingsContent />
    </Suspense>
  );
}
