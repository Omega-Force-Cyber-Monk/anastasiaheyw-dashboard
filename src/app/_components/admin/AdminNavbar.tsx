"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";

interface AdminNavbarProps {
  onToggleSidebar: () => void;
}

export function AdminNavbar({ onToggleSidebar }: AdminNavbarProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [name, setName] = useState("System Admin");
  const [email, setEmail] = useState("admin@alltheyards.com");

  useEffect(() => {
    const loadProfile = () => {
      if (typeof window !== "undefined") {
        setName(localStorage.getItem("admin_name") ?? "System Admin");
        setEmail(localStorage.getItem("admin_email") ?? "admin@alltheyards.com");
      }
    };
    loadProfile();
    window.addEventListener("admin_profile_updated", loadProfile);
    return () => {
      window.removeEventListener("admin_profile_updated", loadProfile);
    };
  }, []);

  const avatarInitials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2) || "SA";

  return (
    <header className="h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      {/* Left: Mobile Toggle Trigger + Search */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-50 cursor-pointer"
          aria-label="Toggle sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Right Side Icons & Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
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
              <p className="text-sm font-semibold text-slate-800">{name}</p>
              <p className="text-xs text-slate-400">{email}</p>
            </div>
            <svg className="w-4 h-4 text-slate-400 hidden sm:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-30">
              <a href="/admin/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                Profile
              </a>

              <hr className="my-1 border-slate-100" />
              <button
                onClick={async () => {
                  await signOut({ redirectTo: "/" });
                }}
                className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
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
