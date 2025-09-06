import { notFound } from 'next/navigation'
import { allDocs } from 'contentlayer/generated'
import { Mdx } from '@/components/mdx-components'

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getDocFromParams(params: PageProps['params']) {
  const slug = params.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}

export default async function Page({ params }: PageProps) {
  const doc = await getDocFromParams(params)

  if (!doc) {
    notFound()
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-lg text-muted-foreground">{doc.description}</p>
          )}
        </div>
        <div className="pb-12 pt-8">
          <Mdx code={doc.body.code} />
        </div>
      </div>
    </main>
  )
}