"use client";

import React, { useState, createContext, useContext, useMemo } from "react";
import { signOut } from "next-auth/react";
import { TenantSidebar } from "~/app/_components/tanent/TenantSidebar";
import { TenantNavbar } from "~/app/_components/tanent/TenantNavbar";
import { getUnitMetadata, type UnitMetadata } from "~/server/arthur/tenantDataMap";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface TenantDetailsType {
  id: string;
  unit: string;
  rent: string;
  rentVal: number;
  deposit: string;
  depositVal: number;
  lodged: string;
  received: string;
  tenants: string[];
  phone: string[];
  email: string[];
  startDate: string;
  endDate: string;
  status: string;
  lettingType: string;
  rentStatus: string;
  commentary: string;
  address: string;
  code: string;
  property: string;
}

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface TenantContextType {
  tenantDetails: TenantDetailsType;
  metadata: UnitMetadata;
  sessionUser: SessionUser;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error("useTenant must be used within a TenantLayout");
  }
  return context;
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface TenantClientLayoutProps {
  children: React.ReactNode;
  /**
   * Tenant record matched server-side from the database.
   * null means this user has no tenancy record in the DB.
   */
  initialTenantDetails: TenantDetailsType | null;
  /**
   * Authenticated user info passed from the server layout.
   * We never rely on useSession() here — that avoids the
   * "unauthenticated" flash caused by JWT cookie hydration delay.
   */
  sessionUser: SessionUser;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function TenantClientLayout({
  children,
  initialTenantDetails,
  sessionUser,
}: TenantClientLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Resolve unit metadata from the matched tenancy
  const metadata = useMemo<UnitMetadata | null>(() => {
    if (!initialTenantDetails) return null;
    return getUnitMetadata(initialTenantDetails.unit);
  }, [initialTenantDetails]);

  // ── No tenancy record found for this user ────────────────────────────────
  if (!initialTenantDetails || !metadata) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#062c1a] text-white">
        <div className="text-center space-y-6 max-w-lg p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-emerald-500/25 shadow-xl">
          <div className="text-4xl">⚠️</div>
          <h2 className="font-serif text-2xl font-bold tracking-wide text-[#c8a270]">
            Tenancy Record Not Found
          </h2>
          <p className="text-sm text-emerald-100/80 leading-relaxed">
            We could not find any active tenancy in our database associated with your logged-in email:
            <br />
            <strong className="text-white text-base mt-2 block font-mono bg-[#041e12] py-2 px-4 rounded-lg">
              {sessionUser.email}
            </strong>
          </p>
          <p className="text-xs text-emerald-100/50">
            Please contact property management to verify that your email is correctly registered on Arthur Online.
          </p>
          <button
            onClick={() => signOut({ redirectTo: "/" })}
            className="w-full py-3 px-6 text-xs font-bold text-[#062c1a] bg-[#c8a270] hover:bg-[#b08e5c] rounded-lg transition-all shadow-md uppercase tracking-wider font-semibold cursor-pointer"
          >
            Go Back to Login
          </button>
        </div>
      </div>
    );
  }

  // ── Authenticated + tenancy found — render dashboard ─────────────────────
  const contextValue: TenantContextType = {
    tenantDetails: initialTenantDetails,
    metadata,
    sessionUser,
  };

  return (
    <TenantContext.Provider value={contextValue}>
      <div className="flex bg-slate-50 h-screen overflow-hidden text-slate-800 font-sans relative">
        {/* Backdrop overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-slate-900/40 z-30 lg:hidden backdrop-blur-xs transition-opacity"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — always visible on desktop, toggled on mobile */}
        <div className="hidden lg:block">
          <TenantSidebar />
        </div>

        {sidebarOpen && (
          <div className="fixed inset-y-0 left-0 z-40 lg:hidden">
            <TenantSidebar onClose={() => setSidebarOpen(false)} />
          </div>
        )}

        {/* Main layout area */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
          <TenantNavbar />

          {/* Mobile sidebar toggle */}
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

          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </TenantContext.Provider>
  );
}
