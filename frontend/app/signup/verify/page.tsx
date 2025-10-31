"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function VerifyOTP() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const [otp, setOtp] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();

    // Normally you'd send this OTP to backend for verification
    if (otp === "1234") {
      router.push(`/dashboard/${role}`);
    } else {
      alert("Invalid OTP, try again!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
        <h2 className="mb-4 text-3xl font-bold text-green-700">
          Verify Your Phone
        </h2>
        <p className="mb-6 text-gray-600">
          Enter the 4-digit code we sent to your phone.
        </p>

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            maxLength={4}
            placeholder="Enter OTP"
            className="w-full rounded-lg border p-3 text-center text-xl tracking-widest focus:border-green-600 focus:outline-none"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Verify
          </button>
        </form>

        <p className="mt-4 text-gray-500">Didn’t receive it? <a href="#" className="text-green-600 hover:underline">Resend</a></p>
      </div>
    </div>
  );
}
