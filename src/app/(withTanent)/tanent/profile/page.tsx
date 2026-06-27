"use client";

import React from "react";

export default function TenantProfilePage() {
  const user = {
    name: "Alex Rivera",
    email: "alex.rivera@alltheyards.com",
    phone: "+44 7911 123456",
    rent: "£950.00 / month",
    deposit: "£1,425.00 (Held in Custodial TDS)",
    leaseStart: "January 01, 2026",
    leaseEnd: "December 31, 2026",
    address: "Ashford Yard, Unit 4B, Eastbourne, BN21 1DP",
    emergencyContact: "Maria Rivera (Mother) - +44 7911 777888",
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 md:px-0">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">My Profile</h1>
        <p className="text-slate-500 mt-1">Review your personal details and tenancy information.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Personal Details */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm md:col-span-2 space-y-6">
          <h3 className="text-base font-bold text-slate-800 border-b border-slate-50 pb-3 mb-4">
            Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Full Name</span>
              <span className="text-sm font-bold text-slate-700 mt-1 block">{user.name}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Email Address</span>
              <span className="text-sm font-bold text-slate-700 mt-1 block">{user.email}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Phone Number</span>
              <span className="text-sm font-bold text-slate-700 mt-1 block">{user.phone}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Emergency Contact</span>
              <span className="text-sm font-bold text-slate-700 mt-1 block">{user.emergencyContact}</span>
            </div>
          </div>
        </div>

        {/* Tenancy & Lease details */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm md:col-span-1 space-y-6">
          <h3 className="text-base font-bold text-slate-800 border-b border-slate-50 pb-3 mb-4">
            Lease Summary
          </h3>
          <div className="space-y-4">
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Address</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">{user.address}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Rent Amount</span>
              <span className="text-sm font-bold text-slate-700 mt-1 block">{user.rent}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Security Deposit</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">{user.deposit}</span>
            </div>
            <div>
              <span className="block text-[10px] text-slate-400 uppercase font-semibold">Lease Term</span>
              <span className="text-xs font-bold text-slate-700 mt-1 block">
                {user.leaseStart} - {user.leaseEnd}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
