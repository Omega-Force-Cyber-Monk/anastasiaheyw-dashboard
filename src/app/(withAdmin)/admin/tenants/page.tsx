"use client";

import React, { useState, useMemo } from "react";
import { api } from "~/trpc/react";

interface TenantItem {
  id: number;
  name: string;
  email: string;
  phone: string;
  unit: string;
  yard: string;
  rent: string;
  deposit: string;
  status: string;
  lettingType: string;
  leaseStart: string;
  leaseEnd: string;
  commentary: string;
  rentStatus: string;
}

export default function TenantsPage() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Tenant Profile Modal State
  const [selectedTenant, setSelectedTenant] = useState<TenantItem | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, filterType]);

  const { data: arthurData, isLoading } = api.arthur.getTenancies.useQuery();

  const tenants = useMemo<TenantItem[]>(() => {
    const list = arthurData?.tenancies ?? [];
    return list.map((t, idx) => {
      let yardName = "Ashford Yard";
      if (t.address.toLowerCase().includes("jevington")) {
        yardName = "Jevington Yard";
      } else if (t.address.toLowerCase().includes("longstone")) {
        yardName = "Longstone Yard";
      } else if (t.address.toLowerCase().includes("watts")) {
        yardName = "Watts Yard";
      } else if (t.address.toLowerCase().includes("gavin")) {
        yardName = "Gavin Marquez-AN";
      } else if (t.address.toLowerCase().includes("janna")) {
        yardName = "Janna Meyer_SN";
      }

      const tenantsArray = Array.isArray(t.tenants) ? t.tenants : typeof t.tenants === "string" ? [t.tenants] : [];
      const emailArray = Array.isArray(t.email) ? t.email : typeof t.email === "string" ? [t.email] : [];
      const phoneArray = Array.isArray(t.phone) ? t.phone : typeof t.phone === "string" ? [t.phone] : [];

      return {
        id: idx + 1,
        name: tenantsArray.length > 0 ? tenantsArray.join(" & ") : "Vacant/No Tenant Logged",
        email: emailArray.length > 0 ? emailArray.join(", ") : "no-email@arthur.com",
        phone: phoneArray.length > 0 ? phoneArray.join(", ") : "no-phone",
        unit: t.unit,
        yard: yardName.split(" ")[0] ?? "Ashford",
        rent: t.rent,
        deposit: t.deposit,
        status: t.status,
        lettingType: t.lettingType,
        leaseStart: t.startDate || "N/A",
        leaseEnd: t.endDate || "N/A",
        commentary: t.commentary,
        rentStatus: t.rentStatus
      };
    });
  }, [arthurData]);

  const filteredTenants = useMemo(() => {
    return tenants.filter((t) => {
      const matchesSearch = 
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.unit.toLowerCase().includes(search.toLowerCase()) ||
        t.email.toLowerCase().includes(search.toLowerCase()) ||
        t.rentStatus.toLowerCase().includes(search.toLowerCase()) ||
        (t.yard?.toLowerCase() ?? "").includes(search.toLowerCase());

      const matchesFilter = 
        filterType === "All" ||
        (filterType === "Active" && t.status === "Occupied") ||
        (filterType === "Historical" && t.status.toLowerCase().includes("moved out"));

      return matchesSearch && matchesFilter;
    });
  }, [tenants, search, filterType]);

  // Paginated tenants
  const paginatedTenants = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTenants.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTenants, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredTenants.length / itemsPerPage);

  const handleOpenProfile = (tenant: TenantItem) => {
    setSelectedTenant(tenant);
    setIsProfileModalOpen(true);
  };

  const handleCloseProfile = () => {
    setIsProfileModalOpen(false);
    setSelectedTenant(null);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-12 h-12 border-4 border-[#062c1a] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-bold text-sm uppercase tracking-wider animate-pulse">Loading dynamic tenants...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full mx-auto pb-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight font-serif">Tenants & Leases</h1>
        <p className="text-slate-500 text-sm sm:text-base mt-1">Manage active agreements, tenant contact logs, and history from Arthur Online.</p>
      </div>

      {/* Filter Tabs & Search bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        {/* Professional tab buttons */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200/50">
          {[
            { label: "All Records", value: "All" },
            { label: "Active Tenants", value: "Active" },
            { label: "Historical Logs", value: "Historical" }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilterType(tab.value)}
              className={`px-4.5 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                filterType === tab.value
                  ? "bg-[#062c1a] text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Beautiful search bar */}
        <div className="w-full md:w-80 relative">
          <input
            type="text"
            placeholder="Search by name, unit, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-9 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#062c1a] bg-white transition-all shadow-xs"
          />
          <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-400 pointer-events-none">
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute inset-y-0 right-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
            >
              <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Tenants Table */}
      <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600 min-w-[1000px] table-fixed">
            <colgroup>
              <col className="w-[240px]" />
              <col className="w-[140px]" />
              <col className="w-[160px]" />
              <col className="w-[160px]" />
              <col className="w-[180px]" />
              <col className="w-[200px]" />
              <col className="w-[140px]" />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Tenant Name & Contact</th>
                <th className="px-6 py-4">Assigned Unit</th>
                <th className="px-6 py-4">Rent / Deposit</th>
                <th className="px-6 py-4">Status & Type</th>
                <th className="px-6 py-4">Lease Term</th>
                <th className="px-6 py-4 whitespace-nowrap">Commentary / Warnings</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedTenants.map((t) => {
                const isActive = t.status === "Occupied";
                const isArrears = isActive && (
                  t.rentStatus.toLowerCase().includes("owed") || 
                  t.rentStatus.toLowerCase().includes("missing")
                );

                let yardBadgeClasses = "bg-emerald-50 text-emerald-700 border-emerald-100";
                if (t.yard === "Jevington") {
                  yardBadgeClasses = "bg-sky-50 text-sky-700 border-sky-100";
                } else if (t.yard === "Longstone") {
                  yardBadgeClasses = "bg-violet-50 text-violet-700 border-violet-100";
                }

                return (
                  <tr key={t.id} className={`hover:bg-slate-50/50 transition-colors ${isArrears ? "bg-rose-50/5" : ""}`}>
                    <td className="px-6 py-4 space-y-1">
                      <div className="font-extrabold text-slate-800 text-base truncate">{t.name}</div>
                      <div className="text-xs text-slate-400 font-medium truncate">✉️ {t.email}</div>
                      {t.phone !== "no-phone" && (
                        <div className="text-xs text-slate-400 font-medium truncate">📞 {t.phone}</div>
                      )}
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="text-slate-800 font-bold text-base">{t.unit}</div>
                      <span className={`inline-block text-xs font-bold px-1.5 py-0.5 rounded border ${yardBadgeClasses}`}>
                        {t.yard}
                      </span>
                    </td>
                    <td className="px-6 py-4 space-y-0.5">
                      <div className="font-extrabold text-slate-800 text-base">{t.rent}</div>
                      <div className="text-xs text-slate-400 font-semibold">Deposit: {t.deposit}</div>
                    </td>
                    <td className="px-6 py-4 space-y-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                          isActive
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                            : "bg-slate-50 text-slate-500 border border-slate-200"
                        }`}
                      >
                        {t.status}
                      </span>
                      <div className="text-xs font-bold text-slate-400">{t.lettingType}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-700 font-bold">
                        {t.leaseStart} - {t.leaseEnd}
                      </div>
                    </td>
                    <td className="px-6 py-4 space-y-1.5 max-w-xs">
                      {isArrears && (
                        <span className="inline-flex px-2 py-0.5 rounded text-xs font-bold uppercase bg-rose-50 text-rose-700 border border-rose-100">
                          Rent Arrears
                        </span>
                      )}
                      <p className="text-xs text-slate-500 font-medium italic truncate block" title={t.commentary || t.rentStatus}>
                        {t.commentary || t.rentStatus || "—"}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      {/* <button 
                        onClick={() => handleOpenProfile(t)}
                        className="text-[#062c1a] hover:text-[#0c472c] font-bold text-sm cursor-pointer mr-3"
                      >
                        View Details
                      </button> */}
                      <button
                          onClick={() => handleOpenProfile(t)}
                          className="p-1.5 hover:bg-blue-50 rounded-lg text-[#062c1a] transition-colors cursor-pointer"
                          title="View Details"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </button>
                     {/* <button
                        onClick={() => toast.info("Syncing tenancy records directly to Arthur API...")}
                        className="text-[#c8a270] hover:text-[#8B6B3F] font-bold text-sm cursor-pointer transition-colors duration-200"
                      >
                        Sync
                      </button> */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      {filteredTenants.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-slate-100 text-sm">
          <div className="flex items-center gap-4 text-slate-500 font-medium">
            <span>
              Showing <span className="font-bold text-slate-800">{Math.min((currentPage - 1) * itemsPerPage + 1, filteredTenants.length)}</span> to{" "}
              <span className="font-bold text-slate-800">{Math.min(currentPage * itemsPerPage, filteredTenants.length)}</span> of{" "}
              <span className="font-bold text-slate-800">{filteredTenants.length}</span> tenants
            </span>
            
            <div className="flex items-center gap-1.5">
              <span>Per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-2 py-1 border border-slate-200 rounded-lg bg-white text-slate-700 font-bold focus:outline-none cursor-pointer"
              >
                {[8, 12, 16, 24].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent text-slate-600 font-bold cursor-pointer"
              title="First Page"
            >
              &laquo;
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent text-slate-600 font-bold cursor-pointer"
            >
              ‹ Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (totalPages > 5 && Math.abs(page - currentPage) > 1 && page !== 1 && page !== totalPages) {
                if (page === 2 || page === totalPages - 1) {
                  return <span key={page} className="px-2 text-slate-400 font-bold">...</span>;
                }
                return null;
              }

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer ${
                    currentPage === page
                      ? "bg-[#062c1a] text-white border border-[#062c1a] shadow-xs"
                      : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent text-slate-600 font-bold cursor-pointer"
            >
              Next ›
            </button>
            <button
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent text-slate-600 font-bold cursor-pointer"
              title="Last Page"
            >
              &raquo;
            </button>
          </div>
        </div>
      )}
      
      {filteredTenants.length === 0 && (
        <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl">
          <p className="text-slate-400 font-bold text-base">No tenant records found matching search criteria.</p>
        </div>
      )}

      {/* Tenant Profile Details Modal */}
      {isProfileModalOpen && selectedTenant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl p-6 md:p-8 max-w-[650px] w-full shadow-2xl relative space-y-6 font-sans animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleCloseProfile}
              className="absolute top-6 right-6 p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5 text-red-500 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div className="border-b border-gray-100 pb-4 pr-8">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-800">
                  {selectedTenant.name}
                </h2>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${
                  selectedTenant.status === "Occupied"
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-slate-500 bg-slate-50 border border-slate-200"
                }`}>
                  {selectedTenant.status}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">Unit {selectedTenant.unit} — {selectedTenant.yard} Yard</p>
            </div>

            {/* Contact Details Card */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-[#c8a270] uppercase tracking-wider">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-sm">
                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wide text-[10px]">Email Addresses</span>
                  <span className="font-bold text-slate-800 text-[13.5px] break-all">{selectedTenant.email}</span>
                </div>
                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wide text-[10px]">Phone Numbers</span>
                  <span className="font-bold text-slate-800 text-[13.5px]">{selectedTenant.phone}</span>
                </div>
              </div>
            </div>

            {/* Lease & Financial Details */}
            <div className="space-y-3">
              <h3 className="text-xs font-extrabold text-[#c8a270] uppercase tracking-wider">Lease & Agreement Specifications</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm">
                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wide text-[10px] mb-0.5">Lease Term Dates</span>
                  <span className="font-bold text-slate-800">{selectedTenant.leaseStart} to {selectedTenant.leaseEnd}</span>
                </div>
                
                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wide text-[10px] mb-0.5">Letting Agreement Type</span>
                  <span className="font-bold text-slate-800 uppercase">{selectedTenant.lettingType}</span>
                </div>

                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wide text-[10px] mb-0.5">Monthly Rent Ledger</span>
                  <span className="font-bold text-[#062c1a] text-[16px]">{selectedTenant.rent}</span>
                </div>

                <div>
                  <span className="block font-semibold text-slate-400 uppercase tracking-wide text-[10px] mb-0.5">Security Deposit Held</span>
                  <span className="font-bold text-slate-800">{selectedTenant.deposit}</span>
                </div>

                <div className="col-span-2">
                  <span className="block font-semibold text-slate-400 uppercase tracking-wide text-[10px] mb-0.5">Financial & Rent Status</span>
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                    selectedTenant.rentStatus.toLowerCase().includes("owed") || selectedTenant.rentStatus.toLowerCase().includes("missing")
                      ? "bg-rose-50 text-rose-800 border border-rose-100"
                      : "bg-slate-100 text-slate-700"
                  }`}>
                    {selectedTenant.rentStatus || "No outstanding balances / verified"}
                  </span>
                </div>
              </div>
            </div>

            {/* Notes & Commentary */}
            {selectedTenant.commentary && (
              <div className="space-y-2 bg-[#062c1a]/5 p-4 rounded-xl border border-[#062c1a]/10">
                <h4 className="text-xs font-bold text-[#062c1a] uppercase tracking-wider">Arthur Online Commentary & Warnings</h4>
                <p className="text-xs text-slate-700 italic leading-relaxed">
                  &ldquo;{selectedTenant.commentary}&rdquo;
                </p>
              </div>
            )}

            {/* Action Footer */}
            <div className="flex justify-end pt-3">
              <button
                onClick={handleCloseProfile}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold uppercase transition-all cursor-pointer shadow-sm"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
