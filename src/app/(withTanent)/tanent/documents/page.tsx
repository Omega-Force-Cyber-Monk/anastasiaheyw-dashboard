"use client";

import React, { useMemo } from "react";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export default function TenantDocumentsPage() {
  const { tenantDetails, metadata } = useTenant();

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

  const complianceDocs = useMemo(() => {
    const isRolling = tenantDetails.lettingType === "AST ROLLING";
    
    return [
      {
        title: `${isRolling ? "Periodic" : "Fixed Term"} Tenancy Agreement`,
        category: "Agreement Contract",
        date: formatDate(tenantDetails.startDate),
        status: "Signed",
        description: `AST agreement. Initial starts ${formatDate(tenantDetails.startDate)}, ${isRolling ? "periodic tenancy rolling. 2 months notice period." : "fixed term tenancy."}`,
        icon: "📄",
        accent: "border-l-4 border-l-emerald-600"
      },
      {
        title: "Inventory Check-in Document",
        category: "Condition Report",
        date: formatDate(tenantDetails.startDate),
        status: "Approved",
        description: `Check-in inventory detailing initial flat condition and electricity (${metadata.elecMeterCheckInValue} kWh) & water (${metadata.waterMeterCheckInValue} m³) meter readings.`,
        icon: "📋",
        accent: "border-l-4 border-l-[#c8a270]"
      },
      {
        title: "EIC Electrical Certificate",
        category: "Compliance Safety",
        date: formatDate(metadata.eicInspectedDate),
        status: "Certified",
        description: `Electrical Installation Safety certificate check. Serial: ${metadata.eicSerial}. Next inspection recommended by ${formatDate(metadata.eicExpiryDate)}.`,
        icon: "⚡",
        accent: "border-l-4 border-l-sky-600"
      },
      {
        title: "EPC Energy Performance Certificate",
        category: "Compliance Rating",
        date: formatDate(metadata.epcAssessedDate),
        status: `Rating: ${metadata.epcRating}`,
        description: `Flat energy efficiency check rating certificate (Score ${metadata.epcScore}, Certificate ${metadata.epcCertificate}). Valid till ${formatDate(metadata.epcExpiryDate)}.`,
        icon: "🔥",
        accent: "border-l-4 border-l-amber-600"
      },
      {
        title: "Building Insurance Certificate",
        category: "Landlord Coverage",
        date: formatDate(metadata.insuranceStartDate),
        status: metadata.insuranceStatus,
        description: `Ageas 'HomeGuard Let' building insurance, arranged via Sequence/Ageas. Policy: ${metadata.insurancePolicy}.`,
        icon: "🛡️",
        accent: "border-l-4 border-l-indigo-600"
      },
      {
        title: "Tenant Reference Checks",
        category: "Background Check",
        date: formatDate(tenantDetails.startDate),
        status: "Passed",
        description: `Tenant screening & referencing report profiles completed for ${tenantDetails.tenants.join(" & ")}.`,
        icon: "📇",
        accent: "border-l-4 border-l-teal-600"
      },
      {
        title: "Orchard Accountants Invoice",
        category: "Financial Statement",
        date: formatDate(tenantDetails.startDate),
        status: "Paid",
        description: "Tenant-find invoice and payment receipt billing details.",
        icon: "💰",
        accent: "border-l-4 border-l-yellow-600"
      },
      {
        title: "Landlord Terms of Business (TOB)",
        category: "Landlord Doc",
        date: formatDate(tenantDetails.startDate),
        status: "Signed",
        description: "TOB and Landlord Indemnity agreement parameters.",
        icon: "🖋️",
        accent: "border-l-4 border-l-purple-600"
      }
    ];
  }, [tenantDetails, metadata]);

  return (
    <div className="animate-in fade-in space-y-6 duration-300">
      {/* Header Panel */}
      <div className="border-b border-[#e2e8f0] pb-5">
        <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Tenancy Documents & Compliance</h1>
        <p className="text-sm text-slate-500 mt-1">Official certificates, periodic agreements, and landlord business guidelines linked to Arthur Online.</p>
      </div>

      {/* Compliance Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {complianceDocs.map((doc, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl border border-[#e2e8f0] bg-white hover:shadow-md transition-all flex flex-col justify-between gap-5 group ${doc.accent}`}
          >
            <div className="flex gap-4">
              <span className="text-3xl p-3 bg-slate-50 text-slate-700 rounded-xl w-12 h-12 flex items-center justify-center border border-[#e2e8f0] shadow-3xs">
                {doc.icon}
              </span>
              <div>
                <span className="text-[10px] font-bold text-[#c8a270] uppercase bg-[#062c1a]/5 px-2 py-0.5 rounded-md border border-[#e2e8f0]/15">
                  {doc.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mt-2 group-hover:text-[#062c1a] transition-colors leading-tight">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs border-t border-[#e2e8f0] pt-4 mt-2">
              <span className="text-slate-400 font-medium">Logged: {doc.date}</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-[#e2e8f0]">
                  {doc.status}
                </span>
                <button className="text-xs font-bold text-emerald-800 bg-[#062c1a]/5 hover:bg-[#062c1a]/10 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer">
                  View PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Missing Information Tracker */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-amber-50/30 p-6 space-y-2 shadow-3xs">
        <h3 className="font-serif text-base font-bold text-amber-900 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
          Awaiting Compliance Sync
        </h3>
        <p className="text-xs text-amber-800/80 leading-relaxed max-w-4xl">
          Certain additional parameters (such as Electric/Water provider details, Broadband lines, and property photos) are awaiting manual assignment on Arthur. Once added, compliance data feeds will refresh.
        </p>
      </div>
    </div>
  );
}
