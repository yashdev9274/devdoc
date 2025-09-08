import React from 'react';
import Sidebar from '../../components/docs/Sidebar';
import MainContent from '../../components/docs/MainContent';
import Header from '../../components/docs/Header';

interface DocLayoutProps {
  children: React.ReactNode;
}

const DocsLayout: React.FC<DocLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default DocsLayout;
