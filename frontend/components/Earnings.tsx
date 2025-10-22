"use client";
import React from "react";
import { ArrowRight, Wrench } from "lucide-react";

export default function OwnerHeroSection() {
  const handleStartEarning = () => {
    console.log("Navigate to list equipment page");
  };

  const handleLearnMore = () => {
    console.log("Navigate to learn more page");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-400 via-green-200 to-green-300 flex items-center justify-center px-8 py-20">
      <div className="max-w-5xl text-left">
        {/* Icon */}
<div className="mb-8 flex justify-center">
  <div className="bg-green-400/30 rounded-full p-6 backdrop-blur-sm flex justify-center items-center shadow-lg">
    <Wrench className="w-12 h-12 text-yellow-400" />
  </div>
</div>


        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Have Equipment Sitting Idle?
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed">
          Turn your unused farm equipment into a revenue stream. List your tools
          and connect with farmers in your community who need them.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button
            onClick={handleStartEarning}
            className="bg-white text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            Start Earning Today
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleLearnMore}
            className="border-2 border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/60 transition-all duration-200 backdrop-blur-sm"
          >
            Learn More
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Booking Rate */}
          <div className="text-left transform hover:scale-105 transition-transform duration-200">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
              95%
            </div>
            <div className="text-lg text-white/80 font-medium">Booking Rate</div>
          </div>

          {/* Average Earnings */}
          <div className="text-left transform hover:scale-105 transition-transform duration-200">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
              Ksh.10K+
            </div>
            <div className="text-lg text-white/80 font-medium">
              Avg. Annual Earnings
            </div>
          </div>

          {/* Owner Rating */}
          <div className="text-left transform hover:scale-105 transition-transform duration-200">
            <div className="text-5xl md:text-6xl font-bold text-white mb-2">
              4.9★
            </div>
            <div className="text-lg text-white/80 font-medium">Owner Rating</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm mb-4">
            Trusted by farmers across the Midwest
          </p>
          <div className="flex flex-wrap items-center gap-6 opacity-80 text-white/80">
            <div className="font-semibold">500+ Equipment Owners</div>
            <div className="w-1 h-1 bg-white/50 rounded-full" />
            <div className="font-semibold">2,000+ Successful Rentals</div>
            <div className="w-1 h-1 bg-white/50 rounded-full" />
            <div className="font-semibold">Ksh.2M+ Earned</div>
          </div>
        </div>
      </div>
    </div>
  );
}
