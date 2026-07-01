"use client";

import React, { useState, useEffect } from "react";
import { api } from "~/trpc/react";

export default function ProfilePage() {
  const { data: dbProfile, refetch } = api.profile.getProfile.useQuery();
  const updateProfile = api.profile.updateProfile.useMutation();

  const [name, setName] = useState("System Admin");
  const [email, setEmail] = useState("admin@alltheyards.com");
  const [phone, setPhone] = useState("+44 7902 734616");
  const [role, setRole] = useState("Global Portfolio Administrator");
  const [avatarInitials, setAvatarInitials] = useState("SA");

  const [success, setSuccess] = useState(false);

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
    setSuccess(false);

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

      setSuccess(true);
      await refetch();
    } catch (err) {
      console.error("Failed to save profile:", err);
    }
  };

  return (
    <div className="space-y-8 w-full mx-auto pb-12 animate-in fade-in duration-300">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight font-serif">Account Profile</h1>
        <p className="text-slate-500 text-sm sm:text-base mt-1">Manage your administrator account credentials, credentials security, and system preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - Card Overview */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xs text-center flex flex-col items-center">
            {/* Avatar Badge */}
            <div className="w-24 h-24 rounded-full bg-[#062c1a] text-white flex items-center justify-center text-3xl font-bold border-2 border-[#c8a270] shadow-md mb-4 select-none">
              {avatarInitials}
            </div>
            
            <h2 className="text-xl font-bold text-slate-800">{name}</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">{role}</p>

            <div className="w-full border-t border-slate-100 my-6 pt-4 space-y-3 text-left text-sm text-slate-600">
              <div>
                <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Email Address</span>
                <span className="font-semibold text-slate-800">{email}</span>
              </div>
              <div>
                <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Access Scope</span>
                <span className="font-semibold text-slate-800">All The Yards (A, J, L)</span>
              </div>
              <div>
                <span className="block text-xs text-slate-400 uppercase font-bold tracking-wider">Account Status</span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-100 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Verified Admin
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats/Metadata info */}
          <div className="bg-gradient-to-br from-[#062c1a] to-[#041e12] rounded-2xl p-6 shadow-xs border border-[#0d4d2d] text-white">
            <h3 className="text-base font-bold font-serif text-[#c8a270] uppercase tracking-wider mb-3">Portfolio Mapping</h3>
            <p className="text-xs text-emerald-100/70 leading-relaxed">
              Your profile is currently linked with the Arthur Online API integration mapping. All edits dynamically sync to property ledgers for:
            </p>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-emerald-50/90 list-disc list-inside">
              <li>Ashford Yard (A01 - A20)</li>
              <li>Jevington Yard (J01 - J08)</li>
              <li>Longstone Yard (L01 - L06)</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Detailed Form Settings */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">Profile Settings</h3>
            
            {success && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-sm font-semibold flex items-center gap-2 animate-in fade-in duration-300">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Changes successfully saved and synced to the secure server database!
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Display Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#062c1a] bg-white transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Role Title</label>
                  <input
                    type="text"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#062c1a] bg-white transition-all shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#062c1a] bg-white transition-all shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#062c1a] bg-white transition-all shadow-xs"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setName("System Admin");
                    setEmail("admin@alltheyards.com");
                    setPhone("+44 7902 734616");
                    setRole("Global Portfolio Administrator");
                    setAvatarInitials("SA");
                    setSuccess(false);
                  }}
                  className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  Reset Defaults
                </button>
                <button
                  type="submit"
                  disabled={updateProfile.isPending}
                  className="px-5 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  {updateProfile.isPending ? "Saving Changes..." : "Save Profile Details"}
                </button>
              </div>
            </form>
          </div>

          {/* Security & System Info Details block */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-xs">
            <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-4">Credentials & Security</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Passwords are authentication-managed by NextAuth using OAuth. To update authentication provider configurations, contact system operations.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-slate-50">
              <div>
                <span className="block text-sm font-bold text-slate-800">Two-Factor Authentication</span>
                <span className="block text-xs text-slate-400 mt-0.5">Enforced globally for all administration access.</span>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-full text-xs font-bold uppercase tracking-wider">
                Active & Enforced
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}