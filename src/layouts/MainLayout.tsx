'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';
import Footer from '@/components/common/Footer';
import { currentUser } from '@/data/dummyData';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header user={currentUser} onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 lg:overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        <main className="flex-1 lg:ml-72 min-h-[calc(100vh-110px)] sm:min-h-[calc(100vh-64px)] flex flex-col overflow-x-hidden pt-[110px] sm:pt-16 md:pt-16">
          <div className="flex-1 lg:overflow-y-auto">{children}</div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;


