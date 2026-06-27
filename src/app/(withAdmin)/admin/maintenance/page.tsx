"use client";

import React, { useState } from "react";

export default function AdminMaintenancePage() {
  const [filter, setFilter] = useState("All");

  const tickets = [
    {
      id: 1,
      issue: "Water leak in bathroom sink",
      unit: "Ashford Yard, Unit 4B",
      priority: "Urgent",
      status: "In Progress",
      tenant: "Alex Rivera",
      assignedContractor: "PlumbFlow Services Ltd",
      submittedDate: "June 25, 2026",
    },
    {
      id: 2,
      issue: "Broken AC unit in main bedroom",
      unit: "Trinity Place, Unit 8A",
      priority: "Urgent",
      status: "Scheduled",
      tenant: "Marcus Brody",
      assignedContractor: "CoolAir Engineers",
      submittedDate: "June 24, 2026",
    },
    {
      id: 3,
      issue: "Stove burner not heating",
      unit: "Repton House, Unit 10C",
      priority: "Medium",
      status: "Open",
      tenant: "Jordan Patel",
      assignedContractor: "None",
      submittedDate: "June 20, 2026",
    },
    {
      id: 4,
      issue: "Common hallway light bulb replacement",
      unit: "Ashford Yard, Common Areas",
      priority: "Low",
      status: "Resolved",
      tenant: "None (Internal)",
      assignedContractor: "HandyMan Dan",
      submittedDate: "June 15, 2026",
    },
  ];

  const filteredTickets =
    filter === "All"
      ? tickets
      : tickets.filter((t) => t.status === filter);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Maintenance</h1>
          <p className="text-slate-500 mt-1">Track open issues, assign tasks to contractors, and monitor completion.</p>
        </div>
        <button className="px-4 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-lg text-sm font-semibold transition-all shadow-sm cursor-pointer">
          Create New Ticket
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-px">
        {["All", "Open", "Scheduled", "In Progress", "Resolved"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              filter === tab
                ? "border-[#062c1a] text-[#062c1a]"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tickets List */}
      <div className="space-y-4">
        {filteredTickets.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-slate-200 transition-all"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    t.priority === "Urgent"
                      ? "bg-rose-50 text-rose-600 border border-rose-100"
                      : t.priority === "Medium"
                      ? "bg-amber-50 text-amber-600 border border-amber-100"
                      : "bg-slate-50 text-slate-600 border border-slate-200"
                  }`}
                >
                  {t.priority} Priority
                </span>
                <span className="text-xs text-slate-400">Submitted: {t.submittedDate}</span>
              </div>
              <h3 className="text-base font-bold text-slate-800 leading-snug">{t.issue}</h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                <span>📍 Unit: <span className="text-slate-700 font-bold">{t.unit}</span></span>
                <span>👤 Tenant: <span className="text-slate-700">{t.tenant}</span></span>
                <span>🔧 Contractor: <span className="text-[#c8a270] font-bold">{t.assignedContractor}</span></span>
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0">
              <span className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    t.status === "Open"
                      ? "bg-amber-500"
                      : t.status === "Scheduled"
                      ? "bg-sky-500"
                      : t.status === "In Progress"
                      ? "bg-blue-500 animate-pulse"
                      : "bg-emerald-500"
                  }`}
                ></span>
                {t.status}
              </span>
              <button className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 rounded-lg text-xs font-semibold text-slate-700 transition-all cursor-pointer">
                Manage Ticket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
