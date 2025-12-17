"use client";

import { Heart, Calendar, User } from "lucide-react";

export default function SavedToolsPage() {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Saved Tools</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Image */}
            <div className="h-40 bg-gray-300 relative">
              <button className="absolute top-3 right-3 bg-white p-1 rounded-full shadow">
                <Heart className="h-5 w-5 text-red-500" />
              </button>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="font-semibold text-lg">Tractor Model {i}</h3>
              <p className="text-gray-500 text-sm mb-3">Nakuru, Kenya</p>

              {/* Availability Calendar Preview */}
              <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                <Calendar className="h-4 w-4" />
                <span>Availability: 12–18 Dec</span>
              </div>

              {/* Owner Info */}
              <div className="flex items-center gap-3 mt-4">
                <div className="h-9 w-9 rounded-full bg-gray-300" />
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <User className="h-3 w-3" /> Verified Owner
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
