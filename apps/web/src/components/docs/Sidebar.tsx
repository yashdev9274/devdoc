'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { allDocs } from 'contentlayer/generated';
import { Search, ChevronDown, LayoutGrid, Sun, ChevronLeft } from 'lucide-react';
import FrameworkDropdown from './sidebar-dropdown-menu';
import { DropdownMenu } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

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
          <Link href={value.doc.url} className={`flex items-center gap-2 p-2 rounded-lg ${isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground' : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'}`}>
            {value.doc.title}
          </Link>
        </li>
      );
    } else if (hasChildren) {
      return (
        <li key={key} className="mt-4 mb-2">
          <button className="flex items-center justify-between w-full p-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground font-semibold">
            {key}
            <ChevronDown className="size-4 text-muted-foreground" />
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

export function Sidebar ({onClose}:{onClose? :()=> void})  {
  return (
    <aside className="w-72 p-4 bg-sidebar border-r border-sidebar-border h-full overflow-y-auto flex flex-col hidden lg:flex">
      
      <div className="flex items-center justify-between mb-4 mt-4">
        <Link href="/" className="text-xl font-bold">
          Devdocs
        </Link>
        <button className="p-2 rounded-lg hover:bg-gray-700">
          <Sun className="size-5 text-gray-300" />
        </button>
        <div className="ml-auto">
          <button
            type="button"
            onClick={onClose}
            className={cn(
              "inline-flex size-8 items-center justify-center rounded-md",
              "hover:bg-sidebar-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
            )}
            aria-label="Collapse sidebar"
            title="Collapse"
          >
            <ChevronLeft className="size-4" />
            
          </button>
        </div>
      </div>
      
      <div className="mb-5">
        <div className="group relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            aria-label="Search docs"
            placeholder="Search"
            className={cn(
              "w-full rounded-md border border-sidebar-border bg-secondary pl-9 pr-16 py-2 text-sm",
              "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
            )}
          />
          <kbd
            className={cn(
              "pointer-events-none absolute right-2 top-1/2 -translate-y-1/2",
              "rounded border border-sidebar-border bg-muted px-2 py-0.5 text-[10px] text-muted-foreground",
            )}
          >
            Ctrl K
          </kbd>
        </div>
      </div>

      <div className="mb-6">
        {/* <DropdownMenu> */}
          <FrameworkDropdown />
        {/* </DropdownMenu> */}
      </div>

      <nav className="flex-1">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-3">Introduction</h3>
        <ul>{renderTree(pageTree)}</ul>
      </nav>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-sidebar-border">
        <Link href="https://github.com/yashdev9274/devdoc" className="text-muted-foreground hover:text-sidebar-foreground">
        <div className='flex items-center gap-3'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M212.62,75.17A63.7,63.7,0,0,0,206.39,26,12,12,0,0,0,196,20a63.71,63.71,0,0,0-50,24H126A63.71,63.71,0,0,0,76,20a12,12,0,0,0-10.39,6,63.7,63.7,0,0,0-6.23,49.17A61.5,61.5,0,0,0,52,104v8a60.1,60.1,0,0,0,45.76,58.28A43.66,43.66,0,0,0,92,192v4H76a20,20,0,0,1-20-20,44.05,44.05,0,0,0-44-44,12,12,0,0,0,0,24,20,20,0,0,1,20,20,44.05,44.05,0,0,0,44,44H92v12a12,12,0,0,0,24,0V192a20,20,0,0,1,40,0v40a12,12,0,0,0,24,0V192a43.66,43.66,0,0,0-5.76-21.72A60.1,60.1,0,0,0,220,112v-8A61.5,61.5,0,0,0,212.62,75.17ZM196,112a36,36,0,0,1-36,36H112a36,36,0,0,1-36-36v-8a37.87,37.87,0,0,1,6.13-20.12,11.65,11.65,0,0,0,1.58-11.49,39.9,39.9,0,0,1-.4-27.72,39.87,39.87,0,0,1,26.41,17.8A12,12,0,0,0,119.82,68h32.35a12,12,0,0,0,10.11-5.53,39.84,39.84,0,0,1,26.41-17.8,39.9,39.9,0,0,1-.4,27.72,12,12,0,0,0,1.61,11.53A37.85,37.85,0,0,1,196,104Z"></path></svg>
              GitHub
          </div>
        </Link>
        
      </div>
    </aside>
  );
};

export default Sidebar;
