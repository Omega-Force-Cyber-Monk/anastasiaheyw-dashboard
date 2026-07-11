"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";


const UtilityTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // tRPC query to fetch readings
  const { data, isLoading, isFetching } =
    api.maintenance.getAdminReadings.useQuery({
      page: currentPage,
      limit: itemsPerPage,
    });

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const formatTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "";
    }
  };

  const readingsList = data?.data?.readings ?? [];
  const meta = data?.data?.meta;
  const totalItems = meta?.total ?? 0;
  const totalPages = meta?.totalPages ?? 1;

  const from = totalItems ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const to = Math.min(currentPage * itemsPerPage, totalItems);
  const showingLabel = `Showing ${from} to ${to} of ${totalItems} readings`;

  const renderSkeletons = () => (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <tr key={idx} className="animate-pulse border-b border-gray-100">
          <td className="px-6 py-5">
            <div className="h-4 bg-gray-200 rounded w-32 mb-1.5 animate-pulse"></div>
            <div className="h-3 bg-gray-100 rounded w-44 animate-pulse"></div>
          </td>
          <td className="px-6 py-5">
            <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
          </td>
          <td className="px-6 py-5">
            <div className="h-4 bg-gray-200 rounded w-28 animate-pulse"></div>
          </td>
          <td className="px-6 py-5">
            <div className="h-4 bg-gray-200 rounded w-24 mb-1.5 animate-pulse"></div>
            <div className="h-3 bg-gray-100 rounded w-16 animate-pulse"></div>
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <div className="w-full space-y-6 relative">
      <div className="flex h-full w-full flex-col overflow-x-auto border border-[#E0E0E0] rounded-[12px] bg-white shadow-[0px_1px_3px_rgba(16,24,40,0.05)]">
        <div className="overflow-x-auto h-full flex flex-col">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#EAEAEA] border-b border-[#DCDCDC]">
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 font-sans whitespace-nowrap">
                  Tenant
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 font-sans whitespace-nowrap">
                  Property & Unit
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 font-sans whitespace-nowrap">
                  Utility Type
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 font-sans whitespace-nowrap">
                  Reading Value
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-700 font-sans whitespace-nowrap">
                  Logged Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAEAEA]">
              {isLoading ? (
                renderSkeletons()
              ) : readingsList.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-16 text-center text-gray-500 font-sans"
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span className="font-semibold text-gray-700">
                        No readings found
                      </span>
                      <span className="text-sm text-gray-400 max-w-xs">
                        There are no meter readings submitted by tenants yet.
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                readingsList.map((item) => (
                  <tr
                    key={item.id}
                    className={`hover:bg-[#F9FAFB] transition-colors duration-150 relative ${
                      isFetching ? "opacity-60" : ""
                    }`}
                  >
                    {/* User Profile Column */}
                    <td className="px-6 py-5 whitespace-nowrap font-sans">
                      <div className="flex flex-col">
                        <span className="font-semibold text-[#101828] text-[15px] leading-tight">
                          {item.user.name}
                        </span>
                        <span className="text-sm text-gray-400 mt-1">
                          {item.user.email}
                        </span>
                      </div>
                    </td>

                    {/* Unit/Property Column */}
                    <td className="px-6 py-5 text-sm text-[#475467] font-sans max-w-xs truncate font-semibold">
                      Flat {item.unitName}, {item.propertyName}
                    </td>

                    {/* Utility Type Column */}
                    <td className="px-6 py-5 text-sm font-semibold text-gray-900 font-sans max-w-xs truncate">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        item.type === "Electricity"
                          ? "bg-amber-50 text-amber-800 border border-amber-200"
                          : item.type === "Water"
                          ? "bg-blue-50 text-blue-800 border border-blue-200"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      }`}>
                        {item.type}
                      </span>
                    </td>

                    {/* Value Column */}
                    <td className="px-6 py-5 whitespace-nowrap font-sans font-mono font-bold text-[#062c1a]">
                      {item.value}
                    </td>

                    {/* Logged Date Column */}
                    <td className="px-6 py-5 whitespace-nowrap font-sans">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">
                          {formatDate(item.loggedDate)}
                        </span>
                        <span className="text-sm text-gray-400 mt-1">
                          {formatTime(item.loggedDate)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Footer */}
      {data && totalItems > 0 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 bg-white border border-gray-100 rounded-xl p-4 shadow-[0px_1px_3px_0px_rgba(16,24,40,0.05)]">
          <span className="text-sm text-gray-500 font-sans">
            {showingLabel}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1 || isFetching}
              className="border border-[#D0D5DD] px-3.5 py-1.5 rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, idx) => {
              const pageNum = idx + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  disabled={isFetching}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold flex items-center justify-center transition-all cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-[#062c1a] text-white"
                      : "border border-[#D0D5DD] text-gray-700 bg-white hover:bg-gray-50"
                  } disabled:opacity-50`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages || isFetching}
              className="border border-[#D0D5DD] px-3.5 py-1.5 rounded-lg text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-colors cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UtilityTable;