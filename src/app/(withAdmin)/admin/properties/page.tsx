"use client";

import React, { useState, useMemo } from "react";
import { api } from "~/trpc/react";
import { toast } from "sonner";

interface PropertyItem {
  id: number;
  unit: string;
  name: string;
  propertyName: string;
  location: string;
  rent: string;
  deposit: string;
  beds: string;
  baths: string;
  type: string;
  status: "Occupied" | "Vacant";
  tenant: string;
  lettingType: string;
  landlord: string;
  image: string;
  code: string;
  history: Array<{
    id: string;
    unitId: string;
    status: string;
    startDate: string | null;
    endDate: string | null;
    rent: string;
    rentVal: number;
    deposit: string;
    depositVal: number;
    lodged: string | null;
    received: string | null;
    tenants: string[];
    phone: string[];
    email: string[];
    lettingType: string;
    rentStatus: string;
    commentary: string;
    createdAt: Date;
    updatedAt: Date;
    address: string | null;
    code: string | null;
  }>;
}

export default function PropertiesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isSyncing, setIsSyncing] = useState(false);

  // Modal State
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

  // Reset pagination when filter/search changes
  React.useEffect(() => {
    setVisibleCount(6);
  }, [filter, search]);

  const utils = api.useUtils();
  const { data: propertiesAndUnits, isLoading } = api.arthur.getPropertiesAndUnits.useQuery();

  // Sync Mutation
  const syncArthur = api.arthur.syncArthur.useMutation({
    onMutate: () => {
      setIsSyncing(true);
    },
    onSuccess: (data) => {
      setIsSyncing(false);
      if (data.success) {
        toast.success("Properties & Units successfully synchronized with Arthur Online!");
        void utils.arthur.getPropertiesAndUnits.invalidate();
      } else {
        toast.error("Sync finished with errors. Please check Dashboard logs.");
      }
    },
    onError: (err) => {
      setIsSyncing(false);
      toast.error(`Sync failed: ${err.message}`);
    },
  });

  const handleSync = () => {
    syncArthur.mutate();
  };

  // Extract unique active units and map properties
  const properties = useMemo<PropertyItem[]>(() => {
    if (!propertiesAndUnits) return [];

    const list: PropertyItem[] = [];
    let index = 0;
    
    for (const prop of propertiesAndUnits) {
      for (const unit of prop.units) {
        const history = unit.tenancies;
        const active = history.find(t => t.status === "Occupied");
        const refRecord = active ?? history[0];
        
        const address = prop.address ?? "Ashford Yard, Eastbourne";
        const propertyName = prop.name;

        // Dynamic specs based on property name
        let beds = "1 Bed";
        let baths = "1 Bath";
        let type = "Apartment";
        let image = "🏢";
        let landlord = "Landlord A (Apex)";

        const lowerPropName = propertyName.toLowerCase();
        if (lowerPropName.includes("ashford")) {
          beds = (index % 2 === 0) ? "1 Bed" : "2 Bed";
          baths = "1 Bath";
          type = "Apartment";
          image = "🏢";
          landlord = "Landlord A (Apex)";
        } else if (lowerPropName.includes("jevington")) {
          beds = (index % 2 === 0) ? "2 Bed" : "3 Bed";
          baths = "2 Bath";
          type = "Townhouse";
          image = "🏠";
          landlord = "Landlord B (Golden)";
        } else if (lowerPropName.includes("longstone")) {
          beds = (index % 2 === 0) ? "2 Bed" : "3 Bed";
          baths = "1.5 Bath";
          type = "Mews House";
          image = "🏡";
          landlord = "Landlord C (River)";
        } else if (lowerPropName.includes("watts")) {
          beds = "Commercial Space";
          baths = "1 Bath";
          type = "Commercial";
          image = "🏬";
          landlord = "Landlord C (River)";
        } else if (lowerPropName.includes("gavin") || lowerPropName.includes("marquez")) {
          beds = "1 Bed";
          baths = "1 Bath";
          type = "Studio";
          image = "🔑";
          landlord = "Landlord A (Apex)";
        } else if (lowerPropName.includes("janna") || lowerPropName.includes("meyer")) {
          beds = "1 Bed";
          baths = "1 Bath";
          type = "Studio";
          image = "🔑";
          landlord = "Landlord B (Golden)";
        }

        const rent = active ? active.rent : refRecord ? refRecord.rent : "£0.00";
        const deposit = active ? active.deposit : refRecord ? refRecord.deposit : "£0.00";
        
        let tenant = "None";
        if (active && Array.isArray(active.tenants)) {
          tenant = active.tenants.join(" & ");
        } else if (active && typeof active.tenants === "string") {
          tenant = active.tenants;
        } else if (refRecord && Array.isArray(refRecord.tenants)) {
          tenant = refRecord.tenants.join(" & ");
        }

        const lettingType = active?.lettingType ?? refRecord?.lettingType ?? "N/A";
        const code = active?.code ?? refRecord?.code ?? "";

        list.push({
          id: index + 1,
          unit: unit.name,
          name: `${unit.name} - ${propertyName}`,
          propertyName,
          location: address,
          rent,
          deposit,
          beds,
          baths,
          type,
          status: unit.status === "Occupied" ? "Occupied" : "Vacant",
          tenant,
          lettingType,
          landlord,
          image,
          code,
          history: history.map((h) => ({
            ...h,
            createdAt: new Date(h.createdAt),
            updatedAt: new Date(h.updatedAt),
          })),
        });
        index++;
      }
    }

    return list;
  }, [propertiesAndUnits]);

  // Dynamically extract unique property names for filters
  const propertyFilters = useMemo(() => {
    const names = Array.from(new Set(properties.map(p => p.propertyName))).filter(Boolean);
    return [
      { label: "All Yards", value: "All" },
      ...names.map(name => {
        let label = name;
        if (!label.toLowerCase().includes("yard") && !label.toLowerCase().includes("space")) {
          label = `${label} Yard`;
        }
        return { label, value: name };
      })
    ];
  }, [properties]);

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch = 
        p.unit.toLowerCase().includes(search.toLowerCase()) ||
        p.tenant.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.lettingType.toLowerCase().includes(search.toLowerCase()) ||
        p.propertyName.toLowerCase().includes(search.toLowerCase());
      
      const matchesFilter = 
        filter === "All" || p.propertyName === filter;

      return matchesSearch && matchesFilter;
    });
  }, [properties, filter, search]);

  const displayedProperties = useMemo(() => {
    return filteredProperties.slice(0, visibleCount);
  }, [filteredProperties, visibleCount]);

  const handleOpenHistory = (property: PropertyItem) => {
    setSelectedProperty(property);
    setIsHistoryModalOpen(true);
  };

  const handleCloseHistory = () => {
    setIsHistoryModalOpen(false);
    setSelectedProperty(null);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="w-12 h-12 border-4 border-[#062c1a] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-slate-500 font-bold text-sm uppercase tracking-wider animate-pulse">Loading dynamic portfolio...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 w-full mx-auto pb-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight font-serif">Properties & Units</h1>
          <p className="text-slate-500 text-sm sm:text-base mt-1">Manage and monitor portfolio units synced from Arthur Online.</p>
        </div>
        <button
          onClick={handleSync}
          disabled={isSyncing}
          className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#c8a270]/20 bg-gradient-to-r from-[#c8a270] to-[#bfa075] px-5 py-3 text-sm font-extrabold tracking-wider text-[#062c1a] uppercase shadow-md transition-all hover:from-[#d9b380] hover:to-[#c8a270] active:scale-95 disabled:opacity-50"
        >
          <svg
            className={`h-4 w-4 ${isSyncing ? "animate-spin" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18.235"
            />
          </svg>
          {isSyncing ? "Syncing..." : "Sync Portfolio Data"}
        </button>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        {/* Sleek, professional tabs */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200/50">
          {propertyFilters.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4.5 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 cursor-pointer ${
                filter === tab.value
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
            placeholder="Search by unit, tenant or type..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-9 py-3 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#062c1a] bg-white transition-all shadow-xs"
          />
          <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-400 pointer-events-none">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
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

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProperties.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Aspect Ratio Container for visual mock image */}
              <div className="aspect-video bg-gradient-to-br from-[#062c1a]/5 to-[#c8a270]/10 flex items-center justify-center text-5xl relative border-b border-slate-50">
                {p.image}
                <span
                  className={`absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-xs ${
                    p.status === "Occupied"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-100"
                      : "bg-slate-50 text-slate-500 border border-slate-200"
                  }`}
                >
                  {p.status}
                </span>

                {p.code && (
                  <span className="absolute bottom-4 left-4 inline-flex items-center px-2.5 py-0.5 rounded bg-slate-900/80 text-white font-mono text-xs font-bold tracking-wider">
                    CODE: {p.code}
                  </span>
                )}
              </div>

              {/* Property details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{p.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">{p.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-[#062c1a] block">{p.rent}</span>
                    <span className="text-xs text-slate-400 font-semibold block">Deposit: {p.deposit}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed">{p.location}</p>

                {/* Specs */}
                <div className="flex items-center justify-between py-3 border-y border-slate-50 text-slate-500 text-sm font-semibold">
                  <span className="flex items-center gap-1.5">🛏️ {p.beds}</span>
                  <span className="flex items-center gap-1.5">🚿 {p.baths}</span>
                  <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-50 text-xs uppercase font-bold text-slate-700">
                    {p.lettingType}
                  </span>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2">
              <div className="pt-4 border-t border-slate-50 flex items-center justify-between text-sm text-slate-500">
                <div>
                  <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Tenant</span>
                  <span className="font-bold text-slate-800 mt-0.5 block truncate max-w-[140px] text-base">{p.tenant}</span>
                </div>
                <div className="text-right">
                  <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Landlord Mapping</span>
                  <span className="font-semibold text-[#c8a270] mt-0.5 block text-sm">{p.landlord}</span>
                </div>
              </div>
              
              <div className="mt-5 flex gap-2">
                 <button 
                  onClick={() => handleOpenHistory(p)}
                  className="flex-1 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  View History
                </button> 
                <button 
                  onClick={handleSync}
                  disabled={isSyncing}
                  className="px-3 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50"
                >
                  Sync
                </button> 
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* See More Button */}
      {filteredProperties.length > visibleCount && (
        <div className="flex justify-center pt-8">
          <button
            onClick={() => setVisibleCount(prev => prev + 6)}
            className="px-6 py-3 bg-[#062c1a] hover:bg-[#0c472c] text-white font-extrabold rounded-xl text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer border border-[#062c1a]"
          >
            See More Properties
          </button>
        </div>
      )}
      
      {filteredProperties.length === 0 && (
        <div className="text-center py-16 bg-white border border-slate-100 rounded-2xl">
          <p className="text-slate-400 font-bold text-base">No units found matching search criteria.</p>
        </div>
      )}

      {/* Tenancy History Details Modal */}
      {isHistoryModalOpen && selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white rounded-3xl p-6 md:p-8 max-w-[800px] w-full shadow-2xl relative space-y-6 font-sans animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseHistory}
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
                  {selectedProperty.propertyName} — {selectedProperty.unit}
                </h2>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase ${
                  selectedProperty.status === "Occupied"
                    ? "text-emerald-700 bg-emerald-50"
                    : "text-slate-500 bg-slate-50 border border-slate-200"
                }`}>
                  {selectedProperty.status}
                </span>
              </div>
              <p className="text-sm text-slate-500 mt-1">{selectedProperty.location}</p>
            </div>

            {/* Specifications Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-5 rounded-2xl border border-slate-100 text-sm">
              <div className="space-y-2.5">
                <h3 className="text-xs font-extrabold text-[#c8a270] uppercase tracking-wider">Unit Information</h3>
                <div className="grid grid-cols-2 gap-y-2 text-slate-700">
                  <span className="font-semibold text-slate-400">Beds:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.beds}</span>
                  
                  <span className="font-semibold text-slate-400">Baths:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.baths}</span>
                  
                  <span className="font-semibold text-slate-400">Type:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.type}</span>

                  <span className="font-semibold text-slate-400">Landlord:</span>
                  <span className="font-bold text-[#062c1a]">{selectedProperty.landlord}</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <h3 className="text-xs font-extrabold text-[#c8a270] uppercase tracking-wider">Financial Overview</h3>
                <div className="grid grid-cols-2 gap-y-2 text-slate-700">
                  <span className="font-semibold text-slate-400">Rent:</span>
                  <span className="font-bold text-[#062c1a] text-[15px]">{selectedProperty.rent}</span>
                  
                  <span className="font-semibold text-slate-400">Deposit:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.deposit}</span>

                  {selectedProperty.code && (
                    <>
                      <span className="font-semibold text-slate-400">Arthur Code:</span>
                      <span className="font-mono font-bold text-slate-800">{selectedProperty.code}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Tenancy History Section */}
            <div className="space-y-3.5">
              <div>
                <h3 className="text-base font-bold text-slate-800">Tenancy Logs & History</h3>
                <p className="text-xs text-slate-400">Comprehensive logs retrieved from Arthur Online API.</p>
              </div>

              <div className="w-full overflow-x-auto border border-[#E0E0E0] rounded-xl bg-white">
                <table className="min-w-[650px] w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#EAEAEA] border-b border-[#DCDCDC]">
                      <th className="px-4 py-3 font-semibold text-gray-700">Tenants</th>
                      <th className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">Start Date</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">End Date</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Rent</th>
                      <th className="px-4 py-3 font-semibold text-gray-700">Type</th>
                      <th className="px-4 py-3 font-semibold text-gray-700 text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAEAEA]">
                    {selectedProperty.history.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                          No history logs available for this unit.
                        </td>
                      </tr>
                    ) : (
                      selectedProperty.history.map((record) => (
                        <tr key={record.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-4 py-3.5 whitespace-nowrap font-bold text-slate-800">
                            {record.tenants.length > 0 ? record.tenants.join(" & ") : "—"}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-slate-600">
                            {record.startDate ?? "—"}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-slate-600">
                            {record.endDate ?? "—"}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap font-mono text-[#062c1a] font-bold">
                            {record.rent}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-[11px] font-bold text-slate-500 uppercase">
                            {record.lettingType}
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap text-center">
                            <span className={`inline-block px-2.5 py-0.5 text-[10px] font-bold rounded-full uppercase border ${
                              record.status === "Occupied"
                                ? "bg-emerald-50 text-emerald-800 border-emerald-100"
                                : record.status === "Moved out" || record.status === "Past"
                                ? "bg-amber-50 text-amber-800 border-amber-100"
                                : "bg-slate-50 text-slate-500 border-slate-200"
                            }`}>
                              {record.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Commentary / Notes Section */}
            {selectedProperty.history.some(h => h.commentary) && (
              <div className="space-y-2 bg-[#062c1a]/5 p-4 rounded-xl border border-[#062c1a]/10">
                <h4 className="text-xs font-bold text-[#062c1a] uppercase tracking-wider">Arthur System Commentary / Notes</h4>
                <div className="space-y-2 divide-y divide-[#062c1a]/10">
                  {selectedProperty.history.filter(h => h.commentary).map((record) => (
                    <div key={record.id} className="pt-2 first:pt-0">
                      <div className="flex justify-between text-[10px] text-slate-400 font-bold mb-1">
                        <span>Tenant: {record.tenants.join(", ") || "Unknown"}</span>
                        <span>Period: {record.startDate ?? "N/A"} to {record.endDate ?? "N/A"}</span>
                      </div>
                      <p className="text-xs text-slate-700 italic leading-relaxed">
                        &ldquo;{record.commentary}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Close Actions */}
            <div className="flex justify-end pt-3">
              <button
                onClick={handleCloseHistory}
                className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-bold uppercase transition-all cursor-pointer shadow-sm"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
