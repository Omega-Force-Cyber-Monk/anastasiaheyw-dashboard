import React from "react";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import TenantClientLayout from "./TenantClientLayout";

export default async function TenantLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  if (session.user?.role === "admin") {
    redirect("/admin/dashboard");
  }

  return <TenantClientLayout>{children}</TenantClientLayout>;
}
