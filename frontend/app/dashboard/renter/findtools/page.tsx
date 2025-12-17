"use client";

import { useState } from "react";
import { Search, MapPin, Filter } from "lucide-react";

export default function FindToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Tractors",
    "Harvesters",
    "Irrigation",
    "Soil Prep",
    "Transport",
  ];

  return (
    <div className="p-4 md:p-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Find Tools</h1>

      {/* Search + Filter Row */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex items-center gap-2 w-full px-4 py-3 bg-white rounded-lg shadow-sm">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search equipment..."
            className="w-full outline-none"
          />
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white shadow-sm rounded-lg border">
          <Filter className="h-5 w-5" />
          Filters
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm border ${
              selectedCategory === cat
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Map Placeholder */}
      <div className="w-full h-48 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
        <MapPin className="h-8 w-8 text-gray-500" />
        <span className="ml-2 text-gray-600">Map coming soon...</span>
      </div>

      {/* Tool Results */}
      <h2 className="text-lg font-semibold mb-3">Available Tools</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-4 border hover:shadow-md transition"
          >
            <div className="h-32 bg-gray-300 rounded-lg mb-3" />
            <h3 className="font-semibold">Tractor Model {i}</h3>
            <p className="text-sm text-gray-500">Kericho, Kenya</p>
            <p className="text-green-700 font-bold mt-2">$120/day</p>

            <button className="mt-3 w-full py-2 bg-green-600 text-white rounded-lg">
              Rent Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
