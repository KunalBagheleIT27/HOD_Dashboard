"use client";

import { useMemo } from "react";
import MainLayout from "@/layouts/MainLayout";
import StatCard from "@/components/ui/StatCard";
import QuickActions from "@/components/ui/QuickActions";
import PendingApprovals from "@/components/ui/PendingApprovals";
import DepartmentCalendar from "@/components/ui/DepartmentCalendar";
import DepartmentPerformance from "@/components/ui/DepartmentPerformance";
import WelcomeSection from "@/components/ui/WelcomeSection";

import {
  getDashboardData,
  currentUser,
} from "@/data/dummyData";

import { useAcademicContext } from "@/contexts/AcademicContext";

export default function HomePage() {
  const { academicYear, semester } = useAcademicContext();

  const { dashboardStats } = useMemo(
    () => getDashboardData(academicYear, semester),
    [academicYear, semester]
  );

  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100 pt-14 sm:pt-16 md:pt-20 pb-8">

        {/* Welcome Section */}
        <div className="px-2 sm:px-3 md:px-4 mb-2 sm:mb-3 md:mb-4">
          <WelcomeSection
            userName={currentUser.name}
          />
        </div>

        {/* Stats + Module Selector */}
        <div className="px-2 sm:px-3 md:px-4 mb-2 sm:mb-3 md:mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-2.5">
            {dashboardStats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                change={stat.change}
                iconColor={stat.iconColor}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="px-2 sm:px-3 md:px-4 pb-2 sm:pb-3 md:pb-4">

          {/* Quick Actions + Pending Approvals */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-2.5 mb-2 sm:mb-2.5">
            <QuickActions />
            <div className="lg:col-span-2 h-full">
              <PendingApprovals />
            </div>
          </div>

          {/* Department Calendar + Performance Analytics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-2.5">
            <div className="h-full min-h-[350px] sm:min-h-[400px]">
              <DepartmentCalendar />
            </div>
            <div className="h-full min-h-[350px] sm:min-h-[400px]">
              <DepartmentPerformance />
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  );
}
