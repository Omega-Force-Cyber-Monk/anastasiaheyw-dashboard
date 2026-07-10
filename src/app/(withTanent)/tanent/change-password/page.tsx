"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useTenant } from "~/app/(withTanent)/tanent/TenantClientLayout";

export default function TenantChangePasswordPage() {
  const { tenantDetails } = useTenant();
  const changePasswordMutation = api.profile.changePassword.useMutation();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
    <div className="animate-in fade-in space-y-6 duration-300 max-w-2xl mx-auto">
      {/* Premium Header Banner */}
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#062c1a] to-[#041e12] p-8 text-white shadow-xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,162,112,0.15),transparent_65%)] pointer-events-none" />
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-[#e2e8f0]/15 text-xs font-semibold text-[#c8a270]">
            <span className="h-2 w-2 rounded-full bg-[#c8a270] animate-pulse"></span>
            SECURITY PREFERENCES
          </div>
          <h1 className="font-serif text-3xl font-bold tracking-tight">
            Security & <span className="text-[#c8a270]">Credentials</span>
          </h1>
          <p className="text-sm text-emerald-100/70 font-medium">
            Update your account password for unit: <strong className="text-white font-mono">{tenantDetails.unit}</strong>
          </p>
        </div>
      </div>

      {/* Change Password Card */}
      <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 md:p-8 shadow-sm space-y-6">
        <div className="border-b border-[#e2e8f0] pb-4">
          <h3 className="font-serif text-lg font-bold text-slate-900">Change Password</h3>
          <p className="text-xs text-slate-500">
            Ensure your account uses a unique, strong password to protect your tenancy records.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Current Password */}
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
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:border-transparent focus:outline-none"
            />
          </div>

          {/* New Password */}
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
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:border-transparent focus:outline-none"
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
              Confirm New Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-type your new password"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:border-transparent focus:outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={() => {
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
                toast.info("Form fields cleared.");
              }}
              className="cursor-pointer rounded-xl border border-slate-200 px-5 py-3 text-xs font-bold tracking-wider text-slate-700 uppercase transition-all hover:bg-slate-50"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={changePasswordMutation.isPending}
              className="cursor-pointer rounded-xl bg-[#062c1a] hover:bg-[#0c472c] text-[#c8a270] hover:text-white px-6 py-3 text-xs font-bold tracking-wider uppercase shadow-md transition-all disabled:opacity-50 flex items-center gap-2"
            >
              {changePasswordMutation.isPending ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#c8a270] border-t-transparent"></div>
                  Updating...
                </>
              ) : (
                "Update Password"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Security Tip Banner */}
      <div className="rounded-xl border border-amber-100 bg-amber-50/70 p-5 flex gap-4">
        <div className="text-xl">💡</div>
        <div className="text-xs text-amber-900 leading-relaxed">
          <p className="font-bold">Important Security Note:</p>
          <p className="mt-1">
            Setting a custom password will link your email securely to our local credentials database. 
            The next time you log in, you will be required to use this new password instead of the default tenant credentials.
          </p>
        </div>
      </div>
    </div>
  );
}