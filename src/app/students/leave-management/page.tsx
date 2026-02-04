"use client";

import React from 'react';
import MainLayout from '@/layouts/MainLayout';

export default function LeaveManagementPage() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
        <div className="px-6 py-6 border-b border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Leave Management</h1>
            <p className="text-gray-600">Apply and track your leave applications</p>
          </div>
        </div>

        <div className="px-6 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <p className="text-gray-600 text-center">Leave management feature coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}


