"use client";

import React, { useState, useMemo } from "react";
import { arthurTenancies } from "~/app/_components/admin/arthurData";
import type { TenancyRecord } from "~/app/_components/admin/arthurData";
import { api } from "~/trpc/react";

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

  // Sync State
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStep, setSyncStep] = useState(0);
  const [syncLog, setSyncLog] = useState<string[]>([]);
  const [lastSyncTime, setLastSyncTime] = useState<string>(
    "Not synced yet",
  );
  const [showSyncModal, setShowSyncModal] = useState(false);

  // Fetch real/cached Arthur data
  const utils = api.useUtils();
  const { data: arthurData } = api.arthur.getTenancies.useQuery();

  const tenancies = useMemo(() => {
    return arthurData?.tenancies ?? arthurTenancies;
  }, [arthurData]);

  const [editingTenancyId, setEditingTenancyId] = useState<string | null>(null);
  const [editCommentary, setEditCommentary] = useState("");
  const [editRentStatus, setEditRentStatus] = useState("");

  // Sync Mutation
  const syncArthur = api.arthur.syncArthur.useMutation({
    onMutate: () => {
      setIsSyncing(true);
      setSyncStep(1);
      setSyncLog(["Initializing sync with Arthur Online API..."]);
    },
    onSuccess: (data) => {
      if (data.success) {
        setSyncStep(4);
        setSyncLog(data.logs);
      } else {
        setSyncStep(1);
        setSyncLog(data.logs);
      }
      setIsSyncing(false);
      const now = new Date();
      setLastSyncTime(
        now.toLocaleString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
      void utils.arthur.getTenancies.invalidate();
    },
    onError: (err) => {
      setSyncStep(1);
      setSyncLog((prev) => [...prev, `Sync failed: ${err.message}`]);
      setIsSyncing(false);
    },
  });

  const handleStartSync = () => {
    setShowSyncModal(true);
    syncArthur.mutate();
  };

  // Calculations
  const stats = useMemo(() => {
    const active = tenancies.filter((t) => t.status === "Occupied");
    const totalRentMonthly = active.reduce(
      (acc, curr) => acc + curr.rentVal,
      0,
    );
    const totalDeposits = active.reduce(
      (acc, curr) => acc + curr.depositVal,
      0,
    );

    // Check for arrears (any rentStatus showing "owed", "missing", "arrears")
    const arrearsTenancies = active.filter(
      (t) =>
        t.rentStatus.toLowerCase().includes("owed") ||
        t.rentStatus.toLowerCase().includes("missing") ||
        t.rentStatus.toLowerCase().includes("arrears"),
    );

    // Total distinct units
    const distinctUnits = Array.from(
      new Set(tenancies.map((t) => t.unit)),
    ).sort();
    const occupiedUnitsCount = distinctUnits.filter((u) =>
      tenancies.some((t) => t.unit === u && t.status === "Occupied"),
    ).length;

    const occupancyRate =
      distinctUnits.length > 0
        ? Math.round((occupiedUnitsCount / distinctUnits.length) * 100)
        : 0;

    return {
      monthlyRent: totalRentMonthly,
      annualRent: totalRentMonthly * 12,
      deposits: totalDeposits,
      occupancyRate,
      activeCount: active.length,
      arrearsCount: arrearsTenancies.length,
      totalUnits: distinctUnits.length,
    };
  }, [tenancies]);

  // Group tenancies by unit for the unit grid view
  const unitGroups = useMemo(() => {
    const groups: Record<string, TenancyRecord[]> = {};
    tenancies.forEach((t) => {
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
    if (gridYardTab === "Ashford") return keys.filter((k) => k.startsWith("A"));
    if (gridYardTab === "Jevington")
      return keys.filter((k) => k.startsWith("J"));
    if (gridYardTab === "Longstone")
      return keys.filter((k) => k.startsWith("L"));
    return keys;
  }, [unitGroups, gridYardTab]);

  // Filtered tenancies for the table listing
  const filteredTenancies = useMemo(() => {
    return tenancies.filter((t) => {
      const matchSearch =
        t.unit.toLowerCase().includes(search.toLowerCase()) ||
        t.tenants.some((name) =>
          name.toLowerCase().includes(search.toLowerCase()),
        ) ||
        t.email.some((email) =>
          email.toLowerCase().includes(search.toLowerCase()),
        ) ||
        t.rentStatus.toLowerCase().includes(search.toLowerCase()) ||
        t.address.toLowerCase().includes(search.toLowerCase());

      const matchStatus =
        statusFilter === "All" ||
        (statusFilter === "Occupied" && t.status === "Occupied") ||
        (statusFilter === "Moved out" &&
          t.status.toLowerCase().includes("moved out"));

      const matchLetting =
        lettingFilter === "All" || t.lettingType === lettingFilter;

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
    const history = tenancies.filter((t) => t.unit === selectedUnit);
    const active = history.find((t) => t.status === "Occupied");
    const previous = history.filter((t) => t.status !== "Occupied");
    return {
      unit: selectedUnit,
      active,
      previous,
      address: history[0]?.address ?? `${selectedUnit} Yard, Eastbourne`,
      code: history.find((t) => t.code)?.code ?? "N/A",
    };
  }, [selectedUnit, tenancies]);

  const handleEditClick = (t: TenancyRecord) => {
    setEditingTenancyId(t.id);
    setEditCommentary(t.commentary);
    setEditRentStatus(t.rentStatus);
  };

  const updateNotes = api.arthur.updateTenancyNotes.useMutation({
    onSuccess: () => {
      void utils.arthur.getTenancies.invalidate();
    },
  });

  const handleSaveEdit = (id: string) => {
    updateNotes.mutate({
      id,
      commentary: editCommentary,
      rentStatus: editRentStatus,
    });
    setEditingTenancyId(null);
  };

  return (
    <div className="animate-in fade-in mx-auto w-full space-y-6 pb-12 duration-300">
      {/* Header and Sync Panel */}
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#0d4d2d] bg-gradient-to-br from-[#062c1a] to-[#041e12] p-6 text-white shadow-lg lg:flex-row lg:items-center">
        <div className="bg-radial-gradient pointer-events-none absolute top-0 right-0 h-64 w-64 from-[#c8a270]/10 to-transparent" />

        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></span>
            <span className="text-xs font-extrabold tracking-widest text-[#c8a270] uppercase">
              Arthur Online API Live Link
            </span>
          </div>
          <h1 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl">
            Portfolio Master Dashboard
          </h1>
          <p className="max-w-xl text-sm text-white sm:text-base">
            Central database for Ashford Yard (A01-A20), Jevington Yard
            (J01-J08), and Longstone Yard (L01-L06).
          </p>
          <div className="flex items-center gap-1.5 pt-1 font-mono text-xs text-[#c8a270]">
            <span>Last Synced:</span>
            <span>{lastSyncTime}</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap items-center gap-3">
          <button
            id="sync-arthur-btn"
            onClick={() => {
              setShowSyncModal(true);
              handleStartSync();
            }}
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#c8a270]/20 bg-gradient-to-r from-[#c8a270] to-[#bfa075] px-5 py-3 text-sm font-extrabold tracking-wider text-[#062c1a] uppercase shadow-md transition-all hover:from-[#d9b380] hover:to-[#c8a270] active:scale-95"
          >
            <svg
              className="h-4 w-4"
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
            Sync Portfolio Data
          </button>
          <button
            id="export-sheet-btn"
            onClick={() => {
              alert("Exported updated tenant records to Excel format.");
            }}
            className="cursor-pointer rounded-xl border border-[#0d4d2d] bg-[#0a3d25] px-4 py-3 text-sm font-bold tracking-wider text-emerald-100 uppercase transition-all hover:bg-[#0c4a2c]"
          >
            Export Sheet (.xlsx)
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Occupancy Rate */}
        <div className="flex items-center justify-between rounded-2xl border border-t-4 border-slate-100 border-t-emerald-600 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="space-y-1">
            <p className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
              Occupancy Rate
            </p>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
              {stats.occupancyRate}%
            </h3>
            <p className="text-sm font-semibold text-slate-500">
              {stats.activeCount} of {stats.totalUnits} Units Occupied
            </p>
          </div>
          <div className="rounded-xl border border-emerald-100/50 bg-emerald-50 p-3">
            <svg
              className="h-6 w-6 text-emerald-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
        </div>

        {/* Total Monthly Rent */}
        <div className="flex items-center justify-between rounded-2xl border border-t-4 border-slate-100 border-t-[#c8a270] bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="space-y-1">
            <p className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
              Monthly Rent Ledger
            </p>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
              £
              {stats.monthlyRent.toLocaleString("en-GB", {
                minimumFractionDigits: 2,
              })}
            </h3>
            <p className="text-sm font-semibold text-slate-500">
              £{stats.annualRent.toLocaleString("en-GB")} Projected Annual
            </p>
          </div>
          <div className="rounded-xl border border-[#c8a270]/20 bg-[#c8a270]/10 p-3">
            <svg
              className="h-6 w-6 text-[#c8a270]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Deposits Held */}
        <div className="flex items-center justify-between rounded-2xl border border-t-4 border-slate-100 border-t-amber-500 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="space-y-1">
            <p className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
              Security Deposits
            </p>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
              £
              {stats.deposits.toLocaleString("en-GB", {
                minimumFractionDigits: 2,
              })}
            </h3>
            <p className="flex items-center gap-1 text-sm font-bold text-amber-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500"></span>
              Deposits held securely
            </p>
          </div>
          <div className="rounded-xl border border-amber-100/50 bg-amber-50 p-3">
            <svg
              className="h-6 w-6 text-amber-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
        </div>

        {/* Alerts & Arrears */}
        <div className="flex items-center justify-between rounded-2xl border border-t-4 border-slate-100 border-t-rose-500 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
          <div className="space-y-1">
            <p className="text-xs font-extrabold tracking-widest text-slate-400 uppercase">
              Arrears Alerts
            </p>
            <h3
              className={`text-3xl font-extrabold sm:text-4xl ${stats.arrearsCount > 0 ? "animate-pulse text-rose-600" : "text-slate-800"}`}
            >
              {stats.arrearsCount} Warnings
            </h3>
            <p className="text-sm font-semibold text-rose-500">
              Immediate action required
            </p>
          </div>
          <div className="rounded-xl border border-rose-100/50 bg-rose-50 p-3">
            <svg
              className="h-6 w-6 text-rose-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Yard Map & Interactive Grid */}
      <div className="space-y-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
        <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-800">
              Property Portfolio Grid
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Select Yard filters to drill down into units. Click on any unit
              card for a deep dive.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 rounded-xl bg-slate-100/80 p-1">
            {[
              {
                label: "All Yards",
                value: "All",
                count: Object.keys(unitGroups).length,
              },
              {
                label: "Ashford Yard",
                value: "Ashford",
                count: Object.keys(unitGroups).filter((k) => k.startsWith("A"))
                  .length,
              },
              {
                label: "Jevington Yard",
                value: "Jevington",
                count: Object.keys(unitGroups).filter((k) => k.startsWith("J"))
                  .length,
              },
              {
                label: "Longstone Yard",
                value: "Longstone",
                count: Object.keys(unitGroups).filter((k) => k.startsWith("L"))
                  .length,
              },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setGridYardTab(tab.value)}
                className={`cursor-pointer rounded-lg px-3.5 py-1.5 text-sm font-bold transition-all ${
                  gridYardTab === tab.value
                    ? "bg-white text-[#062c1a] shadow-xs"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab.label}{" "}
                <span className="ml-0.5 text-xs opacity-60">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
          {filteredUnitKeys.map((unitId) => {
            const history = unitGroups[unitId] ?? [];
            const active = history.find((t) => t.status === "Occupied");
            const hasArrears =
              active &&
              (active.rentStatus.toLowerCase().includes("owed") ||
                active.rentStatus.toLowerCase().includes("missing"));
            const isRolling = active?.lettingType === "AST ROLLING";

            // Color Coding based on Yard and status
            let cardClasses =
              "border-slate-200 hover:border-[#062c1a] bg-slate-50/50 hover:bg-white";
            let pillClasses = "bg-slate-200 text-slate-600";

            if (active) {
              if (hasArrears) {
                cardClasses =
                  "border-rose-300 bg-rose-50/20 hover:border-rose-500 hover:bg-rose-50/40";
                pillClasses = "bg-rose-100 text-rose-700";
              } else if (isRolling) {
                cardClasses =
                  "border-amber-300 bg-amber-50/10 hover:border-amber-500 hover:bg-amber-50/20";
                pillClasses = "bg-amber-100 text-amber-800";
              } else {
                // Determine Yard specific colors for active Fixed Term
                if (unitId.startsWith("J")) {
                  cardClasses =
                    "border-sky-200 bg-sky-50/10 hover:border-sky-500 hover:bg-sky-50/20";
                  pillClasses = "bg-sky-100 text-sky-800";
                } else if (unitId.startsWith("L")) {
                  cardClasses =
                    "border-violet-200 bg-violet-50/10 hover:border-violet-500 hover:bg-violet-50/20";
                  pillClasses = "bg-violet-100 text-violet-800";
                } else {
                  cardClasses =
                    "border-emerald-200 bg-emerald-50/10 hover:border-emerald-500 hover:bg-emerald-50/20";
                  pillClasses = "bg-emerald-100 text-emerald-800";
                }
              }
            }

            return (
              <button
                key={unitId}
                onClick={() => setSelectedUnit(unitId)}
                className={`group flex h-28 cursor-pointer flex-col justify-between rounded-xl border-2 p-3 text-left transition-all duration-200 hover:shadow-xs ${cardClasses}`}
              >
                <div className="w-full">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-black text-slate-800 group-hover:text-[#062c1a]">
                      {unitId}
                    </span>
                    <span
                      className={`rounded-md px-1.5 py-0.5 text-xs font-bold ${pillClasses}`}
                    >
                      {active
                        ? hasArrears
                          ? "Arrears"
                          : isRolling
                            ? "Rolling"
                            : "Active"
                        : "Vacant"}
                    </span>
                  </div>
                  <p className="mt-2 w-full truncate text-xs font-medium text-slate-400">
                    {active ? active.tenants[0] : "Vacant"}
                  </p>
                </div>
                <div className="flex w-full items-center justify-between border-t border-slate-100 pt-1.5 text-xs font-extrabold text-slate-700">
                  <span>{active ? active.rent : "£0.00"}</span>
                  <span className="text-slate-300 transition-colors group-hover:text-[#062c1a]">
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tenancy Database Log */}
      <div className="space-y-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-xs">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-slate-800">
              Tenancy Database Log
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Comprehensive log of all records imported from Arthur.
            </p>
          </div>

          {/* Filters Dashboard */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search unit, tenant, status..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-2 pr-3 pl-8 text-sm text-slate-700 focus:ring-2 focus:ring-[#062c1a] focus:outline-none sm:w-56"
              />
              <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-slate-400">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 focus:outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="Occupied">Occupied</option>
              <option value="Moved out">Moved Out</option>
            </select>

            <select
              value={lettingFilter}
              onChange={(e) => setLettingFilter(e.target.value)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 focus:outline-none"
            >
              <option value="All">All Letting Types</option>
              <option value="FIXED TERM">Fixed Term</option>
              <option value="PREVIOUS TENANT">Previous Tenant</option>
              <option value="AST ROLLING">AST Rolling</option>
            </select>
          </div>
        </div>

        {/* Database Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-100 shadow-xs">
          <table className="w-full min-w-[1100px] table-fixed text-left text-sm text-slate-600">
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
              <tr className="border-b border-slate-200 bg-slate-50 font-bold tracking-wider text-slate-500 uppercase">
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
                const isArrears =
                  isOccupied &&
                  (t.rentStatus.toLowerCase().includes("owed") ||
                    t.rentStatus.toLowerCase().includes("missing"));

                let yardBadgeClasses =
                  "bg-emerald-50 text-emerald-700 border-emerald-100";
                let yardName = "Ashford";
                if (t.address.toLowerCase().includes("jevington")) {
                  yardBadgeClasses = "bg-sky-50 text-sky-700 border-sky-100";
                  yardName = "Jevington";
                } else if (t.address.toLowerCase().includes("longstone")) {
                  yardBadgeClasses =
                    "bg-violet-50 text-violet-700 border-violet-100";
                  yardName = "Longstone";
                }

                return (
                  <tr
                    key={t.id}
                    className={`transition-colors hover:bg-slate-50/50 ${
                      isArrears ? "bg-rose-50/5" : ""
                    }`}
                  >
                    <td className="space-y-1 px-4 py-4">
                      <button
                        onClick={() => setSelectedUnit(t.unit)}
                        className="block cursor-pointer text-base font-extrabold text-slate-800 hover:text-[#062c1a] hover:underline"
                      >
                        {t.unit}
                      </button>
                      <span
                        className={`inline-block rounded border px-1.5 py-0.5 text-xs font-bold ${yardBadgeClasses}`}
                      >
                        {yardName}
                      </span>
                    </td>
                    <td className="space-y-1 px-4 py-4">
                      <p className="truncate text-base font-bold text-slate-800">
                        {t.tenants.join(" & ") || "—"}
                      </p>
                      {t.phone.length > 0 && (
                        <p className="truncate text-xs text-slate-400">
                          📞 {t.phone.join(", ")}
                        </p>
                      )}
                      {t.email.length > 0 && (
                        <p className="truncate text-xs text-slate-400">
                          ✉️ {t.email.join(", ")}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-4 text-base font-bold text-slate-800">
                      {t.rent}
                    </td>
                    <td className="space-y-0.5 px-4 py-4">
                      <p className="text-base font-semibold text-slate-700">
                        {t.deposit}
                      </p>
                      <p className="truncate font-mono text-xs text-slate-400">
                        L: {t.lodged || "N/A"} | R: {t.received || "N/A"}
                      </p>
                    </td>
                    <td className="space-y-0.5 px-4 py-4 text-slate-500">
                      <p className="truncate text-sm font-medium">
                        {t.startDate} - {t.endDate}
                      </p>
                    </td>
                    <td className="space-y-1 px-4 py-4">
                      <span
                        className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-bold tracking-wider uppercase ${
                          isOccupied
                            ? "border border-emerald-100 bg-emerald-50 text-emerald-800"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {t.lettingType}
                      </span>
                      <p className="text-xs font-semibold text-slate-400">
                        {t.status}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      {editingTenancyId === t.id ? (
                        <input
                          type="text"
                          value={editRentStatus}
                          onChange={(e) => setEditRentStatus(e.target.value)}
                          className="w-full rounded-lg border bg-white px-2.5 py-1.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                        />
                      ) : (
                        <p
                          className={`text-base font-semibold ${isArrears ? "text-rose-600" : "text-slate-600"}`}
                        >
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
                          className="w-full rounded-lg border bg-white px-2.5 py-1.5 text-sm text-slate-800 focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                        />
                      ) : (
                        <p
                          className="block truncate text-sm font-medium text-slate-500 italic"
                          title={t.commentary}
                        >
                          {t.commentary || "—"}
                        </p>
                      )}
                    </td>
                    <td className="px-4 py-4 text-right">
                      {editingTenancyId === t.id ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleSaveEdit(t.id)}
                            className="cursor-pointer rounded-md bg-emerald-700 px-2 py-1 text-xs font-bold text-white hover:bg-emerald-800"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingTenancyId(null)}
                            className="cursor-pointer rounded-md bg-slate-200 px-2 py-1 text-xs font-bold text-slate-700 hover:bg-slate-300"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleEditClick(t)}
                          className="cursor-pointer text-sm font-bold text-[#062c1a] hover:text-[#0c472c] hover:underline"
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
                  <td
                    colSpan={9}
                    className="px-4 py-8 text-center font-medium text-slate-400"
                  >
                    No records found matching filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        {filteredTenancies.length > 0 && (
          <div className="flex flex-col gap-4 border-t border-slate-100 pt-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4 font-medium text-slate-500">
              <span>
                Showing{" "}
                <span className="font-bold text-slate-800">
                  {Math.min(
                    (currentPage - 1) * itemsPerPage + 1,
                    filteredTenancies.length,
                  )}
                </span>{" "}
                to{" "}
                <span className="font-bold text-slate-800">
                  {Math.min(
                    currentPage * itemsPerPage,
                    filteredTenancies.length,
                  )}
                </span>{" "}
                of{" "}
                <span className="font-bold text-slate-800">
                  {filteredTenancies.length}
                </span>{" "}
                tenancies
              </span>

              <div className="flex items-center gap-1.5">
                <span>Per page:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="cursor-pointer rounded-lg border border-slate-200 bg-white px-2 py-1 font-bold text-slate-700 focus:outline-none"
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
                className="cursor-pointer rounded-lg border border-slate-200 p-2 font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent"
                title="First Page"
              >
                &laquo;
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="cursor-pointer rounded-lg border border-slate-200 px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent"
              >
                ‹ Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => {
                  if (
                    totalPages > 5 &&
                    Math.abs(page - currentPage) > 1 &&
                    page !== 1 &&
                    page !== totalPages
                  ) {
                    if (page === 2 || page === totalPages - 1) {
                      return (
                        <span
                          key={page}
                          className="px-2 font-bold text-slate-400"
                        >
                          ...
                        </span>
                      );
                    }
                    return null;
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`cursor-pointer rounded-lg px-3 py-2 font-bold transition-all ${
                        currentPage === page
                          ? "border border-[#062c1a] bg-[#062c1a] text-white shadow-xs"
                          : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {page}
                    </button>
                  );
                },
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="cursor-pointer rounded-lg border border-slate-200 px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent"
              >
                Next ›
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="cursor-pointer rounded-lg border border-slate-200 p-2 font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs">
          <div className="animate-in fade-in zoom-in-95 w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl duration-150">
            {/* Header */}
            <div className="relative flex items-start justify-between bg-[#062c1a] p-6 text-white">
              <div>
                <span className="text-xs font-bold tracking-widest text-[#c8a270] uppercase">
                  Unit Details & Tenancy Log
                </span>
                <h3 className="mt-1 font-serif text-3xl font-bold">
                  Unit {selectedUnitDetails.unit}
                </h3>
                <p className="mt-1 text-sm text-emerald-100/70">
                  {selectedUnitDetails.address}
                </p>
              </div>
              <button
                onClick={() => setSelectedUnit(null)}
                className="cursor-pointer rounded-lg bg-white/10 p-2 text-white hover:bg-white/20 hover:text-[#c8a270]"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="max-h-[70vh] space-y-6 overflow-y-auto p-6">
              {/* Key Code Reference */}
              {selectedUnitDetails.code !== "N/A" &&
                selectedUnitDetails.code && (
                  <div className="flex items-center justify-between rounded-xl border border-amber-100 bg-amber-50 p-3 text-sm font-semibold text-amber-800">
                    <span>🔑 Arthur Unit Access Code:</span>
                    <code className="rounded border bg-white px-2 py-0.5 font-mono text-amber-900">
                      {selectedUnitDetails.code}
                    </code>
                  </div>
                )}

              {/* Active Tenancy */}
              <div>
                <h4 className="mb-3 text-sm font-bold tracking-wider text-slate-400 uppercase">
                  Active Tenancy
                </h4>
                {selectedUnitDetails.active ? (
                  <div className="space-y-3 rounded-xl border border-emerald-100 bg-emerald-50/30 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="text-lg font-extrabold text-slate-800">
                          {selectedUnitDetails.active.tenants.join(" & ")}
                        </h5>
                        <p className="mt-1 text-sm text-slate-500">
                          Letting type:{" "}
                          <span className="font-bold text-[#062c1a]">
                            {selectedUnitDetails.active.lettingType}
                          </span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-extrabold text-slate-800">
                          {selectedUnitDetails.active.rent}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-400">
                          Deposit: {selectedUnitDetails.active.deposit}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-emerald-100/50 py-3 text-sm text-slate-600">
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase">
                          Phone
                        </span>
                        <span className="font-semibold text-slate-700">
                          {selectedUnitDetails.active.phone.join(", ") || "—"}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase">
                          Email
                        </span>
                        <span className="block truncate font-semibold text-slate-700">
                          {selectedUnitDetails.active.email.join(", ") || "—"}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase">
                          Lease Term
                        </span>
                        <span className="font-semibold text-slate-700">
                          {selectedUnitDetails.active.startDate} to{" "}
                          {selectedUnitDetails.active.endDate}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xs font-semibold text-slate-400 uppercase">
                          Rent Status
                        </span>
                        <span className="font-semibold text-[#062c1a]">
                          {selectedUnitDetails.active.rentStatus || "—"}
                        </span>
                      </div>
                    </div>

                    {selectedUnitDetails.active.commentary && (
                      <div className="rounded-lg border border-emerald-100 bg-white p-3 text-sm text-slate-500 italic">
                        <span className="mb-0.5 block font-bold text-slate-700 not-italic">
                          Commentary:
                        </span>
                        &ldquo;{selectedUnitDetails.active.commentary}&rdquo;
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="rounded-xl border-2 border-dashed bg-slate-50 py-6 text-center text-sm font-semibold text-slate-400">
                    No active tenancy (Vacant)
                  </div>
                )}
              </div>

              {/* Tenancy History */}
              <div>
                <h4 className="mb-3 text-sm font-bold tracking-wider text-slate-400 uppercase">
                  Residency History
                </h4>
                {selectedUnitDetails.previous.length > 0 ? (
                  <div className="space-y-3">
                    {selectedUnitDetails.previous.map((prev, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm"
                      >
                        <div>
                          <h5 className="text-base font-bold text-slate-800">
                            {prev.tenants.join(" & ") || "Vacant/No Tenant"}
                          </h5>
                          <p className="mt-0.5 text-xs text-slate-400">
                            Lease: {prev.startDate || "N/A"} to{" "}
                            {prev.endDate || "N/A"} • {prev.lettingType}
                          </p>
                          {prev.email.length > 0 && (
                            <p className="text-xs text-slate-400">
                              Email: {prev.email.join(", ")}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="text-base font-bold text-slate-700">
                            {prev.rent}
                          </p>
                          <span className="mt-1 inline-block rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                            {prev.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="rounded-xl bg-slate-50/50 py-4 text-center text-sm font-medium text-slate-400">
                    No historical residency logs imported yet.
                  </p>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                onClick={() => setSelectedUnit(null)}
                className="cursor-pointer rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sync Status Animation Modal */}
      {showSyncModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between bg-[#062c1a] p-5 text-white">
              <h3 className="flex items-center gap-2 font-serif text-base font-bold">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${isSyncing ? "animate-ping bg-amber-400" : "bg-emerald-400"}`}
                ></span>
                {isSyncing ? "Syncing Arthur Online..." : "Sync Complete"}
              </h3>
            </div>

            {/* Body */}
            <div className="space-y-4 p-6">
              <div className="space-y-2">
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full bg-gradient-to-r from-[#062c1a] to-[#c8a270] transition-all duration-300"
                    style={{
                      width:
                        syncStep === 1
                          ? "25%"
                          : syncStep === 2
                            ? "50%"
                            : syncStep === 3
                              ? "85%"
                              : "100%",
                    }}
                  />
                </div>
                <div className="flex justify-between text-xs font-bold tracking-wider text-slate-400 uppercase">
                  <span>Connect</span>
                  <span>Fetch Properties</span>
                  <span>Retrieve Leases</span>
                  <span>Complete</span>
                </div>
              </div>

              {/* Log window */}
              <div className="h-48 space-y-2 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950 p-4 font-mono text-sm text-emerald-400 shadow-inner">
                {syncLog.map((log, index) => (
                  <p key={index} className="leading-relaxed">
                    <span className="text-slate-600">
                      [{new Date().toLocaleTimeString()}]
                    </span>{" "}
                    {log}
                  </p>
                ))}
                {isSyncing && (
                  <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-emerald-400">
                    _
                  </span>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">
              <button
                disabled={isSyncing}
                onClick={() => setShowSyncModal(false)}
                className={`cursor-pointer rounded-lg px-4 py-2 text-sm font-bold tracking-wider uppercase transition-all ${
                  isSyncing
                    ? "cursor-not-allowed bg-slate-200 text-slate-400"
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
