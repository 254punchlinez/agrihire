"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function RenterDashboardLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 ml-0 md:ml-64">
        {children}
      </main>
    </div>
  );
}
