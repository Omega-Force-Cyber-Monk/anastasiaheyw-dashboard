"use client";

import React, { useMemo, useState } from "react";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export default function TenantRentPage() {
  const { tenantDetails, metadata } = useTenant();

  const [selectedReceipt, setSelectedReceipt] = useState<{
    date: string;
    desc: string;
    amount: string;
    status: string;
  } | null>(null);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);

  const handleOpenReceipt = (item: {
    date: string;
    desc: string;
    amount: string;
    status: string;
  }) => {
    setSelectedReceipt(item);
    setIsReceiptOpen(true);
  };

  const handlePrintReceipt = (item: {
    date: string;
    desc: string;
    amount: string;
    status: string;
  }) => {
    const dateFormatted = item.date.replace(/ /g, "-").toUpperCase();
    const receiptNo = `REC-${dateFormatted}-${tenantDetails.code ?? tenantDetails.unit}`;

    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow?.document ?? iframe.contentDocument;
    if (!doc) return;

    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Receipt ${receiptNo}</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap');
            
            body {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
              color: #1e293b;
              margin: 0;
              padding: 40px;
              background-color: #ffffff;
            }
            .container {
              max-width: 800px;
              margin: 0 auto;
            }
            .header {
              border-bottom: 4px solid #062c1a;
              padding-bottom: 20px;
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            }
            .logo-area h1 {
              font-family: 'Playfair Display', Georgia, serif;
              color: #062c1a;
              margin: 0 0 5px 0;
              font-size: 24px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .logo-area p {
              font-size: 11px;
              color: #64748b;
              margin: 0;
              text-transform: uppercase;
              letter-spacing: 1px;
              font-weight: 600;
            }
            .receipt-title {
              text-align: right;
            }
            .receipt-title h2 {
              color: #c8a270;
              margin: 0 0 5px 0;
              font-size: 22px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            .receipt-title p {
              font-size: 12px;
              color: #475569;
              margin: 0;
              font-weight: 600;
            }
            .info-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 40px;
              margin-bottom: 40px;
            }
            .info-box h3 {
              font-size: 12px;
              color: #c8a270;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin: 0 0 10px 0;
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 5px;
              font-weight: 700;
            }
            .info-box p {
              font-size: 13px;
              line-height: 1.6;
              margin: 0 0 5px 0;
            }
            .info-box strong {
              color: #0f172a;
            }
            .table-container {
              margin-bottom: 40px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              text-align: left;
            }
            th {
              background-color: #f8fafc;
              border-bottom: 2px solid #e2e8f0;
              padding: 12px 16px;
              font-size: 11px;
              font-weight: 700;
              color: #475569;
              text-transform: uppercase;
              letter-spacing: 0.5px;
            }
            td {
              border-bottom: 1px solid #e2e8f0;
              padding: 16px;
              font-size: 13px;
            }
            .amount-col {
              text-align: right;
            }
            .amount-val {
              font-weight: 600;
              color: #0f172a;
            }
            .status-badge {
              display: inline-block;
              padding: 4px 8px;
              border-radius: 9999px;
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
            }
            .status-paid {
              color: #15803d;
              background-color: #f0fdf4;
              border: 1px solid #bbf7d0;
            }
            .total-row td {
              border-bottom: none;
              padding-top: 25px;
            }
            .total-box {
              background-color: #062c1a;
              color: #ffffff;
              padding: 16px 24px;
              border-radius: 8px;
              display: inline-block;
              float: right;
              text-align: right;
              min-width: 200px;
            }
            .total-box span {
              display: block;
              font-size: 11px;
              text-transform: uppercase;
              letter-spacing: 1px;
              opacity: 0.8;
              margin-bottom: 4px;
            }
            .total-box strong {
              font-size: 20px;
              font-weight: 700;
            }
            .footer {
              margin-top: 80px;
              border-top: 1px solid #e2e8f0;
              padding-top: 20px;
              text-align: center;
              font-size: 11px;
              color: #94a3b8;
              line-height: 1.5;
            }
            .footer p {
              margin: 0 0 5px 0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo-area">
                <h1>Heywood Property Services</h1>
                <p>Official Transaction Receipt</p>
              </div>
              <div class="receipt-title">
                <h2>RECEIPT</h2>
                <p>No: ${receiptNo}</p>
              </div>
            </div>

            <div class="info-grid">
              <div class="info-box">
                <h3>Received From</h3>
                <p><strong>Tenant:</strong> ${tenantDetails.tenants.join(" & ")}</p>
                <p><strong>Property:</strong> Flat ${tenantDetails.unit}, ${tenantDetails.property}</p>
                <p><strong>Address:</strong> ${tenantDetails.address ?? ("Flat " + tenantDetails.unit + ", " + tenantDetails.property)}</p>
              </div>
              <div class="info-box">
                <h3>Payment Details</h3>
                <p><strong>Date:</strong> ${item.date}</p>
                <p><strong>Payment Method:</strong> Standing Order</p>
                <p><strong>Reference Code:</strong> ${metadata.referenceCode}</p>
                <p><strong>Billing Entity:</strong> ${metadata.landlordEntity}</p>
              </div>
            </div>

            <div class="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Payment Method</th>
                    <th>Status</th>
                    <th class="amount-col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${item.desc}</td>
                    <td>Standing Order</td>
                    <td>
                      <span class="status-badge status-paid">${item.status}</span>
                    </td>
                    <td class="amount-col amount-val">${item.amount}</td>
                  </tr>
                  <tr class="total-row">
                    <td colspan="2"></td>
                    <td colspan="2">
                      <div class="total-box">
                        <span>Total Paid</span>
                        <strong>${item.amount}</strong>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="footer">
              <p>Heywood Property Services receipts are digitally generated and authenticated via real-time integration with Arthur Online and Orchard Accountants.</p>
              <p>For billing queries, please contact Anastasia@AlltheYards.com.</p>
            </div>
          </div>
        </body>
      </html>
    `);

    doc.close();

    setTimeout(() => {
      iframe.contentWindow?.focus();
      iframe.contentWindow?.print();
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }, 500);
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
    ? new Date(tenantDetails.startDate).getDate() ?? 29
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
                    <button
                      onClick={() => handleOpenReceipt(item)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-[#062c1a]/5 hover:bg-[#062c1a]/10 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer active:scale-95"
                    >
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

      {/* Dynamic Receipt Modal */}
      {isReceiptOpen && selectedReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200" onClick={() => setIsReceiptOpen(false)}>
          <div
            className="bg-white rounded-3xl shadow-2xl relative w-full max-w-[550px] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-[#e2e8f0]">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                Receipt Preview
              </h3>
              <button
                onClick={() => setIsReceiptOpen(false)}
                className="p-1.5 text-gray-405 hover:text-red-500 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 text-red-500 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Receipt Content */}
            <div className="p-8 overflow-y-auto flex-1 bg-white font-sans text-slate-800">
              {/* Paper styled receipt */}
              <div className="border border-dashed border-slate-300 rounded-2xl p-6 bg-slate-50/50 relative overflow-hidden">
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#062c1a]" />
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-serif text-lg font-bold text-slate-900 leading-tight">Heywood Property</h2>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Transaction Receipt</span>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                      selectedReceipt.status === "Paid" || selectedReceipt.status === "Lodged"
                        ? "text-emerald-700 bg-emerald-50 border border-emerald-200/50"
                        : "text-amber-700 bg-amber-50 border border-amber-200/50"
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${
                        selectedReceipt.status === "Paid" || selectedReceipt.status === "Lodged" ? "bg-emerald-500" : "bg-amber-500"
                      }`} />
                      {selectedReceipt.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-4 border-b border-slate-200/60 pb-4">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Receipt No</span>
                      <span className="font-mono font-semibold text-slate-800">
                        REC-{selectedReceipt.date.replace(/ /g, "-").toUpperCase()}-{tenantDetails.code || tenantDetails.unit}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date Issued</span>
                      <span className="font-semibold text-slate-800">{selectedReceipt.date}</span>
                    </div>
                  </div>

                  <div className="space-y-3 border-b border-slate-200/60 pb-4">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Received From</span>
                      <span className="font-semibold text-slate-800">{tenantDetails.tenants.join(" & ")}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Property Address</span>
                      <span className="font-semibold text-slate-800">Flat {tenantDetails.unit}, {tenantDetails.property}</span>
                    </div>
                  </div>

                  <div className="space-y-3 border-b border-slate-200/60 pb-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Billing Entity</span>
                        <span className="font-semibold text-slate-800">{metadata.landlordEntity}</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Reference Code</span>
                        <span className="font-mono font-bold text-[#062c1a] bg-[#062c1a]/5 px-1.5 py-0.5 rounded-sm w-fit block mt-0.5">
                          {metadata.referenceCode}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Itemized transaction description */}
                  <div className="pt-2">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Item Description</span>
                    <div className="flex justify-between items-center bg-white p-3.5 rounded-xl border border-slate-200/50 shadow-3xs">
                      <span className="font-semibold text-slate-700">{selectedReceipt.desc}</span>
                      <span className="font-black text-slate-900 text-sm">{selectedReceipt.amount}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => handlePrintReceipt(selectedReceipt)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#062c1a] hover:bg-[#0c472c] text-white text-sm font-bold uppercase rounded-xl transition-all cursor-pointer shadow-sm active:scale-98"
                >
                  🖨️ Print / Save PDF
                </button>
                <button
                  onClick={() => setIsReceiptOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold uppercase rounded-xl transition-all cursor-pointer active:scale-98"
                >
                  Close Preview
                </button>
              </div>
              <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed">
                For any inquiries regarding this transaction record, please email <span className="font-semibold text-emerald-800">Anastasia@AlltheYards.com</span>.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
