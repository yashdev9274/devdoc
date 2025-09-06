import { loadMdx } from '@devdoc/core';
import { DocsPage } from '@devdoc/ui';
import { notFound } from 'next/navigation';

import React from 'react';

type MdxPageProps = {
    params: {
        slug: string[]
    }
}

export default async function MdxPage({ params }: MdxPageProps) {
  const data = await loadMdx(params.slug);
  console.log('--- DEBUG DATA ---', data);

  if (!data) {
    notFound();
  }

  return (
    <DocsPage
      frontmatter={data.frontmatter}
      htmlContent={data.content}
    />
  );
}
