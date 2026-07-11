"use client";

import React, { useState, useEffect } from "react";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export default function TenantProfilePage() {
  const { tenantDetails, sessionUser } = useTenant();
  const changePasswordMutation = api.profile.changePassword.useMutation();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatarInitials, setAvatarInitials] = useState("");

  useEffect(() => {
    if (tenantDetails && tenantDetails.tenants.length > 0) {
      const primaryTenant = tenantDetails.tenants[0] ?? "Tenant";
      const initials = primaryTenant
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
      setAvatarInitials(initials || "T");
    } else {
      setAvatarInitials("T");
    }
  }, [tenantDetails]);

  const handleChangePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      toast.error("New password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await changePasswordMutation.mutateAsync({
        currentPassword,
        newPassword,
      });

      if (response.success) {
        toast.success(response.message ?? "Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        toast.error("Failed to update password.");
      }
    } catch (err) {
      console.error("Change password error:", err);
      const errMsg = err instanceof Error ? err.message : "An unexpected error occurred.";
      toast.error(errMsg);
    }
  };

  return (
    <div className="animate-in fade-in mx-auto w-full space-y-8 pb-12 duration-300">
      {/* Page Title */}
      <div>
        <h1 className="font-serif text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
          My Account Profile
        </h1>
        <p className="mt-1 text-sm text-slate-500 sm:text-base">
          Manage your personal details, credentials security, and tenancy credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Left Column - Card Overview */}
        <div className="space-y-6 md:col-span-1">
          <div className="flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-xs">
            {/* Avatar Badge */}
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#c8a270] bg-[#062c1a] text-3xl font-bold text-white shadow-md select-none">
              {avatarInitials}
            </div>

            <h2 className="text-xl font-bold text-slate-800">{tenantDetails.tenants.join(" & ")}</h2>
            <p className="mt-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              Tenant (Unit {tenantDetails.unit})
            </p>

            <div className="my-6 w-full space-y-3 border-t border-slate-100 pt-4 text-left text-sm text-slate-600">
              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Email Address
                </span>
                <span className="font-semibold text-slate-800 break-all">
                  {sessionUser.email}
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Phone Number
                </span>
                <span className="font-semibold text-slate-800">
                  {tenantDetails.phone.join(", ") || "—"}
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Access Status
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Tenancy
                </span>
              </div>
            </div>
          </div>

          {/* Tenancy Block Info */}
          <div className="rounded-2xl border border-[#0d4d2d] bg-gradient-to-br from-[#062c1a] to-[#041e12] p-6 text-white shadow-xs">
            <h3 className="mb-3 font-serif text-base font-bold tracking-wider text-[#c8a270] uppercase">
              Tenancy Details
            </h3>
            <div className="space-y-3 text-xs leading-relaxed text-emerald-100/80">
              <div>
                <span className="block text-[10px] text-[#c8a270] uppercase font-bold">Property Address</span>
                <span className="font-semibold text-white">{tenantDetails.address}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#c8a270] uppercase font-bold">Letting Type</span>
                <span className="font-semibold text-white">{tenantDetails.lettingType}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#c8a270] uppercase font-bold">Lease Start</span>
                <span className="font-semibold text-white">{tenantDetails.startDate}</span>
              </div>
              <div>
                <span className="block text-[10px] text-[#c8a270] uppercase font-bold">Monthly Rent</span>
                <span className="font-semibold text-[#c8a270] text-sm">{tenantDetails.rent}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Form Settings & Credentials Form */}
        <div className="space-y-6 md:col-span-2">
          {/* Tenant Contact Information View */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xs">
            <h3 className="mb-6 border-b border-slate-100 pb-4 text-xl font-bold text-slate-800">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Full Name
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-800">
                  {tenantDetails.tenants.join(" & ")}
                </span>
              </div>

              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Letting Unit
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-800">
                  Flat {tenantDetails.unit}
                </span>
              </div>

              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Registered Email
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-800">
                  {sessionUser.email}
                </span>
              </div>

              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Registered Phone
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-800">
                  {tenantDetails.phone.join(", ") || "—"}
                </span>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-50 pt-4">
              <p className="text-xs text-slate-400 leading-relaxed">
                ℹ️ Contact details and tenancy parameters are dynamically synchronized from Arthur Online. 
                To request any updates to your personal records, please reach out to property management.
              </p>
            </div>
          </div>

          {/* Change Password Form */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xs">
            <h3 className="mb-4 border-b border-slate-100 pb-4 text-xl font-bold text-slate-800">
              Change Password
            </h3>

            <form onSubmit={handleChangePasswordSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Current Password
                </label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password (e.g. tenant123)"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Minimum 6 characters"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                />
              </div>

              <div className="flex justify-end pt-3">
                <button
                  type="submit"
                  disabled={changePasswordMutation.isPending}
                  className="cursor-pointer rounded-xl bg-[#062c1a] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-[#0c472c] disabled:opacity-50 flex items-center gap-2"
                >
                  {changePasswordMutation.isPending ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Updating...
                    </>
                  ) : (
                    "Update Password"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
