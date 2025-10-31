"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage(){
  const router =useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    router.push("/signup/role"); //Next step: chose role
  }
return (
    <div className="flex min-h-screen items-center justify-center bg-green-50 mt-8" >
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-green-700">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border p-3 focus:border-green-600 focus:outline-none"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3 focus:border-green-600 focus:outline-none"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-lg border p-3 focus:border-green-600 focus:outline-none"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3 focus:border-green-600 focus:outline-none"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Continue
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-green-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}