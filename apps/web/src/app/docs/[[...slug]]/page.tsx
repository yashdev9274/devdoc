import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { Mdx } from '@/components/mdx-components';

interface PageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: PageProps['params']) {
  const slug = params.slug?.join('/') || 'introduction'; // Default to 'introduction'
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === `docs/${slug}`);

  if (!doc) {
    return null;
  }

  return doc;
}

export default async function Page({ params }: PageProps) {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight mb-4">{doc.title}</h1>
      {doc.description && (
        <p className="text-lg text-muted-foreground mb-8">{doc.description}</p>
      )}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <Mdx code={doc.body.code} />
      </div>
    </>
  );
}