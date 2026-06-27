"use client";

import React, { useState } from "react";

export default function TenantsPage() {
  const [search, setSearch] = useState("");

  const tenants = [
    {
      id: 1,
      name: "Alex Rivera",
      email: "alex.rivera@alltheyards.com",
      phone: "+44 7911 123456",
      unit: "Ashford Yard, Unit 4B",
      rent: "£950",
      status: "Paid",
      leaseStart: "Jan 01, 2026",
      leaseEnd: "Dec 31, 2026",
    },
    {
      id: 2,
      name: "Jordan Patel",
      email: "jordan.patel@alltheyards.com",
      phone: "+44 7911 654321",
      unit: "Repton House, Unit 2A",
      rent: "£800",
      status: "Paid",
      leaseStart: "Feb 15, 2026",
      leaseEnd: "Feb 14, 2027",
    },
    {
      id: 3,
      name: "Sarah Chen",
      email: "sarah.chen@alltheyards.com",
      phone: "+44 7911 987654",
      unit: "Trinity Place, Unit 12C",
      rent: "£1,100",
      status: "Pending",
      leaseStart: "Mar 01, 2026",
      leaseEnd: "Feb 28, 2027",
    },
    {
      id: 4,
      name: "Marcus Brody",
      email: "marcus.brody@alltheyards.com",
      phone: "+44 7911 333444",
      unit: "Ashford Yard, Unit 1A",
      rent: "£950",
      status: "Paid",
      leaseStart: "Jan 10, 2026",
      leaseEnd: "Jan 09, 2027",
    },
  ];

  const filteredTenants = tenants.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.unit.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Tenants</h1>
          <p className="text-slate-500 mt-1">Manage active leases, tenant profiles, and communications.</p>
        </div>
        <button className="px-4 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-lg text-sm font-semibold transition-all shadow-sm cursor-pointer">
          Add Tenant
        </button>
      </div>

      {/* Search Input */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="Search by name or unit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all"
        />
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </div>

      {/* Tenants Table */}
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-400 font-semibold text-xs uppercase tracking-wider">
                <th className="px-6 py-4">Tenant Name</th>
                <th className="px-6 py-4">Assigned Unit</th>
                <th className="px-6 py-4">Rent</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Lease Term</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTenants.map((t) => (
                <tr key={t.id} className="hover:bg-slate-50/50 transition-all">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800">{t.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{t.email}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-medium">{t.unit}</td>
                  <td className="px-6 py-4 font-bold text-slate-800">{t.rent}</td>
                  <td className="px-6 py-4">
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
                  <td className="px-6 py-4">
                    <div className="text-xs text-slate-700 font-medium">
                      {t.leaseStart} - {t.leaseEnd}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-[#062c1a] hover:text-[#0c472c] font-bold text-xs hover:underline cursor-pointer mr-3">
                      Edit
                    </button>
                    <button className="text-rose-600 hover:text-rose-800 font-bold text-xs hover:underline cursor-pointer">
                      End Lease
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
