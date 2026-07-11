"use client";

import React, { useState, useEffect } from "react";
import { api } from "~/trpc/react";
import { toast } from "sonner";

export default function ProfilePage() {
  const {
    data: dbProfile,
    refetch,
    isLoading,
  } = api.profile.getProfile.useQuery();
  const updateProfile = api.profile.updateProfile.useMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [avatarInitials, setAvatarInitials] = useState("");

  // Change Password State
  const changePasswordMutation = api.profile.changePassword.useMutation();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  // Sync state when database profile is fetched
  useEffect(() => {
    if (dbProfile) {
      setName(dbProfile.name);
      setEmail(dbProfile.email);
      setPhone(dbProfile.phone);
      setRole(dbProfile.role);

      const initials = dbProfile.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
      setAvatarInitials(initials || "SA");
    }
  }, [dbProfile]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateProfile.mutateAsync({
        name,
        email,
        phone,
        role,
      });

      // Synchronize with localStorage for backwards-compatible local event-based updates
      if (typeof window !== "undefined") {
        localStorage.setItem("admin_name", name);
        localStorage.setItem("admin_email", email);
        localStorage.setItem("admin_phone", phone);
        localStorage.setItem("admin_role", role);
        window.dispatchEvent(new Event("admin_profile_updated"));
      }

      const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
      setAvatarInitials(initials || "SA");

      toast.success(
        "Changes successfully saved and synced to the secure server database!",
      );
      await refetch();
    } catch (err) {
      console.error("Failed to save profile:", err);
      toast.error("Failed to save profile changes.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#062c1a] border-t-transparent"></div>
        <p className="animate-pulse text-sm font-bold tracking-wider text-slate-500 uppercase">
          Loading Profile...
        </p>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in mx-auto w-full space-y-8 pb-12 duration-300">
      {/* Page Title */}
      <div>
        <h1 className="font-serif text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
          Account Profile
        </h1>
        <p className="mt-1 text-sm text-slate-500 sm:text-base">
          Manage your administrator account credentials, credentials security,
          and system preferences.
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

            <h2 className="text-xl font-bold text-slate-800">{name}</h2>
            <p className="mt-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
              {role}
            </p>

            <div className="my-6 w-full space-y-3 border-t border-slate-100 pt-4 text-left text-sm text-slate-600">
              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Email Address
                </span>
                <span className="font-semibold text-slate-800">{email}</span>
              </div>
              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Access Scope
                </span>
                <span className="font-semibold text-slate-800">
                  All The Yards (A, J, L)
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Account Status
                </span>
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Verified Admin
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats/Metadata info */}
          <div className="rounded-2xl border border-[#0d4d2d] bg-gradient-to-br from-[#062c1a] to-[#041e12] p-6 text-white shadow-xs">
            <h3 className="mb-3 font-serif text-base font-bold tracking-wider text-[#c8a270] uppercase">
              Portfolio Mapping
            </h3>
            <p className="text-xs leading-relaxed text-emerald-100/70">
              Your profile is currently linked with the Arthur Online API
              integration mapping. All edits dynamically sync to property
              ledgers for:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2 text-xs font-semibold text-emerald-50/90">
              <li>Ashford Yard (A01 - A20)</li>
              <li>Jevington Yard (J01 - J08)</li>
              <li>Longstone Yard (L01 - L06)</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Detailed Form Settings */}
        <div className="space-y-6 md:col-span-2">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xs">
            <h3 className="mb-6 border-b border-slate-100 pb-4 text-xl font-bold text-slate-800">
              Profile Settings
            </h3>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Display Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Role Title
                  </label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold tracking-wider text-slate-400 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-xs transition-all focus:ring-2 focus:ring-[#062c1a] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    if (dbProfile) {
                      setName(dbProfile.name);
                      setEmail(dbProfile.email);
                      setPhone(dbProfile.phone);
                      setRole(dbProfile.role);
                      const initials = dbProfile.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2);
                      setAvatarInitials(initials || "SA");
                      toast.info("Profile reset to saved database values.");
                    }
                  }}
                  className="cursor-pointer rounded-xl border border-slate-200 px-5 py-2.5 text-xs font-bold tracking-wider text-slate-700 uppercase transition-all hover:bg-slate-50"
                >
                  Reset Defaults
                </button>
                <button
                  type="submit"
                  disabled={updateProfile.isPending}
                  className="cursor-pointer rounded-xl bg-[#062c1a] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-[#0c472c] disabled:opacity-50"
                >
                  {updateProfile.isPending
                    ? "Saving Changes..."
                    : "Save Profile Details"}
                </button>
              </div>
            </form>
          </div>

          {/* Security & System Info Details block */}
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
                  placeholder="Enter your current password"
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
                  placeholder="Confirm your new password"
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
