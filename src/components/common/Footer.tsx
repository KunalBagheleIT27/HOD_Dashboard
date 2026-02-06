'use client';

import React from 'react';

const Footer: React.FC = () => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-x-2 text-[10px] sm:text-xs text-gray-600">
          <div className="flex items-center gap-x-2">
            <span>Version 2.1.0</span>
            <span className="text-gray-300">•</span>
            <span>Support</span>
            <span className="text-gray-300">•</span>
            <span>Terms</span>
            <span className="text-gray-300">•</span>
            <span>Privacy</span>
          </div>
          <div className="flex items-center gap-x-2">
            <span>Last Updated: {formattedDate}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


