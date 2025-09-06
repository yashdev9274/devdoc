import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'

export async function loadMdx(slug: string[]) {
  const slugPath = slug?.join('/') || 'introduction'
  const filePath = path.join(process.cwd(), 'docs', `${slugPath}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf8')

  const { content, data } = matter(source)

  const processedContent = await remark().use(remarkHtml).process(content)
  const htmlContent = processedContent.toString()

  return {
    content: htmlContent,
    frontmatter: data,
  }
}