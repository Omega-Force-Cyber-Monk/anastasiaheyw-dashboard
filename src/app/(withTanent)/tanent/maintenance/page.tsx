"use client";

import React, { useState, useEffect } from "react";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export default function TenantMaintenancePage() {
  const { metadata } = useTenant();

  // Maintenance logs state
  const [maintenanceReports, setMaintenanceReports] = useState([
    {
      id: "M01",
      issue: "Remove TV from living room wall",
      priority: "Low",
      status: "Scheduled",
      reportedDate: "2025-05-02",
      notes: "Tenant requested TV bracket & unit to be removed. Handyman assigned.",
    },
    {
      id: "M02",
      issue: "Boiler annual certificate inspection check",
      priority: "Medium",
      status: "Completed",
      reportedDate: "2025-04-12",
      notes: "Completed by GasSafe engineer. Certificate uploaded.",
    }
  ]);

  const [newIssue, setNewIssue] = useState("");
  const [newPriority, setNewPriority] = useState("Medium");
  const [reportSuccess, setReportSuccess] = useState(false);

  // Meter Reading State
  const [meterReadings, setMeterReadings] = useState<Array<{ type: string; value: string; date: string }>>([]);

  useEffect(() => {
    if (metadata) {
      setMeterReadings([
        {
          type: "Electricity",
          value: `${metadata.elecMeterCheckInValue} kWh (serial ${metadata.elecMeterSerial})`,
          date: `${metadata.elecMeterCheckInDate} (Check-in)`,
        },
        {
          type: "Water",
          value: `${metadata.waterMeterCheckInValue} m³ (serial ${metadata.waterMeterSerial})`,
          date: `${metadata.waterMeterCheckInDate} (Check-in)`,
        },
      ]);
    }
  }, [metadata]);
  const [elecRead, setElecRead] = useState("");
  const [waterRead, setWaterRead] = useState("");
  const [meterSuccess, setMeterSuccess] = useState(false);

  const handleReportMaintenance = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIssue.trim()) return;

    const newReport = {
      id: `M0${maintenanceReports.length + 1}`,
      issue: newIssue,
      priority: newPriority,
      status: "Submitted",
      reportedDate: new Date().toISOString().split("T")[0]!,
      notes: "Awaiting property manager review.",
    };

    setMaintenanceReports([newReport, ...maintenanceReports]);
    setNewIssue("");
    setReportSuccess(true);
    setTimeout(() => setReportSuccess(false), 4000);
  };

  const handleUpdateMeters = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = [...meterReadings];
    let changed = false;

    if (elecRead.trim()) {
      updated.push({
        type: "Electricity",
        value: `${elecRead} kWh`,
        date: `${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`
      });
      setElecRead("");
      changed = true;
    }

    if (waterRead.trim()) {
      updated.push({
        type: "Water",
        value: `${waterRead} m³`,
        date: `${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`
      });
      setWaterRead("");
      changed = true;
    }

    if (changed) {
      setMeterReadings(updated);
      setMeterSuccess(true);
      setTimeout(() => setMeterSuccess(false), 4000);
    }
  };

  return (
    <div className="animate-in fade-in space-y-8 duration-300">
      {/* Header Panel */}
      <div className="border-b border-[#e2e8f0] pb-5">
        <h1 className="font-serif text-3xl font-bold text-slate-900 tracking-tight">Maintenance & Utilities</h1>
        <p className="text-sm text-slate-500 mt-1">Submit repair requests, track scheduled handymen, and report meter logs.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ticket list panel */}
        <div className="space-y-4">
          <div className="border-b border-[#e2e8f0] pb-2">
            <h3 className="font-serif text-lg font-bold text-slate-900">Active Requests</h3>
            <p className="text-xs text-slate-500">Track resolution status of your maintenance claims</p>
          </div>

          <div className="space-y-4">
            {maintenanceReports.map((report) => (
              <div
                key={report.id}
                className="p-5 rounded-xl border border-[#e2e8f0] bg-white hover:shadow-sm transition-all flex flex-col justify-between gap-4 text-sm"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold text-[#c8a270] uppercase bg-[#062c1a]/5 px-2 py-0.5 rounded-sm">
                      Ticket {report.id}
                    </span>
                    <h4 className="font-semibold text-slate-900 mt-1.5">{report.issue}</h4>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-md border ${
                      report.status === "Completed"
                        ? "bg-emerald-50 text-emerald-800 border-[#e2e8f0]"
                        : report.status === "Scheduled"
                        ? "bg-blue-50 text-blue-800 border-[#e2e8f0]"
                        : "bg-amber-50 text-amber-800 border-[#e2e8f0] animate-pulse"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 rounded-lg border border-[#e2e8f0]">{report.notes}</p>
                <div className="flex justify-between items-center text-[10px] text-slate-400 border-t border-[#e2e8f0] pt-3">
                  <span>Reported Date: <strong>{report.reportedDate}</strong></span>
                  <span>Priority Level: <strong className="text-slate-700 uppercase">{report.priority}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Form */}
        <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-white shadow-sm space-y-5">
          <div className="border-b border-[#e2e8f0] pb-3">
            <h3 className="font-serif text-lg font-bold text-slate-900">Report an Issue</h3>
            <p className="text-xs text-slate-500">Provide details instantly to Heywood Property Services management</p>
          </div>

          <form onSubmit={handleReportMaintenance} className="space-y-4">
            {reportSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-250 text-emerald-800 text-xs rounded-lg font-bold">
                ✓ Maintenance ticket successfully submitted to Heywood Property Services!
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">
                Describe the issue
              </label>
              <textarea
                value={newIssue}
                onChange={(e) => setNewIssue(e.target.value)}
                placeholder="E.g. Boiler heater isn't producing warm water, or lock is sticky..."
                rows={4}
                className="w-full text-sm rounded-lg border border-[#e2e8f0] p-3 focus:border-[#062c1a] focus:ring-1 focus:ring-[#062c1a] focus:outline-hidden transition-all bg-slate-50/50 focus:bg-white"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">
                Urgency Priority
              </label>
              <div className="flex gap-3">
                {["Low", "Medium", "High"].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setNewPriority(p)}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg border transition-all ${
                      newPriority === p
                        ? "bg-[#062c1a] text-white border-[#062c1a] shadow-xs"
                        : "bg-white text-slate-600 border-[#e2e8f0] hover:bg-slate-50 cursor-pointer"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-bold text-white bg-[#062c1a] hover:bg-[#0c472c] rounded-lg transition-all shadow-md cursor-pointer uppercase tracking-widest"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </div>

      {/* Meter readings / utilities split */}
      <div className="border-t border-[#e2e8f0] pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="border-b border-[#e2e8f0] pb-2">
            <h3 className="font-serif text-lg font-bold text-slate-900 whitespace-nowrap ">Utility Registry</h3>
            <p className="text-xs text-slate-500">Official meter logs used for tenant utility validations.</p>
          </div>
          <div className="w-full overflow-x-auto bg-white rounded-xl shadow-sm border border-[#E3E3E4]">
            <table className="min-w-[500px] w-full text-sm">
              <thead className="border-b border-[#DBE0E5] bg-gray-50">
                <tr className="border-b border-[#e2e8f0] text-slate-455 font-bold bg-slate-50 text-xs uppercase tracking-wider">
                  <th className="py-3 px-4 text-left whitespace-nowrap ">Utility Type</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap ">Reading Value</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap ">Logged Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2e8f0]">
                {meterReadings.map((reading, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{reading.type}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-mono font-bold text-[#062c1a] bg-[#062c1a]/5 px-2.5 py-1 rounded-md">
                        {reading.value}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-450">{reading.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* Submit Readings */}
        <div className="p-6 rounded-2xl border border-[#e2e8f0] bg-white shadow-sm space-y-4">
          <div className="border-b border-[#e2e8f0] pb-2">
            <h3 className="font-serif text-base font-bold text-slate-900">Update Readings</h3>
            <p className="text-xs text-slate-500">Submit latest electricity or water figures to management.</p>
          </div>

          <form onSubmit={handleUpdateMeters} className="space-y-4">
            {meterSuccess && (
              <div className="p-3 bg-emerald-50 border border-emerald-250 text-emerald-800 text-xs rounded-lg font-bold">
                ✓ Readings updated successfully.
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                  Electricity (kWh)
                </label>
                <input
                  type="number"
                  value={elecRead}
                  onChange={(e) => setElecRead(e.target.value)}
                  placeholder="E.g. 45980"
                  className="w-full text-sm rounded-lg border border-[#e2e8f0] p-2.5 focus:border-[#062c1a] focus:ring-1 focus:ring-[#062c1a] focus:outline-hidden transition-all bg-slate-50/50 focus:bg-white"
                />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">
                  Water (m³)
                </label>
                <input
                  type="number"
                  value={waterRead}
                  onChange={(e) => setWaterRead(e.target.value)}
                  placeholder="E.g. 1245"
                  className="w-full text-sm rounded-lg border border-[#e2e8f0] p-2.5 focus:border-[#062c1a] focus:ring-1 focus:ring-[#062c1a] focus:outline-hidden transition-all bg-slate-50/50 focus:bg-white"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 text-xs font-bold text-[#062c1a] bg-white border border-[#e2e8f0] hover:bg-slate-50 rounded-lg transition-all cursor-pointer uppercase tracking-widest font-semibold"
            >
              Save Readings
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
