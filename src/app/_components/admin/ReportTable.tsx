"use client";

import React, { useState, useRef, useEffect } from "react";
import { api } from "~/trpc/react";
import { toast } from "sonner";

interface Report {
  id: string;
  title: string;
  subject: string;
  description: string;
  status: string;
  createdAt: string;
  priority: string;
  adminDescription: string | null;
  user: {
    name: string;
    email: string;
  };
}

const ReportTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Active status dropdown state
  const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

  // Modal dialog states
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Deletion confirmation modal states
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [deleteConfirmTitle, setDeleteConfirmTitle] = useState("");

  // Resolution form states
  const [adminDescription, setAdminDescription] = useState("");
  const [reportStatus, setReportStatus] = useState<string>("PENDING");

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync details form state
  useEffect(() => {
    if (selectedReport) {
      setAdminDescription(selectedReport.adminDescription ?? "");
      setReportStatus(selectedReport.status);
    }
  }, [selectedReport]);

  // tRPC Hooks
  const { data, isLoading, isFetching, refetch } =
    api.maintenance.getAdminReports.useQuery({
      page: currentPage,
      limit: itemsPerPage,
    });

  const updateReportStatusMutation =
    api.maintenance.updateReportStatus.useMutation();
  const deleteReportMutation = api.maintenance.deleteReport.useMutation();

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

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await updateReportStatusMutation.mutateAsync({
        id,
        status: newStatus,
      });
      setActiveDropdownId(null);
      await refetch();
      toast.success(`Report status updated to ${newStatus}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status.");
    }
  };

  const handleViewReport = (report: Report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedReport(null);
  };

  const handleUpdateStatusSubmit = async () => {
    if (!selectedReport) return;
    try {
      await updateReportStatusMutation.mutateAsync({
        id: selectedReport.id,
        status: reportStatus,
        adminDescription: adminDescription.trim() || undefined,
      });
      handleCloseModal();
      await refetch();
      toast.success("Report updated successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update report.");
    }
  };

  const handleDeleteClick = (id: string, title: string) => {
    setDeleteConfirmId(id);
    setDeleteConfirmTitle(title);
  };

  const handleConfirmDelete = async () => {
    if (!deleteConfirmId) return;
    try {
      await deleteReportMutation.mutateAsync({ id: deleteConfirmId });
      toast.success(`Report "${deleteConfirmTitle}" deleted successfully.`);
      setDeleteConfirmId(null);
      await refetch();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete the report.");
    }
  };

  const reportsList = data?.data?.reports ?? [];
  const meta = data?.data?.meta;
  const totalItems = meta?.total ?? 0;
  const totalPages = meta?.totalPages ?? 1;

  const from = totalItems ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const to = Math.min(currentPage * itemsPerPage, totalItems);
  const showingLabel = `Showing ${from} to ${to} of ${totalItems} reports`;

  const getStatusBadgeStyles = (status: string) => {
    switch (status) {
      case "RESOLVED":
        return "text-[#137333] bg-[#E6F4EA] border-[#CEEAD6] hover:bg-[#CEEAD6]/60";
      case "PENDING":
      default:
        return "text-[#B54708] bg-[#FFF9F2] border-[#FFEADA] hover:bg-[#FFEADA]/60";
    }
  };

  const getStatusDotColor = (status: string) => {
    switch (status) {
      case "RESOLVED":
        return "bg-emerald-500";
      case "PENDING":
      default:
        return "bg-amber-500";
    }
  };

  const renderSkeletons = () => (
    <>
      {Array.from({ length: 6 }).map((_, idx) => (
        <tr key={idx} className="animate-pulse border-b border-gray-100">
          <td className="px-6 py-5">
            <div className="mb-1.5 h-4 w-32 animate-pulse rounded bg-gray-200"></div>
            <div className="h-3 w-44 animate-pulse rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-5">
            <div className="h-4 w-40 animate-pulse rounded bg-gray-200"></div>
          </td>
          <td className="px-6 py-5">
            <div className="h-4 w-28 animate-pulse rounded bg-gray-200"></div>
          </td>
          <td className="px-6 py-5">
            <div className="mb-1.5 h-4 w-24 animate-pulse rounded bg-gray-200"></div>
            <div className="h-3 w-16 animate-pulse rounded bg-gray-100"></div>
          </td>
          <td className="px-6 py-5 text-center">
            <div className="mx-auto h-6 w-20 animate-pulse rounded-full bg-gray-200"></div>
          </td>
          <td className="px-6 py-5 text-center">
            <div className="mx-auto h-4 w-16 animate-pulse rounded bg-gray-200"></div>
          </td>
        </tr>
      ))}
    </>
  );

  return (
    <div className="relative w-full space-y-6">
      <div className="flex h-full w-full flex-col overflow-x-auto rounded-[12px] border border-[#E0E0E0] bg-white shadow-[0px_1px_3px_rgba(16,24,40,0.05)]">
        <div className="flex h-full flex-col overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#DCDCDC] bg-[#EAEAEA]">
                <th className="px-6 py-4 font-sans text-sm font-semibold whitespace-nowrap text-gray-700">
                  User
                </th>
                <th className="px-6 py-4 font-sans text-sm font-semibold whitespace-nowrap text-gray-700">
                  Issue Description
                </th>
                <th className="px-6 py-4 font-sans text-sm font-semibold whitespace-nowrap text-gray-700">
                  Unit & Property
                </th>
                <th className="px-6 py-4 font-sans text-sm font-semibold whitespace-nowrap text-gray-700">
                  Created
                </th>
                <th className="px-6 py-4 text-center font-sans text-sm font-semibold whitespace-nowrap text-gray-700">
                  Status
                </th>
                <th className="px-6 py-4 text-center font-sans text-sm font-semibold whitespace-nowrap text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EAEAEA]">
              {isLoading ? (
                renderSkeletons()
              ) : reportsList.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-16 text-center font-sans text-gray-500"
                  >
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <svg
                        className="h-8 w-8 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <span className="font-semibold text-gray-700">
                        No reports found
                      </span>
                      <span className="max-w-xs text-sm text-gray-400">
                        There are no reports submitted in the system.
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                reportsList.map((item) => (
                  <tr
                    key={item.id}
                    className={`relative transition-colors duration-150 hover:bg-[#F9FAFB] ${
                      activeDropdownId === item.id ? "z-30" : "z-10"
                    } ${isFetching ? "opacity-60" : ""}`}
                  >
                    {/* User Profile Column */}
                    <td className="px-6 py-5 font-sans whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-[15px] leading-tight font-semibold text-[#101828]">
                          {item.user.name}
                        </span>
                        <span className="mt-1 text-sm text-gray-400">
                          {item.user.email}
                        </span>
                      </div>
                    </td>

                    {/* Description Column */}
                    <td className="max-w-xs truncate px-6 py-5 font-sans text-sm font-semibold text-gray-900">
                      {item.title}
                    </td>

                    {/* Unit/Property Column */}
                    <td className="max-w-xs truncate px-6 py-5 font-sans text-sm text-[#475467]">
                      {item.subject}
                    </td>

                    {/* Created Date Column */}
                    <td className="px-6 py-5 font-sans whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900">
                          {formatDate(item.createdAt)}
                        </span>
                        <span className="mt-1 text-sm text-gray-400">
                          {formatTime(item.createdAt)}
                        </span>
                      </div>
                    </td>

                    {/* Status Column */}
                    <td
                      className={`relative px-6 py-5 text-center whitespace-nowrap ${
                        activeDropdownId === item.id ? "z-30" : "z-10"
                      }`}
                    >
                      <div
                        className="inline-block w-32"
                        ref={activeDropdownId === item.id ? dropdownRef : null}
                      >
                        <button
                          onClick={() =>
                            setActiveDropdownId(
                              activeDropdownId === item.id ? null : item.id,
                            )
                          }
                          className={`flex w-full cursor-pointer items-center justify-between gap-2.5 rounded-full border px-4 py-1.5 text-sm font-semibold transition-all focus:outline-none ${getStatusBadgeStyles(
                            item.status,
                          )}`}
                        >
                          <span className="font-sans text-[12px] leading-none uppercase">
                            {item.status}
                          </span>
                          <svg
                            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                              activeDropdownId === item.id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Dropdown Options */}
                        {activeDropdownId === item.id && (
                          <div className="animate-in fade-in slide-in-from-top-1 absolute left-1/2 z-30 mt-1.5 w-32 -translate-x-1/2 rounded-lg border border-[#E4E7EC] bg-white p-1 shadow-lg duration-100">
                            {(["PENDING", "RESOLVED"] as const).map((st) => (
                              <button
                                key={st}
                                onClick={() => handleStatusChange(item.id, st)}
                                className={`flex w-full cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-sm font-semibold transition-colors ${
                                  item.status === st
                                    ? "bg-[#ECFDF5] text-[#124E66]"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                              >
                                <span
                                  className={`h-1.5 w-1.5 rounded-full ${getStatusDotColor(st)}`}
                                />
                                {st === "PENDING" ? "Pending" : "Resolved"}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Action Column */}
                    <td className="px-6 py-5 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleViewReport(item)}
                          className="cursor-pointer rounded-lg p-1.5 text-[#062c1a] transition-colors hover:bg-blue-50"
                          title="View Details"
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
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteClick(item.id, item.title)}
                          disabled={deleteReportMutation.isPending}
                          className="cursor-pointer rounded-lg p-1.5 text-rose-500 transition-colors hover:bg-rose-50 disabled:opacity-50"
                          title="Delete Report"
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
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
        <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-[0px_1px_3px_0px_rgba(16,24,40,0.05)] sm:flex-row">
          <span className="font-sans text-sm text-gray-500">
            {showingLabel}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1 || isFetching}
              className="cursor-pointer rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-1.5 text-sm font-semibold text-gray-700 transition-colors select-none hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
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
                  className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-sm font-semibold transition-all ${
                    currentPage === pageNum
                      ? "bg-[#062c1a] text-white"
                      : "border border-[#D0D5DD] bg-white text-gray-700 hover:bg-gray-50"
                  } disabled:opacity-50`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages || isFetching}
              className="cursor-pointer rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-1.5 text-sm font-semibold text-gray-700 transition-colors select-none hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Detail Modal Dialog */}
      {isModalOpen && selectedReport && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs duration-200">
          <div
            className="animate-in zoom-in-95 relative max-h-[90vh] w-full max-w-[600px] space-y-5 overflow-y-auto rounded-3xl bg-white p-6 font-sans shadow-2xl duration-200 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 cursor-pointer rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-red-500"
            >
              <svg
                className="h-5 w-5 stroke-[2.5] text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex items-start justify-between border-b border-gray-100 pr-8 pb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-900">
                  Report Detail
                </h2>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase ${
                    selectedReport.status === "RESOLVED"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {selectedReport.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600">
              <div>
                <span className="block text-[10px] font-semibold tracking-wide text-gray-400 uppercase">
                  Submitted By
                </span>
                <span className="text-[13px] font-bold text-gray-800">
                  {selectedReport.user.name}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-semibold tracking-wide text-gray-400 uppercase">
                  Email
                </span>
                <span className="text-[13px] font-bold break-all text-gray-800">
                  {selectedReport.user.email}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[13px] font-semibold text-gray-500">
                    Priority Level
                  </label>
                  <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-2 text-[13px] font-semibold text-gray-800 uppercase">
                    {selectedReport.priority}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[13px] font-semibold text-gray-500">
                    Unit & Property
                  </label>
                  <div className="truncate rounded-2xl border border-gray-100 bg-gray-50 px-4 py-2 text-[13px] font-semibold text-gray-800">
                    {selectedReport.subject}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[13px] font-semibold text-gray-500">
                  Issue Description
                </label>
                <div className="max-h-32 overflow-y-auto rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3.5 text-[13.5px] leading-relaxed text-gray-700">
                  {selectedReport.description}
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-gray-100 pt-4">
              <h3 className="text-sm font-bold text-gray-800">
                Resolution & Status
              </h3>

              <div className="space-y-1">
                <label className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                  Resolution Notes / Admin Note
                </label>
                <textarea
                  value={adminDescription}
                  onChange={(e) => setAdminDescription(e.target.value)}
                  placeholder="Explain how this issue is resolved or write admin internal notes..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-[#E4E7EC] bg-white px-4 py-3 text-sm text-gray-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500/10 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 items-center gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold tracking-wider text-gray-400 uppercase">
                    Update Status To
                  </label>
                  <select
                    value={reportStatus}
                    onChange={(e) => setReportStatus(e.target.value)}
                    className="w-full cursor-pointer rounded-xl border border-[#E4E7EC] bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-500/10 focus:outline-none"
                  >
                    <option value="PENDING">Pending</option>
                    <option value="RESOLVED">Resolved</option>
                  </select>
                </div>
                <div className="pt-5">
                  <button
                    onClick={handleUpdateStatusSubmit}
                    disabled={updateReportStatusMutation.isPending}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#062c1a] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#0c472c] disabled:opacity-50"
                  >
                    <span>Update Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs duration-200">
          <div className="animate-in zoom-in-95 relative w-full max-w-[450px] space-y-5 rounded-3xl bg-white p-6 text-center shadow-2xl duration-200 md:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">Are you sure?</h3>
              <p className="text-sm leading-relaxed text-gray-500">
                Do you really want to delete the report{" "}
                <strong className="text-gray-800">
                  &ldquo;{deleteConfirmTitle}&rdquo;
                </strong>
                ? This action cannot be undone.
              </p>
            </div>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 cursor-pointer rounded-xl border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                disabled={deleteReportMutation.isPending}
                className="flex-1 cursor-pointer rounded-xl bg-red-600 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-700 disabled:opacity-50"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReportTable;
