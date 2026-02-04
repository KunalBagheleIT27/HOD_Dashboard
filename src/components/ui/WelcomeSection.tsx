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
      <div className="px-1 sm:px-2 py-2 mb-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight text-gray-900">
          Welcome back, {userName}!
        </h1>

        <p className="text-sm sm:text-base text-gray-600 font-normal mb-0 leading-relaxed max-w-4xl">
          Here&apos;s what&apos;s happening in your department.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;


