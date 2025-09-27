'use client';

import React, { useEffect, useState } from 'react';

interface Heading {
  level: number;
  text: string;
  id: string;
}

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: Number(el.tagName.substring(1)),
      }))
      .filter((h) => h.id);
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.1,
      }
    );

    elements.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 w-64 p-4 -mt-8 text-sm hidden xl:block">
      <h3 className="text-sm font-semibold mb-3 text-foreground">On this page</h3>
      <nav>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id} className="mb-2">
              <a
                href={`#${heading.id}`}
                className={`text-muted-foreground hover:text-foreground block transition-colors ${activeId === heading.id ? 'text-primary font-semibold' : ''} `}
                style={{ marginLeft: `${(heading.level - 1) * 10}px` }}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
