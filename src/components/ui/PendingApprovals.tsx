"use client";

import React from "react";
import Link from "next/link";

interface ApprovalItem {
  id: string;
  item: string;
  type: string;
  submittedBy: string;
  date: string;
  action: string;
  actionHref: string;
}

const PendingApprovals: React.FC = () => {
  const approvals: ApprovalItem[] = [
    {
      id: "1",
      item: "Teaching Plan - Module ABC101",
      type: "Teaching Plan",
      submittedBy: "Dr. Alice Smith",
      date: "2024-07-20",
      action: "Review",
      actionHref: "/academic/teaching-plans",
    },
    {
      id: "2",
      item: "Leave Request - John Doe",
      type: "Leave Request",
      submittedBy: "John Doe",
      date: "2024-07-19",
      action: "Approve",
      actionHref: "/staff/leave-requests",
    },
    {
      id: "3",
      item: "Grade Submission - CSC203",
      type: "Grade Approval",
      submittedBy: "Prof. Bob Johnson",
      date: "2024-07-18",
      action: "Approve",
      actionHref: "/academic-records/classes-marks",
    },
    {
      id: "4",
      item: "New Module Proposal - AI Ethics",
      type: "Curriculum",
      submittedBy: "Dr. Emily White",
      date: "2024-07-17",
      action: "Review",
      actionHref: "/staff/modules-allocation",
    },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm h-full flex flex-col">
      <div className="px-3 sm:px-4 py-2.5 flex items-center justify-between flex-shrink-0">
        <h2 className="text-sm sm:text-base font-bold text-gray-900">Pending Approvals</h2>
        <Link
          href="/academic/student-requests"
          className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-semibold rounded-lg transition-colors duration-200 text-white hover:opacity-90 flex-shrink-0"
          style={{ backgroundColor: "#026892" }}
        >
          <span className="hidden sm:inline">View All</span>
          <span className="sm:hidden">View</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:flex flex-1 overflow-hidden flex-col">
        <div className="px-4 py-2.5 overflow-x-auto flex-1">
          <div className="overflow-hidden rounded-lg border border-gray-100 h-full">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-3 py-2 text-left text-xs font-bold text-gray-700">
                    Item
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-gray-700">
                    Type
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-gray-700">
                    Submitted By
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-gray-700">
                    Date
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-bold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {approvals.map((approval) => (
                  <tr key={approval.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-3 py-2 text-xs text-gray-900 font-medium text-left">
                      {approval.item}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-600 text-left">
                      {approval.type}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-600 text-left">
                      {approval.submittedBy}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-600 text-left whitespace-nowrap">
                      {approval.date}
                    </td>
                    <td className="px-3 py-2 text-xs text-left">
                      <Link
                        href={approval.actionHref}
                        className="font-semibold transition-colors duration-200 hover:opacity-80"
                        style={{ color: "#026892" }}
                      >
                        {approval.action}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden flex-1 overflow-y-auto px-3 py-2.5 space-y-2">
        {approvals.map((approval) => (
          <div key={approval.id} className="bg-gray-50 rounded-lg p-3 border border-gray-100">
            <div className="space-y-2">
              <div>
                <span className="text-xs font-semibold text-gray-500">Item</span>
                <p className="text-sm font-medium text-gray-900 mt-1">{approval.item}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-xs font-semibold text-gray-500">Type</span>
                  <p className="text-xs text-gray-700 mt-1">{approval.type}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-gray-500">Date</span>
                  <p className="text-xs text-gray-700 mt-1">{approval.date}</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-semibold text-gray-500">Submitted By</span>
                <p className="text-xs text-gray-700 mt-1">{approval.submittedBy}</p>
              </div>
              <div className="pt-2">
                <Link
                  href={approval.actionHref}
                  className="inline-block w-full text-center px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 text-white hover:opacity-90"
                  style={{ backgroundColor: "#026892" }}
                >
                  {approval.action}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingApprovals;
