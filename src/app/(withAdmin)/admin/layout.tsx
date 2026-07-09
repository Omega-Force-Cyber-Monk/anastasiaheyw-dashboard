import React from "react";
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import AdminClientLayout from "./AdminClientLayout";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  if (session.user?.role !== "admin") {
    redirect("/tanent/dashboard");
  }

  return <AdminClientLayout>{children}</AdminClientLayout>;
}