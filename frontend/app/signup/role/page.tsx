"use client";

import { useRouter } from "next/navigation";

export default function ChooseRole() {
  const router = useRouter();

  const handleRoleSelect = (role: "owner" | "renter") => {
    router.push(`/signup/verify?role=${role}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg text-center">
        <h2 className="mb-4 text-3xl font-bold text-green-700">
          Choose Your Role
        </h2>
        <p className="mb-6 text-gray-600">
          Are you listing your tools or hiring equipment?
        </p>

        <div className="space-y-4">
          <button
            onClick={() => handleRoleSelect("owner")}
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
          >
            I’m a Tool Owner
          </button>

          <button
            onClick={() => handleRoleSelect("renter")}
            className="w-full rounded-lg bg-yellow-500 py-3 font-semibold text-white hover:bg-yellow-600"
          >
            I’m a Tool Renter
          </button>
        </div>
      </div>
    </div>
  );
}
