"use client";

import React from "react";

export default function TenantDashboard() {
  const paymentHistory = [
    { period: "June 2026", amount: "£950.00", status: "Paid", date: "June 01, 2026" },
    { period: "May 2026", amount: "£950.00", status: "Paid", date: "May 01, 2026" },
    { period: "April 2026", amount: "£950.00", status: "Paid", date: "April 02, 2026" },
  ];

  const maintenanceRequests = [
    { issue: "Leaking bathroom sink faucet", status: "In Progress", date: "June 25, 2026" },
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto px-4 md:px-0">
      {/* Welcome Banner */}
      <div className="bg-[#062c1a] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden shadow-md">
        <div className="absolute right-0 bottom-0 top-0 opacity-10 flex items-center justify-center pr-12 pointer-events-none">
          <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div className="relative z-10 space-y-2">
          <span className="text-[#c8a270] text-xs font-bold uppercase tracking-widest">
            Tenant Portal
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Welcome home, Alex!
          </h1>
          <p className="text-emerald-100/80 text-sm max-w-md">
            Manage your lease, payments, and maintenance requests for <span className="font-semibold text-white">Ashford Yard, Unit 4B</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Account Summary & Quick Actions */}
        <div className="space-y-6 md:col-span-1">
          {/* Rent Box */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next Rent Payment</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-800">£950.00</span>
              <span className="text-xs text-slate-400">GBP</span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Due on July 1, 2026</p>
            <button className="w-full mt-6 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white font-semibold rounded-lg text-sm transition-all shadow-sm cursor-pointer">
              Pay Rent Now
            </button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-sm font-bold text-slate-800 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg text-sm transition-all cursor-pointer">
                Request Maintenance
              </button>
              <button className="w-full py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-lg text-sm transition-all cursor-pointer">
                Contact Management
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Payments History & Maintenance Requests */}
        <div className="space-y-6 md:col-span-2">
          {/* Maintenance Requests */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Open Maintenance Requests</h3>
            {maintenanceRequests.length > 0 ? (
              <div className="space-y-3">
                {maintenanceRequests.map((req, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-50/50 border border-slate-100">
                    <div>
                      <p className="text-sm font-bold text-slate-800">{req.issue}</p>
                      <p className="text-xs text-slate-400 mt-0.5">Submitted: {req.date}</p>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-100">
                      {req.status}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-500 py-2">No active maintenance requests.</p>
            )}
          </div>

          {/* Payment History */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Payment History</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead>
                  <tr className="border-b border-slate-100 text-slate-400 font-medium">
                    <th className="pb-3">Period</th>
                    <th className="pb-3">Amount</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Paid Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {paymentHistory.map((p, idx) => (
                    <tr key={idx}>
                      <td className="py-3 font-semibold text-slate-800">{p.period}</td>
                      <td className="py-3 font-bold text-slate-800">{p.amount}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 text-slate-400">{p.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
