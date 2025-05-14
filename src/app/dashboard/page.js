"use client";

import { StatsGrid } from "@/app/dashboard/components/StatsGrid";
import { TokensSection } from "@/app/dashboard/components/TokensSection";
import { ActivitySection } from "@/app/dashboard/components/ActivitySection";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white p-6 pt-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <StatsGrid />
      <TokensSection />
      <ActivitySection />
    </div>
  );
}
