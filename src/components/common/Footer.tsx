'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 text-[10px] sm:text-xs text-gray-600 whitespace-nowrap overflow-x-auto">
          <span>© {currentDate.getFullYear()} University HOD Portal</span>
          <span className="text-gray-300">•</span>
          <span>Academic Year 2023-2024</span>
          <span className="text-gray-300">•</span>
          <span>Version 2.1.0</span>
          <span className="text-gray-300">•</span>
          <span>Last updated: {formattedDate}</span>
          <span className="text-gray-300">•</span>
          <span>Session: Active</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


