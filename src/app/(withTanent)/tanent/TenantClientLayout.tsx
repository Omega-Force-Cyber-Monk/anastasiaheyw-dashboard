"use client";

import React, { useState, createContext, useContext, useMemo, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TenantSidebar } from "~/app/_components/tanent/TenantSidebar";
import { TenantNavbar } from "~/app/_components/tanent/TenantNavbar";
import { api } from "~/trpc/react";
import { getUnitMetadata, type UnitMetadata } from "~/server/arthur/tenantDataMap";

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

export interface TenantContextType {
  tenantDetails: TenantDetailsType;
  metadata: UnitMetadata;
  isLoading: boolean;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export function useTenant() {
  const context = useContext(TenantContext);
  if (!context) {
    throw new Error("useTenant must be used within a TenantLayout");
  }
  return context;
}

export default function TenantClientLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to home if unauthenticated on client
  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [status, router]);

  const { data: dbData, isLoading: dbLoading } = api.arthur.getTenancies.useQuery(undefined, {
    enabled: status === "authenticated",
  });

  // Dynamic tenant matching based on authenticated session email
  const tenantDetails = useMemo<TenantDetailsType | null>(() => {
    console.log("Tenant matching debug:", {
      status,
      sessionEmail: session?.user?.email,
      hasDbData: !!dbData?.tenancies,
      tenanciesCount: dbData?.tenancies?.length,
    });

    if (!dbData?.tenancies || !session?.user?.email) {
      return null;
    }

    const email = session.user.email.toLowerCase();
    console.log("Target email for matching:", email);

    // 1. Try to find precise tenancy record matching logged-in user email
    const found = dbData.tenancies.find((t) => {
      const match = t.email.some((e) => e.trim().toLowerCase() === email.trim());
      console.log(`Checking unit ${t.unit} emails:`, t.email, `Match: ${match}`);
      return match;
    });

    console.log("Found tenancy record in DB:", found);

    if (found) {
      return found;
    }

    // 2. If it's a fallback demo tenant, return the first available tenancy record
    if (email.startsWith("tenant") && dbData.tenancies.length > 0) {
      return dbData.tenancies[0] as TenantDetailsType;
    }

    return null;
  }, [dbData, session, status]);

  // Resolve metadata dynamically based on matched unit
  const metadata = useMemo<UnitMetadata | null>(() => {
    if (!tenantDetails) return null;
    return getUnitMetadata(tenantDetails.unit);
  }, [tenantDetails]);

  // Show a premium glassmorphic loading screen during loading phase
  if (status === "loading" || (status === "authenticated" && !dbData)) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#062c1a] text-white">
        <div className="text-center space-y-4">
          <div className="relative w-16 h-16 mx-auto">
            <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 animate-pulse" />
            <div className="absolute inset-0 rounded-full border-t-4 border-l-4 border-t-[#c8a270] border-l-[#c8a270] animate-spin" />
          </div>
          <p className="font-serif text-lg font-bold tracking-wide text-[#c8a270]">Loading Tenancy Dashboard...</p>
          <p className="text-xs text-emerald-100/50">Verifying secure credentials & Arthur Online feed</p>
        </div>
      </div>
    );
  }

  // If no tenancy matches, show a dynamic error message
  if (status === "authenticated" && !tenantDetails) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[#062c1a] text-white">
        <div className="text-center space-y-6 max-w-lg p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-emerald-500/25 shadow-xl">
          <div className="text-4xl">⚠️</div>
          <h2 className="font-serif text-2xl font-bold tracking-wide text-[#c8a270]">Tenancy Record Not Found</h2>
          <p className="text-sm text-emerald-100/80 leading-relaxed">
            We could not find any active tenancy in our database associated with your logged-in email:<br />
            <strong className="text-white text-base mt-2 block font-mono bg-[#041e12] py-2 px-4 rounded-lg">{session?.user?.email}</strong>
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

  // This will never be hit, but keeps typescript happy
  if (!tenantDetails || !metadata) {
    return null;
  }

  const contextValue: TenantContextType = {
    tenantDetails,
    metadata,
    isLoading: dbLoading,
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
    </TenantContext.Provider>
  );
}
