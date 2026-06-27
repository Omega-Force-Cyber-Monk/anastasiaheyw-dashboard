"use client";

import React, { useState } from "react";
import { TanentSidebar } from "~/app/_components/tanent/TanentSidebar";
import { TanentNavbar } from "~/app/_components/tanent/TanentNavbar";

export default function TenantLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-slate-50 min-h-screen text-slate-800 font-sans relative">
      {/* Backdrop overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-30 lg:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <TanentSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Layout Area */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Navbar */}
        <TanentNavbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}