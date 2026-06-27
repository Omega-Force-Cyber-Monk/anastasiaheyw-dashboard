"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface TanentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TanentSidebar({ isOpen, onClose }: TanentSidebarProps) {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/tanent/dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
        </svg>
      ),
    },
    {
      name: "Maintenance",
      href: "/tanent/maintenance",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      name: "Documents",
      href: "/tanent/documents",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: "Profile",
      href: "/tanent/profile",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <aside
      className={`fixed lg:static inset-y-0 left-0 w-64 bg-[#062c1a] text-white flex flex-col min-h-screen border-r border-[#0a3d25] shadow-lg z-40 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-6 border-b border-[#0a3d25]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#c8a270] to-[#bfa075] flex items-center justify-center text-[#062c1a] font-bold">
            Y
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm tracking-wider uppercase leading-none text-white">
              All The Yards
            </span>
            <span className="text-[10px] text-[#c8a270] font-medium tracking-widest uppercase">
              Tenant Portal
            </span>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="lg:hidden p-1 rounded-lg text-emerald-100/70 hover:text-white hover:bg-[#0a3d25] cursor-pointer"
          aria-label="Close sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                isActive
                  ? "bg-[#0c472c] text-white border-l-4 border-[#c8a270]"
                  : "text-emerald-100/70 hover:text-white hover:bg-[#0a3d25]"
              }`}
            >
              <span className={`transition-colors duration-200 ${isActive ? "text-[#c8a270]" : "text-emerald-100/50 group-hover:text-emerald-100"}`}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Details */}
      <div className="p-4 border-t border-[#0a3d25] bg-[#052415]">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-emerald-100/50">
          <span>Active Lease: Ashford 4B</span>
        </div>
      </div>
    </aside>
  );
}
