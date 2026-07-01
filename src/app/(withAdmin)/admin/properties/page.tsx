"use client";

import React, { useState, useMemo } from "react";
import { arthurTenancies } from "~/app/_components/admin/arthurData";
import { api } from "~/trpc/react";

export default function PropertiesPage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  // Reset pagination when filter/search changes
  React.useEffect(() => {
    setVisibleCount(6);
  }, [filter, search]);

  const { data: arthurData } = api.arthur.getTenancies.useQuery();

  const tenancies = useMemo(() => {
    return arthurData?.tenancies ?? arthurTenancies;
  }, [arthurData]);

  // Extract unique active units and map properties
  const properties = useMemo(() => {
    const uniqueUnits = Array.from(new Set(tenancies.map(t => t.unit))).sort();
    
    return uniqueUnits.map((unitId, index) => {
      const history = tenancies.filter(t => t.unit === unitId);
      const active = history.find(t => t.status === "Occupied");
      const refRecord = active ?? history[0];
      
      const address = refRecord?.address ?? "Ashford Yard, Eastbourne BN21 3UA";
      let yardName = "Ashford Yard";
      if (address.toLowerCase().includes("jevington")) {
        yardName = "Jevington Yard";
      } else if (address.toLowerCase().includes("longstone")) {
        yardName = "Longstone Yard";
      }
      
      // Specs
      const beds = (index % 3 === 0) ? "1 Bed" : (index % 3 === 1) ? "2 Bed" : "3 Bed";
      const baths = (index % 2 === 0) ? "1 Bath" : "2 Bath";
      const type = (index % 4 === 0) ? "Mews House" : (index % 4 === 1) ? "Apartment" : "Townhouse";
      const image = (index % 3 === 0) ? "🏡" : (index % 3 === 1) ? "🏢" : "🏠";
      const landlord = (index % 3 === 0) ? "Landlord A (Apex)" : (index % 3 === 1) ? "Landlord B (Golden)" : "Landlord C (River)";

      return {
        id: index + 1,
        unit: unitId,
        name: `${unitId} ${yardName}`,
        location: address,
        rent: active?.rent ?? refRecord?.rent ?? "£0.00",
        deposit: active?.deposit ?? refRecord?.deposit ?? "£0.00",
        beds,
        baths,
        type,
        status: active ? "Occupied" : "Vacant",
        tenant: active ? active.tenants.join(" & ") : "None",
        lettingType: active?.lettingType ?? refRecord?.lettingType ?? "N/A",
        landlord,
        image,
        code: active?.code ?? refRecord?.code ?? ""
      };
    });
  }, []);

  const filteredProperties = useMemo(() => {
    return properties.filter((p) => {
      const matchesSearch = 
        p.unit.toLowerCase().includes(search.toLowerCase()) ||
        p.tenant.toLowerCase().includes(search.toLowerCase()) ||
        p.location.toLowerCase().includes(search.toLowerCase()) ||
        p.lettingType.toLowerCase().includes(search.toLowerCase());
      
      const matchesFilter = 
        filter === "All" || 
        (filter === "Ashford" && p.unit.startsWith("A")) ||
        (filter === "Jevington" && p.unit.startsWith("J")) ||
        (filter === "Longstone" && p.unit.startsWith("L"));

      return matchesSearch && matchesFilter;
    });
  }, [properties, filter, search]);

  const displayedProperties = useMemo(() => {
    return filteredProperties.slice(0, visibleCount);
  }, [filteredProperties, visibleCount]);

  return (
    <div className="space-y-8 w-full mx-auto pb-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight font-serif">Properties & Units</h1>
        <p className="text-slate-500 text-sm sm:text-base mt-1">Manage and monitor portfolio units synced from Arthur Online.</p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
        {/* Sleek, professional tabs */}
        <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200/50">
          {[
            { label: "All Yards", value: "All" },
            { label: "Ashford Yard", value: "Ashford" },
            { label: "Jevington Yard", value: "Jevington" },
            { label: "Longstone Yard", value: "Longstone" }
          ].map((tab) => (
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
                  onClick={() => alert(`Opening details view for Unit ${p.unit}`)}
                  className="flex-1 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  View History
                </button>
                <button 
                  onClick={() => alert(`Syncing Unit ${p.unit} directly with Arthur...`)}
                  className="px-3 py-2.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
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
    </div>
  );
}
