"use client";

import React from "react";

export default function TenantDocumentsPage() {
  const documents = [
    {
      name: "Tenancy Agreement (Ashford Yard, Unit 4B)",
      type: "Contract",
      size: "2.4 MB",
      status: "Signed",
      action: "Download",
    },
    {
      name: "Energy Performance Certificate (EPC)",
      type: "Safety Certificate",
      size: "1.1 MB",
      status: "Available",
      action: "Download",
    },
    {
      name: "Gas Safety Certificate (CP12)",
      type: "Safety Certificate",
      size: "850 KB",
      status: "Available",
      action: "Download",
    },
  ];

  return (
    <div className="mx-auto w-full space-y-8 px-4 md:px-0">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
          Document Vault
        </h1>
        <p className="mt-1 text-slate-500">
          Access your leases, safety certificates, and tenancy documents 24/7.
        </p>
      </div>

      {/* Info Card */}
      <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
        <span className="text-xl">🛡️</span>
        <div>
          <h4 className="text-sm font-bold text-[#062c1a]">Secure Hosting</h4>
          <p className="mt-0.5 text-xs leading-relaxed text-emerald-700">
            All files are white-labeled under All The Yards and stored securely
            in compliance with local regulations.
          </p>
        </div>
      </div>

      {/* Documents Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                <th className="px-6 py-4">Document Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">File Size</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {documents.map((d, idx) => (
                <tr key={idx} className="transition-all hover:bg-slate-50/50">
                  <td className="px-6 py-4 font-bold text-slate-800">
                    {d.name}
                  </td>
                  <td className="px-6 py-4 text-slate-500">{d.type}</td>
                  <td className="px-6 py-4 text-slate-400">{d.size}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                        d.status === "Signed"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {d.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => alert(`Downloading ${d.name}...`)}
                      className="cursor-pointer text-xs font-bold text-[#062c1a] hover:text-[#0c472c] hover:underline"
                    >
                      {d.action}
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
