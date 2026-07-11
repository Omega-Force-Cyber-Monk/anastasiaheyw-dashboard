"use client";

import React, { useState } from "react";
import ReportTable from "~/app/_components/admin/ReportTable";
import UtilityTable from "~/app/_components/admin/UtilityTable";

export default function ReportAndUtilityPage() {
  const [activeTab, setActiveTab] = useState<"reports" | "utilities">("reports");

  return (
    <div className="animate-in fade-in space-y-8 duration-300">
      {/* Page Header */}
      <div>
        <h1 className="font-serif text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
          Maintenance & Utility Management
        </h1>
        <p className="mt-1 text-sm text-slate-500 sm:text-base">
          Oversee maintenance tickets submitted by tenants and track meter reading logs.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="border-b border-[#e2e8f0]">
        <nav className="-mb-px flex gap-6" aria-label="Tabs">
          <button
            onClick={() => setActiveTab("reports")}
            className={`cursor-pointer shrink-0 border-b-2 py-4 px-1 text-sm font-bold transition-all ${
              activeTab === "reports"
                ? "border-[#062c1a] text-[#062c1a]"
                : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            Maintenance Reports
          </button>
          <button
            onClick={() => setActiveTab("utilities")}
            className={`cursor-pointer shrink-0 border-b-2 py-4 px-1 text-sm font-bold transition-all ${
              activeTab === "utilities"
                ? "border-[#062c1a] text-[#062c1a]"
                : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
            }`}
          >
            Utility Readings
          </button>
        </nav>
      </div>

      {/* Tab Contents */}
      <div className="transition-all duration-300">
        {activeTab === "reports" ? (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h2 className="font-serif text-xl font-bold text-slate-800">
                  Active Maintenance Tickets
                </h2>
                <p className="text-xs text-slate-500">
                  Respond, update status, and manage tenant maintenance issues.
                </p>
              </div>
            </div>
            <ReportTable />
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h2 className="font-serif text-xl font-bold text-slate-800">
                  Utility Meter Registry
                </h2>
                <p className="text-xs text-slate-500">
                  View and track utility readings submitted by tenants for rent billing.
                </p>
              </div>
            </div>
            <UtilityTable />
          </div>
        )}
      </div>
    </div>
  );
}
