import React from 'react';
import Link from 'next/link';
import { Search, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-800 bg-gray-900 text-white sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          Fumadocs
        </Link>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 size-4 text-gray-500 dark:text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-8 pr-3 py-1.5 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg hover:bg-gray-700">
          <Sun className="size-5 text-gray-300" />
        </button>
        {/* Add more icons or components here */}
      </div>
    </header>
  );
};

export default Header;
