"use client";

import React from "react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Properties",
      value: "42",
      description: "+4 new properties added",
      trend: "up",
      color: "border-l-4 border-[#062c1a]",
      icon: (
        <svg className="w-6 h-6 text-[#062c1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Active Tenants",
      value: "128",
      description: "98% occupancy rate",
      trend: "up",
      color: "border-l-4 border-[#c8a270]",
      icon: (
        <svg className="w-6 h-6 text-[#c8a270]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "Collected Revenue",
      value: "$54,230.00",
      description: "92% collected this month",
      trend: "up",
      color: "border-l-4 border-emerald-600",
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Pending Maintenance",
      value: "8",
      description: "3 marked as urgent",
      trend: "down",
      color: "border-l-4 border-rose-500",
      icon: (
        <svg className="w-6 h-6 text-rose-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
  ];

  const transactions = [
    { tenant: "Alex Rivera", unit: "Ashford Yard, Unit 4B", amount: "$950.00", status: "Paid", date: "June 25, 2026" },
    { tenant: "Jordan Patel", unit: "Repton House, Unit 2A", amount: "$800.00", status: "Paid", date: "June 24, 2026" },
    { tenant: "Sarah Chen", unit: "Trinity Place, Unit 12C", amount: "$1,100.00", status: "Pending", date: "June 20, 2026" },
    { tenant: "Marcus Brody", unit: "Ashford Yard, Unit 1A", amount: "$950.00", status: "Paid", date: "June 18, 2026" },
  ];

  const tickets = [
    { issue: "Water leak in bathroom sink", unit: "Ashford Yard, 4B", priority: "Urgent", status: "In Progress" },
    { issue: "Broken AC unit", unit: "Trinity Place, 8A", priority: "Urgent", status: "Scheduled" },
    { issue: "Stove burner not heating", unit: "Repton House, 10C", priority: "Medium", status: "Open" },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 mt-1">Real-time overview of All The Yards properties and operations.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 bg-white hover:bg-slate-50 text-sm font-semibold transition-all cursor-pointer">
            Export Report
          </button>
          <button className="px-4 py-2 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-lg text-sm font-semibold transition-all shadow-sm cursor-pointer">
            Add New Property
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 ${stat.color}`}
          >
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.title}</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</h3>
              <p className="text-xs text-slate-500 mt-1.5 flex items-center gap-1">
                {stat.description}
              </p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100/60">
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Transactions (Table) */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Recent Rent Payments</h3>
            <button className="text-xs font-bold text-[#062c1a] hover:text-[#0c472c] hover:underline transition-all cursor-pointer">
              View All Payments
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-medium">
                  <th className="pb-3">Tenant</th>
                  <th className="pb-3">Unit</th>
                  <th className="pb-3">Amount</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {transactions.map((t, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 font-semibold text-slate-800">{t.tenant}</td>
                    <td className="py-3.5 text-slate-500">{t.unit}</td>
                    <td className="py-3.5 font-bold text-slate-800">{t.amount}</td>
                    <td className="py-3.5">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          t.status === "Paid"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="py-3.5 text-slate-400">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Maintenance Tickets */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Maintenance Requests</h3>
            <button className="text-xs font-bold text-[#062c1a] hover:text-[#0c472c] hover:underline transition-all cursor-pointer">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {tickets.map((ticket, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs font-bold text-slate-800 line-clamp-1">{ticket.issue}</h4>
                  <span
                    className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      ticket.priority === "Urgent"
                        ? "bg-rose-50 text-rose-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Unit: {ticket.unit}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
                  <span className="text-[10px] text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                    {ticket.status}
                  </span>
                  <button className="text-[10px] font-bold text-[#062c1a] hover:text-[#0c472c] hover:underline cursor-pointer">
                    Assign Agent →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
