"use client";
import { Tractor, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white text-center px-6">
      <div className="flex flex-col items-center gap-6">
        {/* Icon */}
        <div className="bg-green-100 p-6 rounded-full shadow-sm">
          <Tractor className="text-green-600 w-16 h-16" />
        </div>

        {/* Text */}
        <h1 className="text-5xl font-bold text-green-700">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">
          Oops! Page not found.
        </h2>
        <p className="max-w-md text-gray-500">
          Looks like you took a wrong turn on the farm! The page you’re looking
          for doesn’t exist or may have been moved.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push("/")}
          className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      {/* Footer touch */}
      <p className="mt-16 text-sm text-gray-400">
        © {new Date().getFullYear()} AgriHire. Growing connections.
      </p>
    </section>
  );
}