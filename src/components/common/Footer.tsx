'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] sm:text-xs text-gray-600">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>© {currentDate.getFullYear()} University HOD Portal</span>
            <span>•</span>
            <span>Academic Year 2023-2024</span>
            <span>•</span>
            <span>Version 2.1.0</span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span>Last updated: {formattedDate}</span>
            <span>•</span>
            <span>Session: Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


