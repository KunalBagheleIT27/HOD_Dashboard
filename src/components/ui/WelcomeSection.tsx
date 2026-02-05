"use client";

import React from "react";

interface WelcomeSectionProps {
  userName: string;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  userName,
}) => {

  return (
    <div className="w-full">
      <div className="px-1 sm:px-2 py-1.5 mb-1.5 pt-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1.5 leading-tight text-gray-900">
          Welcome back, {userName}!
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 font-normal mb-0 leading-relaxed max-w-4xl">
          Here&apos;s what&apos;s happening in your department.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;


