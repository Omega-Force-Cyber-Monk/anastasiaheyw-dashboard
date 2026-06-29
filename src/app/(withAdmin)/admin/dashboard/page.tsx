"use client";

import React, { useState, useMemo } from "react";
import { arthurTenancies } from "~/app/_components/admin/arthurData";
import type { TenancyRecord } from "~/app/_components/admin/arthurData";

export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [lettingFilter, setLettingFilter] = useState("All");
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  
  // Grid tab state
  const [gridYardTab, setGridYardTab] = useState("All");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, lettingFilter]);

  // Sync Simulation State
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStep, setSyncStep] = useState(0);
  const [syncLog, setSyncLog] = useState<string[]>([]);
  const [lastSyncTime, setLastSyncTime] = useState<string>("June 29, 2026 at 11:30 AM");
  const [showSyncModal, setShowSyncModal] = useState(false);
  
  // Localized Tenancies state
  const [tenancies, setTenancies] = useState<TenancyRecord[]>(arthurTenancies);
  const [editingTenancyId, setEditingTenancyId] = useState<string | null>(null);
  const [editCommentary, setEditCommentary] = useState("");
  const [editRentStatus, setEditRentStatus] = useState("");

  // Start Sync Simulation
  const handleStartSync = () => {
    setIsSyncing(true);
    setSyncStep(1);
    setSyncLog(["Initializing secure connection to Arthur Online API..."]);
    
    setTimeout(() => {
      setSyncStep(2);
      setSyncLog(prev => [
        ...prev, 
        "Authorized credentials for 'All The Yards' organization.", 
        "Fetching latest unit ledgers for Ashford, Jevington, and Longstone Yard estates..."
      ]);
    }, 1200);

    setTimeout(() => {
      setSyncStep(3);
      setSyncLog(prev => [
        ...prev, 
        "Retrieving lease agreements and tenant details...",
        "Mapped 34 property units.",
        "Synced active tenancy timelines and rent status reports.",
        "Detected 3 alerts (1 tenant swap, 2 rental arrears warnings)."
      ]);
    }, 2500);

    setTimeout(() => {
      setSyncStep(4);
      setSyncLog(prev => [...prev, "Writing synced entities to local database...", "Sync completed successfully!"]);
      setIsSyncing(false);
      const now = new Date();
      setLastSyncTime(now.toLocaleString("en-GB", { 
        day: "numeric", 
        month: "long", 
        year: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
      }));
    }, 4000);
  };

  // Calculations
  const stats = useMemo(() => {
    const active = tenancies.filter(t => t.status === "Occupied");
    const totalRentMonthly = active.reduce((acc, curr) => acc + curr.rentVal, 0);
    const totalDeposits = active.reduce((acc, curr) => acc + curr.depositVal, 0);
    
    // Check for arrears (any rentStatus showing "owed", "missing", "arrears")
    const arrearsTenancies = active.filter(t => 
      t.rentStatus.toLowerCase().includes("owed") || 
      t.rentStatus.toLowerCase().includes("missing")
    );
    
    // Total distinct units
    const distinctUnits = Array.from(new Set(tenancies.map(t => t.unit))).sort();
    const occupiedUnitsCount = distinctUnits.filter(u => 
      tenancies.some(t => t.unit === u && t.status === "Occupied")
    ).length;

    const occupancyRate = distinctUnits.length > 0 
      ? Math.round((occupiedUnitsCount / distinctUnits.length) * 100)
      : 0;

    return {
      monthlyRent: totalRentMonthly,
      annualRent: totalRentMonthly * 12,
      deposits: totalDeposits,
      occupancyRate,
      activeCount: active.length,
      arrearsCount: arrearsTenancies.length,
      totalUnits: distinctUnits.length
    };
  }, [tenancies]);

  // Group tenancies by unit for the unit grid view
  const unitGroups = useMemo(() => {
    const groups: Record<string, TenancyRecord[]> = {};
    tenancies.forEach(t => {
      const arr = groups[t.unit] ?? [];
      arr.push(t);
      groups[t.unit] = arr;
    });
    return groups;
  }, [tenancies]);

  // Filtered unit keys based on Grid Tab selection
  const filteredUnitKeys = useMemo(() => {
    const keys = Object.keys(unitGroups).sort();
    if (gridYardTab === "All") return keys;
    if (gridYardTab === "Ashford") return keys.filter(k => k.startsWith("A"));
    if (gridYardTab === "Jevington") return keys.filter(k => k.startsWith("J"));
    if (gridYardTab === "Longstone") return keys.filter(k => k.startsWith("L"));
    return keys;
  }, [unitGroups, gridYardTab]);

  // Filtered tenancies for the table listing
  const filteredTenancies = useMemo(() => {
    return tenancies.filter(t => {
      const matchSearch = 
        t.unit.toLowerCase().includes(search.toLowerCase()) ||
        t.tenants.some(name => name.toLowerCase().includes(search.toLowerCase())) ||
        t.email.some(email => email.toLowerCase().includes(search.toLowerCase())) ||
        t.rentStatus.toLowerCase().includes(search.toLowerCase()) ||
        t.address.toLowerCase().includes(search.toLowerCase());

      const matchStatus = 
        statusFilter === "All" || 
        (statusFilter === "Occupied" && t.status === "Occupied") ||
        (statusFilter === "Moved out" && t.status.toLowerCase().includes("moved out"));

      const matchLetting = 
        lettingFilter === "All" || 
        t.lettingType === lettingFilter;

      return matchSearch && matchStatus && matchLetting;
    });
  }, [tenancies, search, statusFilter, lettingFilter]);

  // Paginated tenancies
  const paginatedTenancies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTenancies.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTenancies, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredTenancies.length / itemsPerPage);

  const selectedUnitDetails = useMemo(() => {
    if (!selectedUnit) return null;
    const history = tenancies.filter(t => t.unit === selectedUnit);
    const active = history.find(t => t.status === "Occupied");
    const previous = history.filter(t => t.status !== "Occupied");
    return {
      unit: selectedUnit,
      active,
      previous,
      address: history[0]?.address ?? `${selectedUnit} Yard, Eastbourne`,
      code: history.find(t => t.code)?.code ?? "N/A"
    };
  }, [selectedUnit, tenancies]);

  const handleEditClick = (t: TenancyRecord) => {
    setEditingTenancyId(t.id);
    setEditCommentary(t.commentary);
    setEditRentStatus(t.rentStatus);
  };

  const handleSaveEdit = (id: string) => {
    setTenancies(prev => prev.map(t => {
      if (t.id === id) {
        return {
          ...t,
          commentary: editCommentary,
          rentStatus: editRentStatus
        };
      }
      return t;
    }));
    setEditingTenancyId(null);
  };

  return (
    <div className="space-y-6 w-full mx-auto pb-12 animate-in fade-in duration-300">
      
      {/* Header and Sync Panel */}
      <div className="bg-gradient-to-br from-[#062c1a] to-[#041e12] rounded-2xl p-6 shadow-lg border border-[#0d4d2d] flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial-gradient from-[#c8a270]/10 to-transparent pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#c8a270]">Arthur Online API Live Link</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif tracking-tight">Portfolio Master Dashboard</h1>
          <p className="text-emerald-100/70 text-sm sm:text-base max-w-xl">
            Central database for Ashford Yard (A01-A20), Jevington Yard (J01-J08), and Longstone Yard (L01-L06).
          </p>
          <div className="flex items-center gap-1.5 text-xs text-[#c8a270] font-mono pt-1">
            <span>Last Synced:</span>
            <span>{lastSyncTime}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 relative z-10">
          <button 
            id="sync-arthur-btn"
            onClick={() => {
              setShowSyncModal(true);
              handleStartSync();
            }}
            className="px-5 py-3 bg-gradient-to-r from-[#c8a270] to-[#bfa075] hover:from-[#d9b380] hover:to-[#c8a270] text-[#062c1a] font-extrabold rounded-xl text-sm tracking-wider uppercase transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2 border border-[#c8a270]/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89H18.235" />
            </svg>
            Sync Portfolio Data
          </button>
          <button 
            id="export-sheet-btn"
            onClick={() => {
              alert("Exported updated tenant records to Excel format.");
            }}
            className="px-4 py-3 bg-[#0a3d25] hover:bg-[#0c4a2c] text-emerald-100 rounded-xl text-sm font-bold uppercase tracking-wider transition-all border border-[#0d4d2d] cursor-pointer"
          >
            Export Sheet (.xlsx)
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Occupancy Rate */}
        <div className="bg-white rounded-2xl shadow-xs border-t-4 border-t-emerald-600 border border-slate-100 p-5 flex items-center justify-between transition-all hover:shadow-md hover:-translate-y-0.5 duration-200">
          <div className="space-y-1">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Occupancy Rate</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">{stats.occupancyRate}%</h3>
            <p className="text-sm text-slate-500 font-semibold">{stats.activeCount} of {stats.totalUnits} Units Occupied</p>
          </div>
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100/50">
            <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        {/* Total Monthly Rent */}
        <div className="bg-white rounded-2xl shadow-xs border-t-4 border-t-[#c8a270] border border-slate-100 p-5 flex items-center justify-between transition-all hover:shadow-md hover:-translate-y-0.5 duration-200">
          <div className="space-y-1">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Monthly Rent Ledger</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">£{stats.monthlyRent.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</h3>
            <p className="text-sm text-slate-500 font-semibold">£{(stats.annualRent).toLocaleString('en-GB')} Projected Annual</p>
          </div>
          <div className="p-3 bg-[#c8a270]/10 rounded-xl border border-[#c8a270]/20">
            <svg className="w-6 h-6 text-[#c8a270]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        {/* Deposits Held */}
        <div className="bg-white rounded-2xl shadow-xs border-t-4 border-t-amber-500 border border-slate-100 p-5 flex items-center justify-between transition-all hover:shadow-md hover:-translate-y-0.5 duration-200">
          <div className="space-y-1">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Security Deposits</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">£{stats.deposits.toLocaleString('en-GB', { minimumFractionDigits: 2 })}</h3>
            <p className="text-sm text-amber-600 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Deposits held securely
            </p>
          </div>
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-100/50">
            <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        {/* Alerts & Arrears */}
        <div className="bg-white rounded-2xl shadow-xs border-t-4 border-t-rose-500 border border-slate-100 p-5 flex items-center justify-between transition-all hover:shadow-md hover:-translate-y-0.5 duration-200">
          <div className="space-y-1">
            <p className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Arrears Alerts</p>
            <h3 className={`text-3xl sm:text-4xl font-extrabold ${stats.arrearsCount > 0 ? "text-rose-600 animate-pulse" : "text-slate-800"}`}>
              {stats.arrearsCount} Warnings
            </h3>
            <p className="text-sm text-rose-500 font-semibold">Immediate action required</p>
          </div>
          <div className="p-3 bg-rose-50 rounded-xl border border-rose-100/50">
            <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Yard Map & Interactive Grid */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 font-serif">Property Portfolio Grid</h3>
            <p className="text-slate-500 text-sm mt-1">
              Select Yard filters to drill down into units. Click on any unit card for a deep dive.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-100/80 p-1 rounded-xl">
            {[
              { label: "All Yards", value: "All", count: Object.keys(unitGroups).length },
              { label: "Ashford Yard", value: "Ashford", count: Object.keys(unitGroups).filter(k => k.startsWith("A")).length },
              { label: "Jevington Yard", value: "Jevington", count: Object.keys(unitGroups).filter(k => k.startsWith("J")).length },
              { label: "Longstone Yard", value: "Longstone", count: Object.keys(unitGroups).filter(k => k.startsWith("L")).length }
            ].map(tab => (
              <button
                key={tab.value}
                onClick={() => setGridYardTab(tab.value)}
                className={`px-3.5 py-1.5 text-sm font-bold rounded-lg transition-all cursor-pointer ${
                  gridYardTab === tab.value
                    ? "bg-white text-[#062c1a] shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab.label} <span className="text-xs opacity-60 ml-0.5">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
          {filteredUnitKeys.map(unitId => {
            const history = unitGroups[unitId] ?? [];
            const active = history.find(t => t.status === "Occupied");
            const hasArrears = active && (
              active.rentStatus.toLowerCase().includes("owed") || 
              active.rentStatus.toLowerCase().includes("missing")
            );
            const isRolling = active?.lettingType === "AST ROLLING";
            
            // Color Coding based on Yard and status
            let cardClasses = "border-slate-200 hover:border-[#062c1a] bg-slate-50/50 hover:bg-white";
            let pillClasses = "bg-slate-200 text-slate-600";
            
            if (active) {
              if (hasArrears) {
                cardClasses = "border-rose-300 bg-rose-50/20 hover:border-rose-500 hover:bg-rose-50/40";
                pillClasses = "bg-rose-100 text-rose-700";
              } else if (isRolling) {
                cardClasses = "border-amber-300 bg-amber-50/10 hover:border-amber-500 hover:bg-amber-50/20";
                pillClasses = "bg-amber-100 text-amber-800";
              } else {
                // Determine Yard specific colors for active Fixed Term
                if (unitId.startsWith("J")) {
                  cardClasses = "border-sky-200 bg-sky-50/10 hover:border-sky-500 hover:bg-sky-50/20";
                  pillClasses = "bg-sky-100 text-sky-800";
                } else if (unitId.startsWith("L")) {
                  cardClasses = "border-violet-200 bg-violet-50/10 hover:border-violet-500 hover:bg-violet-50/20";
                  pillClasses = "bg-violet-100 text-violet-800";
                } else {
                  cardClasses = "border-emerald-200 bg-emerald-50/10 hover:border-emerald-500 hover:bg-emerald-50/20";
                  pillClasses = "bg-emerald-100 text-emerald-800";
                }
              }
            }

            return (
              <button
                key={unitId}
                onClick={() => setSelectedUnit(unitId)}
                className={`p-3 rounded-xl border-2 text-left flex flex-col justify-between h-28 transition-all duration-200 hover:shadow-xs cursor-pointer group ${cardClasses}`}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-black text-slate-800 group-hover:text-[#062c1a]">{unitId}</span>
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${pillClasses}`}>
                      {active ? (hasArrears ? "Arrears" : isRolling ? "Rolling" : "Active") : "Vacant"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-medium truncate w-full">
                    {active ? active.tenants[0] : "Vacant"}
                  </p>
                </div>
                <div className="text-xs font-extrabold text-slate-700 flex items-center justify-between pt-1.5 border-t border-slate-100 w-full">
                  <span>{active ? active.rent : "£0.00"}</span>
                  <span className="text-slate-300 group-hover:text-[#062c1a] transition-colors">→</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tenancy Database Log */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 space-y-6">
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-800 font-serif">Tenancy Database Log</h3>
            <p className="text-slate-500 text-sm mt-1">Comprehensive log of all records imported from Arthur.</p>
          </div>
          
          {/* Filters Dashboard */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search unit, tenant, status..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-8 pr-3 py-2 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#062c1a] w-full sm:w-56"
              />
              <span className="absolute inset-y-0 left-2.5 flex items-center text-slate-400 pointer-events-none">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
            
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none bg-white font-semibold cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Occupied">Occupied</option>
              <option value="Moved out">Moved Out</option>
            </select>
            
            <select
              value={lettingFilter}
              onChange={(e) => setLettingFilter(e.target.value)}
              className="px-3 py-2 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none bg-white font-semibold cursor-pointer"
            >
              <option value="All">All Letting Types</option>
              <option value="FIXED TERM">Fixed Term</option>
              <option value="PREVIOUS TENANT">Previous Tenant</option>
              <option value="AST ROLLING">AST Rolling</option>
            </select>
          </div>
        </div>

        {/* Database Table */}
        <div className="overflow-x-auto border border-slate-100 rounded-xl shadow-xs">
          <table className="w-full text-left text-sm text-slate-600 min-w-[1100px] table-fixed">
            <colgroup>
              <col className="w-[100px]" />
              <col className="w-[200px]" />
              <col className="w-[120px]" />
              <col className="w-[180px]" />
              <col className="w-[160px]" />
              <col className="w-[150px]" />
              <col className="w-[200px]" />
              <col className="w-[200px]" />
              <col className="w-[110px]" />
            </colgroup>
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-500 font-bold uppercase tracking-wider">
                <th className="px-4 py-3.5">Unit</th>
                <th className="px-4 py-3.5">Tenant(s)</th>
                <th className="px-4 py-3.5">Rent</th>
                <th className="px-4 py-3.5">Deposit</th>
                <th className="px-4 py-3.5">Term Dates</th>
                <th className="px-4 py-3.5">Type / Status</th>
                <th className="px-4 py-3.5">Rent Status</th>
                <th className="px-4 py-3.5">Commentary / Notes</th>
                <th className="px-4 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedTenancies.map((t) => {
                const isOccupied = t.status === "Occupied";
                const isArrears = isOccupied && (
                  t.rentStatus.toLowerCase().includes("owed") || 
                  t.rentStatus.toLowerCase().includes("missing")
                );

                let yardBadgeClasses = "bg-emerald-50 text-emerald-700 border-emerald-100";
                let yardName = "Ashford";
                if (t.address.toLowerCase().includes("jevington")) {
                  yardBadgeClasses = "bg-sky-50 text-sky-700 border-sky-100";
                  yardName = "Jevington";
                } else if (t.address.toLowerCase().includes("longstone")) {
                  yardBadgeClasses = "bg-violet-50 text-violet-700 border-violet-100";
                  yardName = "Longstone";
                }
                
                return (
                  <tr 
                    key={t.id} 
                    className={`hover:bg-slate-50/50 transition-colors ${
                      isArrears ? "bg-rose-50/5" : ""
                    }`}
                  >
                    <td className="px-4 py-4 space-y-1">
                      <button 
                        onClick={() => setSelectedUnit(t.unit)}
                        className="font-extrabold text-slate-800 hover:text-[#062c1a] hover:underline cursor-pointer text-base block"
                      >
                        {t.unit}
                      </button>
                      <span className={`inline-block text-xs font-bold px-1.5 py-0.5 rounded border ${yardBadgeClasses}`}>
                        {yardName}
                      </span>
                    </td>
                    <td className="px-4 py-4 space-y-1">
                      <p className="font-bold text-slate-800 truncate text-base">{t.tenants.join(" & ") || "—"}</p>
                      {t.phone.length > 0 && <p className="text-xs text-slate-400 truncate">📞 {t.phone.join(", ")}</p>}
                      {t.email.length > 0 && <p className="text-xs text-slate-400 truncate">✉️ {t.email.join(", ")}</p>}
                    </td>
                    <td className="px-4 py-4 font-bold text-slate-800 text-base">{t.rent}</td>
                    <td className="px-4 py-4 space-y-0.5">
                      <p className="font-semibold text-slate-700 text-base">{t.deposit}</p>
                      <p className="text-xs text-slate-400 font-mono truncate">L: {t.lodged || "N/A"} | R: {t.received || "N/A"}</p>
                    </td>
                    <td className="px-4 py-4 space-y-0.5 text-slate-500">
                      <p className="font-medium text-sm truncate">{t.startDate} - {t.endDate}</p>
                    </td>
                    <td className="px-4 py-4 space-y-1">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                        isOccupied ? "bg-emerald-50 text-emerald-800 border border-emerald-100" : "bg-slate-100 text-slate-600"
                      }`}>
                        {t.lettingType}
                      </span>
                      <p className="text-xs font-semibold text-slate-400">{t.status}</p>
                    </td>
                    <td className="px-4 py-4">
                      {editingTenancyId === t.id ? (
                        <input
                          type="text"
                          value={editRentStatus}
                          onChange={(e) => setEditRentStatus(e.target.value)}
                          className="px-2.5 py-1.5 border rounded-lg text-sm w-full bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a]"
                        />
                      ) : (
                        <p className={`font-semibold text-base ${isArrears ? "text-rose-600" : "text-slate-600"}`}>
                          {t.rentStatus || "—"}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-4 text-slate-500">
                      {editingTenancyId === t.id ? (
                        <input
                          type="text"
                          value={editCommentary}
                          onChange={(e) => setEditCommentary(e.target.value)}
                          className="px-2.5 py-1.5 border rounded-lg text-sm w-full bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a]"
                        />
                      ) : (
                        <p className="italic text-slate-500 font-medium text-sm truncate block" title={t.commentary}>
                          {t.commentary || "—"}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      {editingTenancyId === t.id ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleSaveEdit(t.id)}
                            className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-2 py-1 rounded-md text-xs cursor-pointer"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingTenancyId(null)}
                            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-2 py-1 rounded-md text-xs cursor-pointer"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEditClick(t)}
                          className="text-[#062c1a] hover:text-[#0c472c] hover:underline font-bold text-sm cursor-pointer"
                        >
                          Edit Notes
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
              {filteredTenancies.length === 0 && (
                <tr>
                  <td colSpan={9} className="px-4 py-8 text-center text-slate-400 font-medium">
                    No records found matching filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {filteredTenancies.length > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-slate-100 text-sm">
            <div className="flex items-center gap-4 text-slate-500 font-medium">
              <span>
                Showing <span className="font-bold text-slate-800">{Math.min((currentPage - 1) * itemsPerPage + 1, filteredTenancies.length)}</span> to{" "}
                <span className="font-bold text-slate-800">{Math.min(currentPage * itemsPerPage, filteredTenancies.length)}</span> of{" "}
                <span className="font-bold text-slate-800">{filteredTenancies.length}</span> tenancies
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
                  {[5, 8, 10, 15, 20].map((size) => (
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
                    className={`px-3 py-2 rounded-lg font-bold transition-all cursor-pointer ${
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
      </div>

      {/* Unit Details History Modal */}
      {selectedUnitDetails && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="bg-[#062c1a] text-white p-6 flex justify-between items-start relative">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#c8a270] uppercase">Unit Details & Tenancy Log</span>
                <h3 className="text-3xl font-bold font-serif mt-1">Unit {selectedUnitDetails.unit}</h3>
                <p className="text-emerald-100/70 text-sm mt-1">{selectedUnitDetails.address}</p>
              </div>
              <button 
                onClick={() => setSelectedUnit(null)}
                className="text-white hover:text-[#c8a270] bg-white/10 hover:bg-white/20 p-2 rounded-lg cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              
              {/* Key Code Reference */}
              {selectedUnitDetails.code !== "N/A" && selectedUnitDetails.code && (
                <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-between text-amber-800 text-sm font-semibold">
                  <span>🔑 Arthur Unit Access Code:</span>
                  <code className="bg-white border px-2 py-0.5 rounded font-mono text-amber-900">{selectedUnitDetails.code}</code>
                </div>
              )}

              {/* Active Tenancy */}
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Active Tenancy</h4>
                {selectedUnitDetails.active ? (
                  <div className="bg-emerald-50/30 border border-emerald-100 rounded-xl p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-extrabold text-slate-800 text-lg">
                          {selectedUnitDetails.active.tenants.join(" & ")}
                        </h5>
                        <p className="text-slate-500 text-sm mt-1">
                          Letting type: <span className="font-bold text-[#062c1a]">{selectedUnitDetails.active.lettingType}</span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-extrabold text-slate-800 text-lg">{selectedUnitDetails.active.rent}</p>
                        <p className="text-sm text-slate-400 mt-0.5">Deposit: {selectedUnitDetails.active.deposit}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-3 border-t border-emerald-100/50 text-sm text-slate-600">
                      <div>
                        <span className="block text-xs text-slate-400 uppercase font-semibold">Phone</span>
                        <span className="font-semibold text-slate-700">
                          {selectedUnitDetails.active.phone.join(", ") || "—"}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 uppercase font-semibold">Email</span>
                        <span className="font-semibold text-slate-700 truncate block">
                          {selectedUnitDetails.active.email.join(", ") || "—"}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 uppercase font-semibold">Lease Term</span>
                        <span className="font-semibold text-slate-700">
                          {selectedUnitDetails.active.startDate} to {selectedUnitDetails.active.endDate}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs text-slate-400 uppercase font-semibold">Rent Status</span>
                        <span className="font-semibold text-[#062c1a]">
                          {selectedUnitDetails.active.rentStatus || "—"}
                        </span>
                      </div>
                    </div>

                    {selectedUnitDetails.active.commentary && (
                      <div className="p-3 bg-white border border-emerald-100 rounded-lg text-sm text-slate-500 italic">
                        <span className="font-bold text-slate-700 not-italic block mb-0.5">Commentary:</span>
                        &ldquo;{selectedUnitDetails.active.commentary}&rdquo;
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-6 border-2 border-dashed rounded-xl text-slate-400 font-semibold text-sm bg-slate-50">
                    No active tenancy (Vacant)
                  </div>
                )}
              </div>

              {/* Tenancy History */}
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Residency History</h4>
                {selectedUnitDetails.previous.length > 0 ? (
                  <div className="space-y-3">
                    {selectedUnitDetails.previous.map((prev, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex justify-between items-center text-sm">
                        <div>
                          <h5 className="font-bold text-slate-800 text-base">{prev.tenants.join(" & ") || "Vacant/No Tenant"}</h5>
                          <p className="text-slate-400 text-xs mt-0.5">
                            Lease: {prev.startDate || "N/A"} to {prev.endDate || "N/A"} • {prev.lettingType}
                          </p>
                          {prev.email.length > 0 && <p className="text-xs text-slate-400">Email: {prev.email.join(", ")}</p>}
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-slate-700 text-base">{prev.rent}</p>
                          <span className="inline-block bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full mt-1">
                            {prev.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center py-4 text-slate-400 text-sm font-medium bg-slate-50/50 rounded-xl">
                    No historical residency logs imported yet.
                  </p>
                )}
              </div>

            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3 border-t border-slate-100">
              <button 
                onClick={() => setSelectedUnit(null)}
                className="px-4 py-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-lg text-sm transition-all cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sync Status Animation Modal */}
      {showSyncModal && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden border border-slate-100">
            {/* Header */}
            <div className="bg-[#062c1a] text-white p-5 flex justify-between items-center">
              <h3 className="font-bold text-base font-serif flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${isSyncing ? "bg-amber-400 animate-ping" : "bg-emerald-400"}`}></span>
                {isSyncing ? "Syncing Arthur Online..." : "Sync Complete"}
              </h3>
            </div>
            
            {/* Body */}
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#062c1a] to-[#c8a270] transition-all duration-300"
                    style={{ 
                      width: syncStep === 1 ? '25%' : syncStep === 2 ? '50%' : syncStep === 3 ? '85%' : '100%' 
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>Connect</span>
                  <span>Fetch Properties</span>
                  <span>Retrieve Leases</span>
                  <span>Complete</span>
                </div>
              </div>

              {/* Log window */}
              <div className="bg-slate-950 text-emerald-400 p-4 rounded-xl font-mono text-sm h-48 overflow-y-auto space-y-2 shadow-inner border border-slate-800">
                {syncLog.map((log, index) => (
                  <p key={index} className="leading-relaxed">
                    <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span> {log}
                  </p>
                ))}
                {isSyncing && (
                  <span className="inline-block animate-pulse w-2 h-4 bg-emerald-400 ml-1">_</span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="bg-slate-50 px-6 py-4 flex justify-end gap-3 border-t border-slate-100">
              <button 
                disabled={isSyncing}
                onClick={() => setShowSyncModal(false)}
                className={`px-4 py-2 font-bold rounded-lg text-sm uppercase tracking-wider transition-all cursor-pointer ${
                  isSyncing 
                    ? "bg-slate-200 text-slate-400 cursor-not-allowed" 
                    : "bg-[#062c1a] text-white hover:bg-[#0c472c]"
                }`}
              >
                {isSyncing ? "Synchronizing..." : "Dismiss"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
