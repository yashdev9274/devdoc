"use client";

import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Cards, Card } from '../../../../packages/ui/src/cards'
import dynamic from "next/dynamic";

const MdxIconComponents = {
  FileText: dynamic(() => import("lucide-react").then((mod) => mod.FileText)),
  Folder: dynamic(() => import("lucide-react").then((mod) => mod.Folder)),
  Terminal: dynamic(() => import("lucide-react").then((mod) => mod.Terminal)),
};

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx-content">
      <Component components={{ ...mdxComponents, Blocks: Cards, Card, Cards, ...MdxIconComponents }} />
    </div>
  )
}

// Custom MDX components for better styling
export const mdxComponents = {
  h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold tracking-tight mb-6 mt-8 first:mt-0" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-2xl font-semibold tracking-tight mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold tracking-tight mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="text-lg font-semibold tracking-tight mb-2 mt-4" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 leading-7" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-7" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic my-4" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
      {children}
    </pre>
  ),
  a: ({ children, href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a 
      href={href} 
      className="text-blue-600 dark:text-blue-400 hover:underline" 
      {...props}
    >
      {children}
    </a>
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-8 border-gray-200 dark:border-gray-700" {...props} />
  ),
}
