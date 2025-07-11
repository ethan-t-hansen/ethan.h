import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export async function getAllProjects() {
  const files = fs.readdirSync(CONTENT_DIR).filter((file) => file.endsWith('.mdx'))

  const projects = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, '')

      const { metadata } = await import(`@/content/${slug}.mdx`)
      return {
        slug,
        ...metadata,
      }
    })
  )

  return projects as {
    slug: string
    title: string
    tags: string[]
    image: string
    featured: boolean
  }[]
}
