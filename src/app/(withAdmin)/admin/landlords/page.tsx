"use client";

import React from "react";

export default function LandlordsPage() {
  const landlords = [
    {
      id: 1,
      name: "Landlord A (Apex Properties Ltd)",
      email: "apex.prop@alltheyards.com",
      properties: 15,
      totalRevenue: "£14,250.00",
      payoutStatus: "Paid",
      xeroCategory: "Landlord_A_Apex",
      syncStatus: "Synced",
    },
    {
      id: 2,
      name: "Landlord B (Golden Crest Estates)",
      email: "golden.crest@alltheyards.com",
      properties: 12,
      totalRevenue: "£11,400.00",
      payoutStatus: "Paid",
      xeroCategory: "Landlord_B_Golden",
      syncStatus: "Synced",
    },
    {
      id: 3,
      name: "Landlord C (River Oaks Holdings)",
      email: "river.oaks@alltheyards.com",
      properties: 8,
      totalRevenue: "£8,800.00",
      payoutStatus: "Processing",
      xeroCategory: "Landlord_C_River",
      syncStatus: "Pending",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Landlords</h1>
          <p className="text-slate-500 mt-1">
            Separate financial tracking and Xero mapping for portfolio stakeholders.
          </p>
        </div>
        <button className="px-4 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-lg text-sm font-semibold transition-all shadow-sm cursor-pointer">
          Add Landlord
        </button>
      </div>

      {/* Xero Connection Alert */}
      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="p-2 bg-emerald-100 rounded-lg text-emerald-800 text-sm font-bold">XERO</span>
          <div>
            <h4 className="text-sm font-bold text-[#062c1a]">Arthur Online & Xero Integration Active</h4>
            <p className="text-xs text-emerald-700 mt-0.5">
              Transactions are mapped to Tracking Categories. Financial statements are partitioned correctly.
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
          Connected
        </span>
      </div>

      {/* Landlords Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {landlords.map((l) => (
          <div
            key={l.id}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] bg-slate-100 text-slate-500 font-bold uppercase px-2 py-0.5 rounded">
                  Stakeholder #{l.id}
                </span>
                <span
                  className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    l.syncStatus === "Synced"
                      ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                      : "bg-amber-50 text-amber-600 border border-amber-100"
                  }`}
                >
                  Xero: {l.syncStatus}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mt-4 leading-tight">{l.name}</h3>
              <p className="text-xs text-slate-400 mt-1">{l.email}</p>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-50">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Properties</span>
                  <span className="text-lg font-bold text-slate-800">{l.properties}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Total Revenue</span>
                  <span className="text-lg font-bold text-slate-800">{l.totalRevenue}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-xs">
              <div>
                <span className="block text-[10px] text-slate-400 uppercase font-semibold">Xero Category</span>
                <code className="text-[10px] bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100 text-slate-600 font-semibold">
                  {l.xeroCategory}
                </code>
              </div>
              <span
                className={`inline-flex px-2.5 py-1 rounded-full text-xs font-semibold ${
                  l.payoutStatus === "Paid"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                Payout: {l.payoutStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
