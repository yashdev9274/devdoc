import { notFound } from 'next/navigation';
import { allDocs } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
// import DocsLayout from '../layout';

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

  const MdxContent = getMDXComponent(doc.body.code);

  return (
      <article className="prose dark:prose-invert">
        <h1>{doc.title}</h1>
        {doc.description && <p className="lead">{doc.description}</p>}
        <hr />
        <MdxContent />
      </article>
  );
}