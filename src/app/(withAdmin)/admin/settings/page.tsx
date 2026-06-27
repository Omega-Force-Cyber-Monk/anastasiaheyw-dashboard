"use client";

import React, { useState } from "react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("All The Yards");
  const [xeroStatus, setXeroStatus] = useState("Connected");

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Settings</h1>
        <p className="text-slate-500 mt-1">Configure your property management system integrations and branding.</p>
      </div>

      <div className="space-y-6">
        {/* Branding Configuration */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-800 border-b border-slate-50 pb-3 mb-4">
            Branding & Customization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Brand Name (White-Label)
              </label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Portal Domain CNAME
              </label>
              <input
                type="text"
                defaultValue="portal.alltheyards.com"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Xero Integration Settings */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-50 pb-3 mb-4">
            <h3 className="text-base font-bold text-slate-800">Xero Accounting Integration</h3>
            <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
              {xeroStatus}
            </span>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Landlord Tracking Categories
              </h4>
              <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                Ensure funds are partitioned correctly by mapping each landlord to Xero tracking categories.
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-600">Landlord A (Apex Properties)</span>
                  <code className="bg-white px-2 py-0.5 border rounded text-slate-700 font-bold">Landlord_A_Apex</code>
                </div>
                <div className="flex items-center justify-between text-xs py-2 border-b border-slate-200">
                  <span className="font-semibold text-slate-600">Landlord B (Golden Crest)</span>
                  <code className="bg-white px-2 py-0.5 border rounded text-slate-700 font-bold">Landlord_B_Golden</code>
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span className="font-semibold text-slate-600">Landlord C (River Oaks)</span>
                  <code className="bg-white px-2 py-0.5 border rounded text-slate-700 font-bold">Landlord_C_River</code>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setXeroStatus("Disconnecting...")}
                className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 transition-all cursor-pointer"
              >
                Disconnect Xero
              </button>
              <button className="px-3.5 py-2 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-lg text-xs font-semibold transition-all cursor-pointer">
                Save Mappings
              </button>
            </div>
          </div>
        </div>

        {/* Arthur Online Configuration */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-bold text-slate-800 border-b border-slate-50 pb-3 mb-4">
            Arthur Online API Integration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Arthur API Key
              </label>
              <input
                type="password"
                defaultValue="••••••••••••••••••••••••••••"
                disabled
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Active Tier
              </label>
              <input
                type="text"
                defaultValue="Arthur Professional Tier (Up to 60 units)"
                disabled
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
