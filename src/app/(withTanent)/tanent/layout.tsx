"use client";

import React, { useState } from "react";
import { TenantSidebar } from "~/app/_components/tanent/TenantSidebar";
import { TenantNavbar } from "~/app/_components/tanent/TenantNavbar";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-slate-50 h-screen overflow-hidden text-slate-800 font-sans relative">
      {/* Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-30 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Visible on Desktop, toggleable on Mobile */}
      <div className="hidden lg:block">
        <TenantSidebar />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 z-40 lg:hidden">
          <TenantSidebar onClose={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Main Layout Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Navbar */}
        <TenantNavbar />

        {/* Mobile menu trigger for sidebar */}
        <div className="lg:hidden p-4 bg-white border-b border-[#e2e8f0] flex items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-50 cursor-pointer"
            aria-label="Toggle sidebar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="ml-3 font-semibold text-slate-700">Tenant Menu</span>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
