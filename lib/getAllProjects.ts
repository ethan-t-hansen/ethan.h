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
        tags: (metadata.tags || []).slice().sort((a: string, b: string) => a.localeCompare(b)),
      }
    })
  )

  return projects as {
    slug: string
    title: string
    role: string
    tags: string[]
    previewImage: string
    featured: boolean
  }[]
}
