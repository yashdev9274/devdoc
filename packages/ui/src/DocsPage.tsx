'use client';

import React from 'react';

type DocsPageProps = {
  frontmatter: {
    title?: string;
    description?: string;
    [key: string]: any;
  };
  htmlContent: string;
};

export function DocsPage({ frontmatter, htmlContent }: DocsPageProps) {
  return (
    <article className="prose prose-invert max-w-none p-8">
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </article>
  );
}
