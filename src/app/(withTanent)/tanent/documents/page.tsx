"use client";

import React, { useState, useMemo } from "react";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

interface DocItem {
  title: string;
  category: string;
  date: string;
  status: string;
  description: string;
  icon: string;
  accent: string;
  type: "agreement" | "inventory" | "eic" | "epc" | "insurance" | "reference" | "invoice" | "tob";
}

export default function TenantDocumentsPage() {
  const { tenantDetails, metadata } = useTenant();

  const [selectedDoc, setSelectedDoc] = useState<DocItem | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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

  const complianceDocs = useMemo<DocItem[]>(() => {
    const isRolling = tenantDetails.lettingType === "AST ROLLING";
    
    return [
      {
        title: `${isRolling ? "Periodic" : "Fixed Term"} Tenancy Agreement`,
        category: "Agreement Contract",
        date: formatDate(tenantDetails.startDate),
        status: "Signed",
        description: `AST agreement. Initial starts ${formatDate(tenantDetails.startDate)}, ${isRolling ? "periodic tenancy rolling. 2 months notice period." : "fixed term tenancy."}`,
        icon: "📄",
        accent: "border-l-4 border-l-emerald-600",
        type: "agreement"
      },
      {
        title: "Inventory Check-in Document",
        category: "Condition Report",
        date: formatDate(tenantDetails.startDate),
        status: "Approved",
        description: `Check-in inventory detailing initial flat condition and electricity (${metadata.elecMeterCheckInValue} kWh) & water (${metadata.waterMeterCheckInValue} m³) meter readings.`,
        icon: "📋",
        accent: "border-l-4 border-l-[#c8a270]",
        type: "inventory"
      },
      {
        title: "EIC Electrical Certificate",
        category: "Compliance Safety",
        date: formatDate(metadata.eicInspectedDate),
        status: "Certified",
        description: `Electrical Installation Safety certificate check. Serial: ${metadata.eicSerial}. Next inspection recommended by ${formatDate(metadata.eicExpiryDate)}.`,
        icon: "⚡",
        accent: "border-l-4 border-l-sky-600",
        type: "eic"
      },
      {
        title: "EPC Energy Performance Certificate",
        category: "Compliance Rating",
        date: formatDate(metadata.epcAssessedDate),
        status: `Rating: ${metadata.epcRating}`,
        description: `Flat energy efficiency check rating certificate (Score ${metadata.epcScore}, Certificate ${metadata.epcCertificate}). Valid till ${formatDate(metadata.epcExpiryDate)}.`,
        icon: "🔥",
        accent: "border-l-4 border-l-amber-600",
        type: "epc"
      },
      {
        title: "Building Insurance Certificate",
        category: "Landlord Coverage",
        date: formatDate(metadata.insuranceStartDate),
        status: metadata.insuranceStatus || "Active",
        description: `Ageas 'HomeGuard Let' building insurance, arranged via Sequence/Ageas. Policy: ${metadata.insurancePolicy}.`,
        icon: "🛡️",
        accent: "border-l-4 border-l-indigo-600",
        type: "insurance"
      },
      {
        title: "Tenant Reference Checks",
        category: "Background Check",
        date: formatDate(tenantDetails.startDate),
        status: "Passed",
        description: `Tenant screening & referencing report profiles completed for ${tenantDetails.tenants.join(" & ")}.`,
        icon: "📇",
        accent: "border-l-4 border-l-teal-600",
        type: "reference"
      },
      {
        title: "Orchard Accountants Invoice",
        category: "Financial Statement",
        date: formatDate(tenantDetails.startDate),
        status: "Paid",
        description: "Tenant-find invoice and payment receipt billing details.",
        icon: "💰",
        accent: "border-l-4 border-l-yellow-600",
        type: "invoice"
      },
      {
        title: "Landlord Terms of Business (TOB)",
        category: "Landlord Doc",
        date: formatDate(tenantDetails.startDate),
        status: "Signed",
        description: "TOB and Landlord Indemnity agreement parameters.",
        icon: "🖋️",
        accent: "border-l-4 border-l-purple-600",
        type: "tob"
      }
    ];
  }, [tenantDetails, metadata]);

  const handleOpenViewer = (doc: DocItem) => {
    setSelectedDoc(doc);
    setIsViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedDoc(null);
  };

  const handlePrint = () => {
    window.print();
  };

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
                <button
                  onClick={() => handleOpenViewer(doc)}
                  className="text-xs font-bold text-emerald-800 bg-[#062c1a]/5 hover:bg-[#062c1a]/10 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
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

      {/* Dynamic PDF Certificate Viewer Modal */}
      {isViewerOpen && selectedDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-250">
          <div
            className="bg-white rounded-3xl shadow-2xl relative w-full max-w-[800px] flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200 overflow-hidden print:p-0 print:shadow-none print:static print:max-h-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar (Hidden on Print) */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-55 border-b border-slate-100 print:hidden">
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedDoc.icon}</span>
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider font-mono">
                  Document Preview Viewer
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-4 py-2 bg-[#062c1a] hover:bg-[#0c472c] text-white text-xs font-bold uppercase rounded-xl transition-all cursor-pointer shadow-sm active:scale-95"
                >
                  🖨️ Print / Save PDF
                </button>
                <button
                  onClick={handleCloseViewer}
                  className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-150 transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5 text-red-500 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Print Content Area */}
            <div className="p-10 md:p-12 overflow-y-auto flex-1 bg-white font-serif leading-relaxed text-slate-800 print:overflow-visible">
              
              {/* Document Header */}
              <div className="text-center space-y-2 border-b-4 border-[#062c1a] pb-6">
                <h2 className="text-[#062c1a] text-2xl md:text-3xl font-black uppercase tracking-wide">
                  Heywood Property Services
                </h2>
                <p className="text-xs font-sans text-slate-400 font-extrabold uppercase tracking-widest">
                  Official Compliance Registry & Registry Certification
                </p>
                <p className="text-xs text-slate-500 font-sans mt-0.5">
                  Ashford Yard / Jevington Yard / Longstone Yard, Eastbourne, UK
                </p>
              </div>

              {/* Document Body */}
              <div className="py-8 space-y-6">
                
                {/* Title & Metadata */}
                <div className="flex justify-between items-start border-b border-slate-100 pb-4">
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-slate-900">
                      {selectedDoc.title}
                    </h1>
                    <span className="text-xs font-sans text-[#c8a270] font-bold uppercase">
                      Category: {selectedDoc.category}
                    </span>
                  </div>
                  <div className="text-right text-xs font-sans text-slate-400 font-bold uppercase">
                    <div>Status: <span className="text-emerald-700">{selectedDoc.status}</span></div>
                    <div className="mt-0.5">Dated: {selectedDoc.date}</div>
                  </div>
                </div>

                {/* Dynamic Content Custom Forms */}
                {selectedDoc.type === "agreement" && (
                  <div className="space-y-4 text-sm">
                    <p className="indent-8 text-justify">
                      This Assured Shorthold Tenancy Agreement is entered into on the start date listed below between the landlord entity and the tenant party. The property description and initial terms of the letting agreement correspond to the registered parameters synced via Arthur Online.
                    </p>
                    <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 font-sans text-xs">
                      <div><strong>Tenant Name:</strong> {tenantDetails.tenants.join(" & ")}</div>
                      <div><strong>Assigned Unit:</strong> Flat {tenantDetails.unit}</div>
                      <div><strong>Property Location:</strong> {tenantDetails.property}</div>
                      <div><strong>Letting Type:</strong> {tenantDetails.lettingType}</div>
                      <div><strong>Monthly Rent Ledger:</strong> {tenantDetails.rent}</div>
                      <div><strong>Security Deposit Held:</strong> {tenantDetails.deposit}</div>
                      <div><strong>Lease Term Start:</strong> {formatDate(tenantDetails.startDate)}</div>
                      <div><strong>Lease Term End:</strong> {formatDate(tenantDetails.endDate)}</div>
                    </div>
                    <div className="pt-8 border-t border-slate-100 grid grid-cols-2 gap-8 text-center text-xs font-sans">
                      <div className="space-y-12">
                        <div className="h-10 border-b border-slate-300 max-w-[200px] mx-auto italic font-serif pt-4 text-slate-400">Signed electronically</div>
                        <strong>Authorized Officer (Heywood)</strong>
                      </div>
                      <div className="space-y-12">
                        <div className="h-10 border-b border-slate-300 max-w-[200px] mx-auto italic font-serif pt-4 text-slate-400">Signed electronically</div>
                        <strong>Tenant Representative Signature</strong>
                      </div>
                    </div>
                  </div>
                )}

                {selectedDoc.type === "inventory" && (
                  <div className="space-y-4 text-sm">
                    <p className="indent-8 text-justify">
                      This Check-In Inventory Report details the condition of the residential premises and verification of utility meter indexes registered during the initial check-in process.
                    </p>
                    <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 font-sans text-xs">
                      <div><strong>Tenant Name:</strong> {tenantDetails.tenants.join(" & ")}</div>
                      <div><strong>Assigned Unit:</strong> Flat {tenantDetails.unit}</div>
                      <div><strong>Check-in Date:</strong> {formatDate(tenantDetails.startDate)}</div>
                      <div><strong>Electricity Meter Serial:</strong> {metadata.elecMeterSerial || "Pending Assignment"}</div>
                      <div><strong>Electricity Check-in Index:</strong> {metadata.elecMeterCheckInValue || "0"} kWh</div>
                      <div><strong>Water Meter Serial:</strong> {metadata.waterMeterSerial || "Pending Assignment"}</div>
                      <div><strong>Water Check-in Index:</strong> {metadata.waterMeterCheckInValue || "0"} m³</div>
                    </div>
                    <p className="text-xs text-slate-500 italic mt-2">
                      The meter values logged above constitute the official readings used for tenancy billing validations.
                    </p>
                  </div>
                )}

                {selectedDoc.type === "eic" && (
                  <div className="space-y-4 text-sm">
                    <p className="indent-8 text-justify">
                      This certifies that the electrical installation at the scheduled property address has been assessed and inspected by an approved GasSafe/NICEIC electrical engineer in accordance with UK statutory compliance requirements.
                    </p>
                    <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 font-sans text-xs">
                      <div><strong>EIC Serial Reference:</strong> {metadata.eicSerial || "Pending Registration"}</div>
                      <div><strong>Inspection Date:</strong> {formatDate(metadata.eicInspectedDate)}</div>
                      <div><strong>Expiry / Renewal Date:</strong> {formatDate(metadata.eicExpiryDate)}</div>
                      <div><strong>Compliance Status:</strong> Certified & Safe</div>
                      <div className="col-span-2"><strong>Property Address:</strong> Flat {tenantDetails.unit}, {tenantDetails.property}</div>
                    </div>
                  </div>
                )}

                {selectedDoc.type === "epc" && (
                  <div className="space-y-4 text-sm">
                    <p className="indent-8 text-justify">
                      Official Energy Performance Certificate (EPC) summary assessing the energy performance rating, score and efficiency grade of the residential building unit.
                    </p>
                    <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 font-sans text-xs">
                      <div><strong>EPC Certificate Serial:</strong> {metadata.epcCertificate || "Pending"}</div>
                      <div><strong>Energy Efficiency Rating:</strong> Grade {metadata.epcRating || "N/A"}</div>
                      <div><strong>Energy Score:</strong> {metadata.epcScore || "0"} Score Points</div>
                      <div><strong>Assessor Name:</strong> {metadata.epcAssessor || "Accredited Energy Assessor"}</div>
                      <div><strong>Assessment Date:</strong> {formatDate(metadata.epcAssessedDate)}</div>
                      <div><strong>Expiry Date:</strong> {formatDate(metadata.epcExpiryDate)}</div>
                    </div>
                  </div>
                )}

                {selectedDoc.type === "insurance" && (
                  <div className="space-y-4 text-sm">
                    <p className="indent-8 text-justify">
                      This certificate summarizes the building insurance coverage policy arranged for the specified letting block.
                    </p>
                    <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 font-sans text-xs">
                      <div><strong>Insurance Policy:</strong> {metadata.insurancePolicy || "Pending Policy"}</div>
                      <div><strong>Underwriter:</strong> Ageas (HomeGuard Let)</div>
                      <div><strong>Start Date:</strong> {formatDate(metadata.insuranceStartDate)}</div>
                      <div><strong>Status:</strong> {metadata.insuranceStatus || "Active / Certified"}</div>
                    </div>
                  </div>
                )}

                {/* Default Fallback for other documents */}
                {!["agreement", "inventory", "eic", "epc", "insurance"].includes(selectedDoc.type) && (
                  <div className="space-y-4 text-sm">
                    <p className="text-justify font-sans text-xs">
                      {selectedDoc.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 bg-slate-50/50 p-4 rounded-xl border border-slate-100 font-sans text-xs">
                      <div><strong>Tenancy Unit:</strong> Flat {tenantDetails.unit}</div>
                      <div><strong>Tenant Name:</strong> {tenantDetails.tenants.join(" & ")}</div>
                      <div><strong>Logged Date:</strong> {selectedDoc.date}</div>
                      <div><strong>Status:</strong> {selectedDoc.status}</div>
                    </div>
                  </div>
                )}

              </div>

              {/* Document Footer */}
              <div className="border-t border-slate-200 pt-6 text-[10px] font-sans text-slate-400 text-center space-y-1 mt-12">
                <p>Heywood Property Services compliance documents are authenticated digitally under the Electronic Communications Act 2000.</p>
                <p>Data Source: Arthur Online Real-Time Synced Database Cache.</p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
