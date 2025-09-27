'use client';

import React, { useState } from 'react';
import Sidebar from '../../components/docs/Sidebar';
import MainContent from '../../components/docs/MainContent';
import { Menu, X } from 'lucide-react';

interface DocLayoutProps {
  children: React.ReactNode;
}

const DocsLayout: React.FC<DocLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-72">
            <Sidebar />
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-background border"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <Sidebar />

      {/* Main content with mobile menu button */}
      <div className="flex-1 flex flex-col">
        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-accent"
          >
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="text-lg font-semibold">Documentation</h1>
          <div className="w-9" /> {/* Spacer for centering */}
        </div>

        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default DocsLayout;
