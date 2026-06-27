"use client";

import React, { useState } from "react";

export default function TenantMaintenancePage() {
  const [tickets, setTickets] = useState([
    { id: 1, issue: "Leaking bathroom sink faucet", priority: "Medium", status: "In Progress", date: "June 25, 2026" },
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
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }),
    };
    setTickets([newTicket, ...tickets]);
    setIssue("");
    alert("Maintenance request submitted successfully to All The Yards team!");
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto px-4 md:px-0">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Maintenance Requests</h1>
        <p className="text-slate-500 mt-1">Submit new issues or track the status of current repairs.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Submit Request Form */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm lg:col-span-1 h-fit">
          <h3 className="text-base font-bold text-slate-800 mb-4">New Request</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Describe the issue
              </label>
              <textarea
                required
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                placeholder="E.g., Kitchen sink is clogged and draining very slowly..."
                rows={4}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#062c1a] focus:border-transparent transition-all bg-white"
              >
                <option value="Low">Low (Non-urgent)</option>
                <option value="Medium">Medium</option>
                <option value="Urgent">Urgent (Emergency)</option>
              </select>
            </div>

            {/* Mock File Upload */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Upload Photos / Videos
              </label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center hover:bg-slate-50/50 transition-all cursor-pointer">
                <span className="block text-xl">📸</span>
                <span className="block text-xs text-slate-400 font-semibold mt-1">
                  Drag files here or click to upload
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white font-semibold rounded-lg text-sm transition-all shadow-sm cursor-pointer"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Support Tickets List */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm lg:col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Your Requests History</h3>
          <div className="space-y-4">
            {tickets.map((t) => (
              <div
                key={t.id}
                className="p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-all flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                        t.priority === "Urgent"
                          ? "bg-rose-50 text-rose-600 border border-rose-100"
                          : t.priority === "Medium"
                          ? "bg-amber-50 text-amber-600 border border-amber-100"
                          : "bg-slate-50 text-slate-600 border border-slate-200"
                      }`}
                    >
                      {t.priority}
                    </span>
                    <span className="text-[10px] text-slate-400">Submitted: {t.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mt-2">{t.issue}</h4>
                </div>

                <span className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      t.status === "Open"
                        ? "bg-amber-500"
                        : t.status === "In Progress"
                        ? "bg-blue-500 animate-pulse"
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
