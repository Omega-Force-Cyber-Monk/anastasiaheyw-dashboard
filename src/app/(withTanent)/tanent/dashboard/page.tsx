"use client";

import React from "react";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export default function TenantDashboardOverview() {
  const { tenantDetails, metadata } = useTenant();

  // Helper to format Date strings (e.g. 2025-04-30 -> 30 April 2025)
  const formatDate = (dateStr: string) => {
    if (!dateStr || dateStr === "—") return "—";
    try {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        const date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
        return date.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
      }
      return dateStr;
    } catch {
      return dateStr;
    }
  };

  const getOrdinal = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  const dueDay = tenantDetails.startDate
    ? new Date(tenantDetails.startDate).getDate() || 29
    : 29;

  const isRolling = tenantDetails.lettingType === "AST ROLLING";

  return (
    <div className="animate-in fade-in space-y-6 duration-300">
      {/* Premium Header Banner */}
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#062c1a] to-[#041e12] p-8 text-white shadow-xl lg:flex-row lg:items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,112,0.15),transparent_65%)] pointer-events-none" />
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-[#e2e8f0]/15 text-xs font-semibold text-[#c8a270]">
            <span className="h-2 w-2 rounded-full bg-[#c8a270] animate-pulse"></span>
            ACTIVE PORTFOLIO TENANT
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome Home, <span className="text-[#c8a270]">{tenantDetails.tenants.join(" & ")}</span>
          </h1>
          <p className="text-sm text-emerald-100/70 font-medium">
            {tenantDetails.address}
          </p>
        </div>
      </div>

      {/* Grid: Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1 */}
        <div className="relative rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#c8a270]" />
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Monthly Rent</span>
          <h3 className="mt-2 text-2xl font-black text-slate-900 tracking-tight">{tenantDetails.rent}</h3>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
              Due {dueDay}{getOrdinal(dueDay)} of Month
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#062c1a]" />
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Tenancy Model</span>
          <h3 className="mt-2 text-2xl font-black text-slate-900 tracking-tight">
            {isRolling ? "AST Rolling" : "Fixed Term"}
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
            <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-full">
              {isRolling ? "2 Months notice to leave" : "Fixed term agreement"}
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-sky-600" />
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Deposit Amount</span>
          <h3 className="mt-2 text-2xl font-black text-slate-900 tracking-tight">{tenantDetails.deposit}</h3>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-sky-500" />
            <span className="text-xs text-sky-700 font-semibold bg-sky-50 px-2 py-0.5 rounded-full">
              {tenantDetails.lodged === "Lodged" ? "Lodged & Secured" : "Received & Processing"}
            </span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-indigo-600" />
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Tenancy Start Date</span>
          <h3 className="mt-2 text-xl font-bold text-slate-900 tracking-tight">
            {formatDate(tenantDetails.startDate)}
          </h3>
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            <span className="text-xs text-indigo-750 font-semibold bg-indigo-50 px-2 py-0.5 rounded-full">
              Active Agreement
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Info Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Core details tab card */}
        <div className="lg:col-span-2 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm space-y-6">
          <div className="border-b border-[#e2e8f0] pb-4 flex justify-between items-center">
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900">Agreement Details</h3>
              <p className="text-xs text-slate-500">Live integration sync with Arthur Online systems</p>
            </div>
            <span className="text-xs font-mono font-bold text-[#c8a270] bg-[#062c1a]/5 border border-[#e2e8f0] px-3 py-1.5 rounded-lg">
              Unit: {tenantDetails.unit}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Payments Info</h4>
              <div className="divide-y divide-[#e2e8f0] text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Monthly Rent</span>
                  <span className="font-semibold text-slate-900">{tenantDetails.rent}</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Rent Due Date</span>
                  <span className="font-semibold text-[#062c1a]">
                    {dueDay}{getOrdinal(dueDay)} of the Month
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Rent status</span>
                  <span className={`font-semibold px-2 py-0.5 rounded-md ${
                    tenantDetails.rentStatus?.toLowerCase()?.includes("arrear")
                      ? "text-red-600 bg-red-50"
                      : "text-emerald-600 bg-emerald-50"
                  }`}>
                    {tenantDetails.rentStatus || "Paid Up to Date"}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Compliance Registry</h4>
              <div className="divide-y divide-[#e2e8f0] text-sm">
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">AST Agreement</span>
                  <span className="font-semibold text-slate-800">
                    {isRolling ? "Signed (Rolling)" : "Signed (Fixed)"}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Notice to leave</span>
                  <span className="font-semibold text-slate-800">
                    {isRolling ? "2 Calendar Months" : "Till Term End"}
                  </span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-slate-500">Inventory Status</span>
                  <span className="font-semibold text-emerald-600">Approved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Building Overview block */}
          <div className="bg-slate-50 border border-[#e2e8f0] rounded-xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Building specs</h4>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-center text-2xl shadow-xs">
                🏡
              </div>
              <div className="text-sm">
                <p className="font-bold text-slate-800">
                  FLAT {tenantDetails.unit}, {tenantDetails.property.toUpperCase()}
                </p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {tenantDetails.commentary || "Two-storey mews house / ground-floor maisonette. Fully compliant energy efficiency guidelines, certified electrical routing installations, and comprehensive floorplans."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Support team & Contact cards */}
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm space-y-6">
          <div className="border-b border-[#e2e8f0] pb-3">
            <h3 className="font-serif text-lg font-bold text-slate-900">Property Team Contacts</h3>
          </div>

          <div className="space-y-5">
            {/* Property Manager card */}
            <div className="p-4 rounded-xl border border-[#e2e8f0] bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-[#c8a270] bg-[#062c1a]/5 px-2 py-0.5 rounded-md uppercase">
                  Property Manager
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="text-sm space-y-1">
                <p className="font-bold text-slate-800">Heywood Property Services</p>
                <p className="text-xs text-slate-500">Manager: <strong className="text-slate-700">Anastasia Heywood</strong></p>
                <p className="text-xs text-slate-500">Emergency: <strong>07957 614594</strong></p>
                <a
                  href="mailto:Anastasia@AlltheYards.com"
                  className="block text-xs font-bold text-[#062c1a] hover:underline mt-2"
                >
                  Anastasia@AlltheYards.com
                </a>
              </div>
            </div>

            {/* Landlord Entity card */}
            <div className="p-4 rounded-xl border border-[#e2e8f0] bg-slate-50/50 hover:bg-slate-50 transition-colors space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Landlord Entity
              </span>
              <div className="text-sm space-y-1">
                <p className="font-bold text-slate-800">{metadata.landlordEntity}</p>
                <p className="text-xs text-slate-500">Registered: {metadata.landlordEntity}</p>
                <p className="text-xs text-slate-500">Office: The Old Court House, New Road Avenue, Chatham, Kent, ME4 6BE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
