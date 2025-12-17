"use client";

import { useState } from "react";

export default function BookingsPage() {
  const tabs = ["Active", "Pending", "Completed"];
  const [activeTab, setActiveTab] = useState("Active");

  return (
    <div className="p-4 md:p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-lg ${
              activeTab === tab
                ? "text-green-600 font-semibold border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* List of Bookings */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow-sm border flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">Tractor Hire #{i}</h3>
              <p className="text-sm text-gray-500">Dec 10 – Dec 12</p>
            </div>

            <div className="text-right">
              {activeTab === "Active" && (
                <span className="text-green-600 font-bold">Ongoing</span>
              )}
              {activeTab === "Pending" && (
                <span className="text-yellow-500 font-bold">Awaiting Approval</span>
              )}
              {activeTab === "Completed" && (
                <span className="text-gray-600 font-bold">Finished</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
