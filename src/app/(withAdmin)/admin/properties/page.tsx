"use client";

import React, { useState } from "react";

export default function PropertiesPage() {
  const [filter, setFilter] = useState("All");

  const properties = [
    {
      id: 1,
      name: "Ashford Yard",
      location: "Eastbourne, BN21 1DP",
      rent: "£950 / month",
      beds: "2 Bed",
      baths: "1 Bath",
      type: "Apartment",
      status: "Occupied",
      tenant: "Alex Rivera",
      landlord: "Landlord A",
      image: "🏠",
    },
    {
      id: 2,
      name: "Repton House",
      location: "Eastbourne, BN21 2QX",
      rent: "£800 / month",
      beds: "1 Bed",
      baths: "1 Bath",
      type: "Apartment",
      status: "Occupied",
      tenant: "Jordan Patel",
      landlord: "Landlord B",
      image: "🏢",
    },
    {
      id: 3,
      name: "Trinity Place",
      location: "Eastbourne, BN21 3HL",
      rent: "£1,100 / month",
      beds: "2 Bed",
      baths: "1 Bath",
      type: "Apartment",
      status: "Vacant",
      tenant: "None",
      landlord: "Landlord C",
      image: "🏡",
    },
    {
      id: 4,
      name: "Ashford Yard, Unit 1A",
      location: "Eastbourne, BN21 1DP",
      rent: "£950 / month",
      beds: "2 Bed",
      baths: "1 Bath",
      type: "Apartment",
      status: "Occupied",
      tenant: "Marcus Brody",
      landlord: "Landlord A",
      image: "🏠",
    },
  ];

  const filteredProperties =
    filter === "All"
      ? properties
      : properties.filter((p) => p.status === filter);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">Properties</h1>
          <p className="text-slate-500 mt-1">Manage and monitor All The Yards real estate listings.</p>
        </div>
        <button className="px-4 py-2.5 bg-[#062c1a] hover:bg-[#0c472c] text-white rounded-lg text-sm font-semibold transition-all shadow-sm cursor-pointer">
          Add Property
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-px">
        {["All", "Occupied", "Vacant"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              filter === tab
                ? "border-[#062c1a] text-[#062c1a]"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            {/* Aspect Ratio Container for visual mock image */}
            <div className="aspect-video bg-gradient-to-br from-[#062c1a]/5 to-[#c8a270]/10 flex items-center justify-center text-5xl relative border-b border-slate-50">
              {p.image}
              <span
                className={`absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-xs ${
                  p.status === "Occupied"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700"
                }`}
              >
                {p.status}
              </span>
            </div>

            {/* Property details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-800">{p.name}</h3>
                  <span className="text-sm font-bold text-[#062c1a]">{p.rent}</span>
                </div>
                <p className="text-xs text-slate-400 mt-1">{p.location}</p>

                {/* Specs */}
                <div className="flex items-center gap-4 mt-4 py-3 border-y border-slate-50 text-slate-500 text-xs font-medium">
                  <span className="flex items-center gap-1">🛏️ {p.beds}</span>
                  <span className="flex items-center gap-1">🚿 {p.baths}</span>
                  <span className="flex items-center gap-1">🏢 {p.type}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Tenant</span>
                  <span className="font-semibold text-slate-700">{p.tenant}</span>
                </div>
                <div className="text-right">
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Owner</span>
                  <span className="font-semibold text-[#c8a270]">{p.landlord}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
