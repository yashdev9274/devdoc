'use client';

import React, { PropsWithChildren, useState } from 'react';
import Sidebar from '../../components/docs/Sidebar';
import MainContent from '../../components/docs/MainContent';
import { Menu, X } from 'lucide-react';
import { useSidebar } from '@/lib/hooks/useSidebar';
import { CollapsedControls } from '@/components/docs/collapsedControls';
import { cn } from '@/lib/utils';

interface DocLayoutProps {
  children: React.ReactNode;
}

export function DocsLayout({ children }: PropsWithChildren){
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const {open, toggle, openSidebar, closeSidebar} = useSidebar()

  const [peeking, setPeeking] = useState(false);
  return (
    <div className="flex h-screen bg-background">
      {/* Mobile sidebar overlay */}
      {/* {sidebarOpen && (
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
      )} */}

      <div className="relative flex min-h-div">
        {!open && <CollapsedControls onOpen={openSidebar}/>} 

        <div 
          className={cn(
            "sticky top-0 h-dvh shrink-0 transition-[width] duration-300 ease-in-out",
            open ? "w-72" : "w-0",
          )}
          aria-hidden={!open}
        >
          <div
            className={cn(
              "h-dvh overflow-hidden",
              open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
            )}
          >

            {/* Desktop sidebar */}
            <Sidebar onClose={closeSidebar}/>
          </div>
        </div>
      </div>

      {!open && (
        <div
          className="fixed left-0 top-0 z-40 h-dvh w-6 lg:w-8"
          onMouseEnter={()=>setPeeking(true)}
          onMouseLeave={()=>setPeeking(false)}
          aria-hidden="true"
        />
      )}

      {!open && (
          <div
            className={cn(
              "pointer-events-none fixed left-0 top-0 z-50 h-dvh w-72 -translate-x-full transition-transform duration-200 ease-out",
              peeking && "pointer-events-auto translate-x-0",
            )}
            onMouseEnter={() => setPeeking(true)}
            onMouseLeave={() => setPeeking(false)}
          >
            <div className="h-full border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-xl">
              <Sidebar onClose={closeSidebar} />
            </div>
          </div>
      )}

      {/* Main content with mobile menu button */}
      
      <main className="flex-1">
          <div className="mx-auto max-w-4xl py-8">
            <div className="mb-6 flex items-center justify-between">
              <button
                type="button"
                onClick={toggle}
                aria-pressed={open}
                aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
                title={open ? "Collapse sidebar (Ctrl/Cmd+B)" : "Expand sidebar (Ctrl/Cmd+B)"}
              />
            </div>
            <MainContent>{children}</MainContent>

          </div>
        </main>
        {open && (
          <button
            type="button"
            className="fixed inset-0 z-40 block cursor-default bg-black/20 backdrop-blur-sm lg:hidden"
            aria-label="Close sidebar"
            onClick={closeSidebar}
          />
        )}
    
      {/* <MainContent>{children}</MainContent> */}
        
    </div>


  );
};

export default DocsLayout;
