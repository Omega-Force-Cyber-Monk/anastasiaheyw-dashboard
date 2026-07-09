"use client";

import React, { useMemo } from "react";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export default function TenantRentPage() {
  const { tenantDetails, metadata } = useTenant();

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

  const ledgerHistory = useMemo(() => {
    return [
      { date: `29 June 2026`, desc: `Monthly Rent (Flat ${tenantDetails.unit})`, amount: tenantDetails.rent, status: "Paid" },
      { date: `29 May 2026`, desc: `Monthly Rent (Flat ${tenantDetails.unit})`, amount: tenantDetails.rent, status: "Paid" },
      { date: `29 April 2026`, desc: `Monthly Rent (Flat ${tenantDetails.unit})`, amount: tenantDetails.rent, status: "Paid" },
      { date: `30 April 2025`, desc: "Tenancy Deposit Protected", amount: tenantDetails.deposit, status: "Lodged" },
    ];
  }, [tenantDetails]);

  return (
    <div className="animate-in fade-in space-y-6 duration-300">
      {/* Header Panel */}
      <div className="border-b border-[#e2e8f0] pb-5">
        <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Rent & Payments Ledger</h1>
        <p className="text-sm text-slate-500 mt-1">Live statement summary synced with Orchard Accountants and Arthur Online.</p>
      </div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="relative rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#c8a270]" />
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Monthly Rent</span>
          <h3 className="mt-2 text-2xl font-black text-slate-900 tracking-tight">{tenantDetails.rent}</h3>
          <p className="text-xs text-slate-500 mt-2 font-medium">Standing order due monthly on {dueDay}{getOrdinal(dueDay)}</p>
        </div>

        <div className="relative rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#062c1a]" />
          <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Deposit Protection</span>
          <h3 className="mt-2 text-2xl font-black text-slate-900 tracking-tight">{tenantDetails.deposit}</h3>
          <p className="text-xs text-emerald-700 font-semibold mt-2 flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 rounded-full w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {tenantDetails.lodged === "Lodged" ? "Lodge Confirmed" : "Received & Processing"}
          </p>
        </div>

        <div className="relative rounded-xl border border-[#e2e8f0] bg-[#062c1a]/5 p-6 shadow-sm overflow-hidden">
          <span className="text-xs font-bold tracking-wider text-[#c8a270] uppercase">Orchard Billing SPV</span>
          <h3 className="mt-2 text-sm font-bold text-slate-900 leading-snug">{metadata.landlordEntity}</h3>
          <p className="text-[11px] text-slate-500 mt-2">
            Reference code: <span className="font-mono font-bold text-[#062c1a] bg-[#062c1a]/5 px-1.5 py-0.5 rounded-sm">{metadata.referenceCode}</span>
          </p>
        </div>
      </div>

      {/* Ledger Table Container */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-[#e2e8f0]">
          <h3 className="font-serif text-lg font-bold text-slate-900">Payment Statement Logs</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[#e2e8f0] text-slate-455 font-bold bg-slate-50/50 text-xs uppercase tracking-wider">
                <th className="py-3.5 px-6">Transaction Date</th>
                <th className="py-3.5 px-6">Description</th>
                <th className="py-3.5 px-6 text-right">Amount</th>
                <th className="py-3.5 px-6">Status</th>
                <th className="py-3.5 px-6 text-center">Invoices / Receipts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e2e8f0]">
              {ledgerHistory.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-slate-800">{item.date}</td>
                  <td className="py-4 px-6 text-slate-600">{item.desc}</td>
                  <td className="py-4 px-6 text-right font-semibold text-slate-950">{item.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                      item.status === "Paid" || item.status === "Lodged"
                        ? "text-emerald-700 bg-emerald-50 border border-[#e2e8f0]"
                        : "text-amber-700 bg-amber-50 border border-[#e2e8f0]"
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        item.status === "Paid" || item.status === "Lodged" ? "bg-emerald-500" : "bg-amber-500"
                      }`} />
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-[#062c1a]/5 hover:bg-[#062c1a]/10 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer">
                      📥 Download Receipt
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Instruction box */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-slate-50 p-6 shadow-2xs space-y-4">
        <h3 className="font-serif text-base font-bold text-slate-900">Standing Order Reference & Details</h3>
        <p className="text-sm text-slate-650 leading-relaxed max-w-4xl">
          Standing orders must be configured to process 2 days prior to the {dueDay}th to ensure clearance by the rent due date. To configure or modify payment setups, please contact <span className="font-semibold text-emerald-800">Anastasia@AlltheYards.com</span>. Always reference payments with <strong className="font-mono text-[#062c1a] bg-[#062c1a]/5 px-1 py-0.5 rounded-sm">{metadata.referenceCode}</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#e2e8f0] pt-4 text-sm">
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Bank Name</span>
            <span className="font-semibold text-slate-800">{metadata.bankName}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Account Details</span>
            <span className="font-semibold text-slate-800">{metadata.accountName}</span>
          </div>
          <div>
            <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Sort Code & Account No</span>
            <span className="font-semibold text-slate-850">{metadata.sortCode} | {metadata.accountNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
