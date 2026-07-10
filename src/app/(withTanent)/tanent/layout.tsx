import React from "react";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import { db } from "~/server/db";
import TenantClientLayout from "./TenantClientLayout";
import type { TenantDetailsType } from "./TenantClientLayout";

export default async function TenantLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  if (session.user?.role === "admin") {
    redirect("/admin/dashboard");
  }

  // Fetch all tenancies from DB on the server
  // This is the correct pattern: data fetching in Server Components, not Client Components
  const dbTenancies = await db.arthurTenancy.findMany({
    include: {
      unit: {
        include: {
          property: true,
        },
      },
    },
    orderBy: { id: "asc" },
  });

  // Map DB records to the shape TenantClientLayout expects
  const tenancies: TenantDetailsType[] = dbTenancies.map((t) => {
    let address = t.address ?? t.unit.property.address;
    if (!t.address && t.unit.name) {
      address = `${t.unit.name}, ${address}`;
    }
    return {
      id: t.id,
      unit: t.unit.name ?? "Unit",
      rent: t.rent,
      rentVal: t.rentVal,
      deposit: t.deposit,
      depositVal: t.depositVal,
      lodged: t.lodged ?? "—",
      received: t.received ?? "—",
      tenants: t.tenants,
      phone: t.phone,
      email: t.email,
      startDate: t.startDate ?? "—",
      endDate: t.endDate ?? "—",
      status: t.status,
      lettingType: t.lettingType,
      rentStatus: t.rentStatus,
      commentary: t.commentary,
      address: address ?? "",
      code: t.code ?? "",
      property: t.unit.property.name,
    };
  });

  // Find the matching tenancy for this user's email
  const userEmail = session.user.email?.toLowerCase() ?? "";
  let tenantDetails: TenantDetailsType | null =
    tenancies.find((t) =>
      t.email.some((e) => e.trim().toLowerCase() === userEmail)
    ) ?? null;

  // Fallback: if email starts with "tenant", use the first record
  if (!tenantDetails && userEmail.startsWith("tenant") && tenancies.length > 0) {
    tenantDetails = tenancies[0] ?? null;
  }

  return (
    <TenantClientLayout
      initialTenantDetails={tenantDetails}
      sessionUser={{
        id: session.user.id ?? "",
        name: session.user.name ?? "",
        email: session.user.email ?? "",
        role: session.user.role ?? "tenant",
      }}
    >
      {children}
    </TenantClientLayout>
  );
}
