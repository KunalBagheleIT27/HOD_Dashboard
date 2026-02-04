"use client";

import React from "react";
import Link from "next/link";
import { FileText, Users, CheckSquare, Calendar } from "lucide-react";

interface QuickAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  bgColor: string;
  textColor: string;
  iconColor: string;
}

const QuickActions: React.FC = () => {
  const actions: QuickAction[] = [
    {
      id: "teaching-plans",
      label: "Approve Teaching Plans",
      icon: <FileText size={20} />,
      href: "/teaching/plan",
      bgColor: "bg-blue-100",
      textColor: "text-blue-700",
      iconColor: "text-blue-700",
    },
    {
      id: "assign-lecturers",
      label: "Assign Lecturers to Modules",
      icon: <Users size={20} />,
      href: "/teaching/modules",
      bgColor: "bg-green-100",
      textColor: "text-green-700",
      iconColor: "text-green-700",
    },
    {
      id: "approve-grades",
      label: "Approve Grades",
      icon: <CheckSquare size={20} />,
      href: "/students/class-lists",
      bgColor: "bg-orange-100",
      textColor: "text-orange-700",
      iconColor: "text-orange-700",
    },
    {
      id: "approve-leave",
      label: "Approve Staff Leave Requests",
      icon: <Calendar size={20} />,
      href: "/students/leave-management",
      bgColor: "bg-pink-100",
      textColor: "text-pink-700",
      iconColor: "text-pink-700",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm h-full flex flex-col">
      <div className="mb-3 sm:mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Quick Actions</h2>
      </div>

      <div className="space-y-2 sm:space-y-3 flex flex-col">
        {actions.map((action) => {
          return (
            <Link key={action.id} href={action.href} className="block">
              <div
                role="button"
                tabIndex={0}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg ${action.bgColor} border border-gray-200 hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 group`}
              >
                <div className={`flex-shrink-0 ${action.iconColor} group-hover:text-gray-900`}>
                  <span className="[&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-5 sm:[&>svg]:w-5">{action.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-sm sm:text-base ${action.textColor} group-hover:text-gray-900`}>
                    {action.label}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;


