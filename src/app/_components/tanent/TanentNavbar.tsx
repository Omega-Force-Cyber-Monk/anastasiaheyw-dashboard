"use client";

import { useState } from "react";

interface TanentNavbarProps {
  onToggleSidebar: () => void;
}

export function TanentNavbar({ onToggleSidebar }: TanentNavbarProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-100 px-6 flex items-center justify-between sticky top-0 z-20 shadow-sm">
      {/* Left: Mobile Toggle Trigger */}
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

        <span className="font-extrabold text-sm text-[#062c1a] tracking-wider uppercase hidden sm:block">
          Tenant Portal
        </span>
      </div>

      {/* Right Side Icons & Profile */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotificationsOpen(!notificationsOpen)}
            className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors relative cursor-pointer"
          >
            <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-white"></span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          
          {notificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-30">
              <div className="px-4 py-2 border-b border-slate-100 font-bold text-slate-800 text-sm">
                Notifications
              </div>
              <div className="max-h-64 overflow-y-auto">
                <a href="#" className="block px-4 py-3 hover:bg-slate-50 border-b border-slate-50 transition-colors">
                  <p className="text-xs font-semibold text-slate-800">Rent receipt updated</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">June invoice marked as paid</p>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="w-[1px] h-6 bg-slate-200"></div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 sm:w-9 h-9 rounded-full bg-[#062c1a] text-white flex items-center justify-center font-bold border border-[#c8a270]">
              AR
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-slate-800">Alex Rivera</p>
              <p className="text-xs text-slate-400">alex.rivera@alltheyards.com</p>
            </div>
            <svg className="w-4 h-4 text-slate-400 hidden sm:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-30">
              <a href="/tanent/profile" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                My Profile
              </a>
              <a href="/tanent/documents" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">
                Documents
              </a>
              <hr className="my-1 border-slate-100" />
              <button
                onClick={() => {
                  alert("Sign-out button clicked (mocked).");
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
