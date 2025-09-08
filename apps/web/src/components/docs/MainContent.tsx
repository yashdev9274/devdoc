import React from 'react';
import TableOfContents from './TableOfContents';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div className="flex-1 overflow-auto flex justify-center">
      <div className="flex w-full max-w-4xl pt-8 pb-12 px-4 md:px-6 lg:px-8">
        <article className="prose dark:prose-invert max-w-none flex-1">
          {children}
        </article>
        <TableOfContents />
      </div>
    </div>
  );
};

export default MainContent;
