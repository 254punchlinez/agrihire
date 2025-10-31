"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tractor } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Mock user data
  const mockUsers = [
    { phone: "0700000001", password: "owner123", role: "owner" },
    { phone: "0700000002", password: "renter123", role: "renter" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const user = mockUsers.find(
      (u) => u.phone === phone && u.password === password
    );

    if (user) {
      // Save mock session
      localStorage.setItem("agrihireUser", JSON.stringify(user));

      // Redirect to correct dashboard
      if (user.role === "owner") router.push("/dashboard/owner");
      else router.push("/dashboard/renter");
    } else {
      setError("Invalid phone number or password");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 mt-7">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Tractor className="w-12 h-12 text-green-600" />
        </div>
        <h1 className="text-2xl font-semibold text-green-700 mb-2">Welcome Back</h1>
        <p className="text-gray-500 mb-6">Log in to manage your tools and bookings</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="mt-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-medium"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-600 font-medium hover:underline">
            Create one
          </a>
        </p>
      </div>
    </section>
  );
}
