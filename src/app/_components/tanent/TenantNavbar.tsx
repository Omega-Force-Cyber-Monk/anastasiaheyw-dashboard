"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export function TenantNavbar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { tenantDetails } = useTenant();

  const tenantName = tenantDetails.tenants.join(" & ") || "Tenant";
  const tenantEmail = tenantDetails.email[0] ?? "tenant@email.com";

  const avatarInitials = tenantDetails.tenants[0]
    ? tenantDetails.tenants[0]
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "VN";

  // Calculate dynamic rent due day based on tenancy start date
  const getOrdinal = (d: number) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  };

  const dueDay = tenantDetails.startDate
    ? new Date(tenantDetails.startDate).getDate() || 29
    : 29;

  return (
    <header className="h-16 bg-white border-b border-[#e2e8f0] px-6 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      {/* Left: Dynamic Unit & Property Badge */}
      <div className="flex items-center gap-3">
        <span className="text-xs font-extrabold tracking-widest text-[#c8a270] uppercase bg-[#062c1a]/5 px-2.5 py-1 rounded-lg border border-[#e2e8f0]">
          Flat {tenantDetails.unit}, {tenantDetails.property}
        </span>
      </div>

      {/* Right Side: Notifications & Profile Dropdown */}
      <div className="flex items-center gap-4">
        {/* Dynamic Rent Status Alert */}
        <div className="relative group">
          <button className="p-2 rounded-lg text-amber-600 bg-amber-50 hover:bg-amber-100 transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-bold">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            Rent due {dueDay}{getOrdinal(dueDay)}
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 h-9 rounded-full bg-[#062c1a] text-white flex items-center justify-center font-bold border border-[#c8a270]">
              {avatarInitials}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-800 leading-tight">{tenantName}</p>
              <p className="text-xs text-slate-400">{tenantEmail}</p>
            </div>
            <svg
              className="w-4 h-4 text-slate-400 hidden sm:block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-[#e2e8f0] rounded-xl shadow-xl py-2 z-30">
              <Link
                href="/tanent/profile"
                onClick={() => setUserMenuOpen(false)}
                className="w-full text-left block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 cursor-pointer font-bold transition-colors"
              >
                Profile
              </Link>
              <hr className="border-t border-[#e2e8f0]/60 my-1" />
              <button
                onClick={async () => {
                  if (typeof window !== "undefined") {
                    localStorage.removeItem("tenant_name");
                    localStorage.removeItem("tenant_email");
                  }
                  await signOut({ redirectTo: "/" });
                }}
                className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer font-bold"
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
