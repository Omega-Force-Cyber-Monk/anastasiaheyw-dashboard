"use client";

import React, { useState } from "react";

export default function TenantMaintenancePage() {
  const [tickets, setTickets] = useState([
    {
      id: 1,
      issue: "Leaking bathroom sink faucet",
      priority: "Medium",
      status: "In Progress",
      date: "June 25, 2026",
    },
  ]);
  const [issue, setIssue] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issue) return;
    const newTicket = {
      id: Date.now(),
      issue,
      priority,
      status: "Open",
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    setTickets([newTicket, ...tickets]);
    setIssue("");
    alert("Maintenance request submitted successfully to All The Yards team!");
  };

  return (
    <div className="mx-auto w-full space-y-8 px-4 md:px-0">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-800">
          Maintenance Requests
        </h1>
        <p className="mt-1 text-slate-500">
          Submit new issues or track the status of current repairs.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Submit Request Form */}
        <div className="h-fit rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-1">
          <h3 className="mb-4 text-base font-bold text-slate-800">
            New Request
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Describe the issue
              </label>
              <textarea
                required
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="E.g., Kitchen sink is clogged and draining very slowly..."
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-transparent focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 transition-all focus:border-transparent focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
              >
                <option value="Low">Low (Non-urgent)</option>
                <option value="Medium">Medium</option>
                <option value="Urgent">Urgent (Emergency)</option>
              </select>
            </div>

            {/* Mock File Upload */}
            <div>
              <label className="mb-2 block text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Upload Photos / Videos
              </label>
              <div className="cursor-pointer rounded-xl border-2 border-dashed border-slate-200 p-4 text-center transition-all hover:bg-slate-50/50">
                <span className="block text-xl">📸</span>
                <span className="mt-1 block text-xs font-semibold text-slate-400">
                  Drag files here or click to upload
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-[#062c1a] py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0c472c]"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Support Tickets List */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:col-span-2">
          <h3 className="mb-6 text-lg font-bold text-slate-800">
            Your Requests History
          </h3>
          <div className="space-y-4">
            {tickets.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 p-4 transition-all hover:border-slate-200"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex rounded px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase ${
                        t.priority === "Urgent"
                          ? "border border-rose-100 bg-rose-50 text-rose-600"
                          : t.priority === "Medium"
                            ? "border border-amber-100 bg-amber-50 text-amber-600"
                            : "border border-slate-200 bg-slate-50 text-slate-600"
                      }`}
                    >
                      {t.priority}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Submitted: {t.date}
                    </span>
                  </div>
                  <h4 className="mt-2 text-sm font-bold text-slate-800">
                    {t.issue}
                  </h4>
                </div>

                <span className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      t.status === "Open"
                        ? "bg-amber-500"
                        : t.status === "In Progress"
                          ? "animate-pulse bg-blue-500"
                          : "bg-emerald-500"
                    }`}
                  ></span>
                  {t.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
