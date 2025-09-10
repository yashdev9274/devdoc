'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { allDocs } from 'contentlayer/generated';
import { Search, ChevronDown, LayoutGrid, Sun } from 'lucide-react';
import FrameworkDropdown from './sidebar-dropdown-menu';
import { DropdownMenu } from '@/components/ui/dropdown-menu';

// Helper function to build a hierarchical page tree from a flat list of documents
function buildPageTree(docs: any[]) {
  const tree: any = { children: {} };

  docs.forEach(doc => {
    const pathParts = doc._raw.flattenedPath.split('/').slice(1); // Remove 'docs/' prefix
    let currentLevel = tree;

    pathParts.forEach((part: string, index: number) => {
      if (!currentLevel.children[part]) {
        currentLevel.children[part] = { children: {} };
      }
      if (index === pathParts.length - 1) {
        currentLevel.children[part] = { ...currentLevel.children[part], doc };
      }
      currentLevel = currentLevel.children[part];
    });
  });

  return tree.children;
}

const pageTree = buildPageTree(allDocs);

const renderTree = (nodes: any, path = '/docs') => {
  const pathname = usePathname(); // Get current pathname

  return Object.entries(nodes).map(([key, value]: [string, any]) => {
    const currentPath = `${path}/${key}`;
    const hasChildren = Object.keys(value.children).length > 0;
    const isActive = value.doc && pathname === value.doc.url; // Check if link is active

    if (value.doc) {
      return (
        <li key={key} className="mb-1">
          <Link href={value.doc.url} className={`flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
            {value.doc.title}
          </Link>
        </li>
      );
    } else if (hasChildren) {
      return (
        <li key={key} className="mt-4 mb-2">
          <button className="flex items-center justify-between w-full p-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 font-semibold">
            {key}
            <ChevronDown className="size-4 text-gray-500 dark:text-gray-400" />
          </button>
          <ul className="ml-4 mt-1">
            {renderTree(value.children, currentPath)}
          </ul>
        </li>
      );
    }
    return null;
  });
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 p-4 bg-gray-950 border-r border-gray-800 h-full overflow-y-auto flex flex-col">
      
      <div className="flex items-center justify-between mb-4 mt-4">
        <Link href="/" className="text-xl font-bold">
          Devdocs
        </Link>
        <button className="p-2 rounded-lg hover:bg-gray-700">
          <Sun className="size-5 text-gray-300" />
        </button>
      </div>
      
      <div className="relative flex items-center mb-4">
        <Search className="absolute left-2 size-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 py-1.5 pl-8 pr-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="ml-2 text-sm text-gray-500">Ctrl K</span>
      </div>

      <div className="mb-6">
        {/* <DropdownMenu> */}
          <FrameworkDropdown />
        {/* </DropdownMenu> */}
      </div>

      <nav className="flex-1">
        <h3 className="text-xs font-semibold text-gray-400 uppercase mb-3">Introduction</h3>
        <ul>{renderTree(pageTree)}</ul>
      </nav>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
        <Link href="https://github.com/yashdev9274/devdocs" className="text-gray-400 hover:text-gray-300">
          GitHub
        </Link>
        
      </div>
    </aside>
  );
};

export default Sidebar;
