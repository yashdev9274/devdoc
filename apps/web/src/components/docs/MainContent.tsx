import React from 'react';
import TableOfContents from './TableOfContents';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="flex w-full max-w-6xl mx-auto pt-8 pb-12 px-4 md:px-6 lg:px-8">
        <main className="flex-1 min-w-0">
          {children}
        </main>
        <TableOfContents />
      </div>
    </div>
  );
};

export default MainContent;
