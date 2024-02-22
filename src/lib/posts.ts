import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

// Directory with markdown content
const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get all markdown files
  const fileNames = fs.readdirSync(postsDirectory)

  const allPostsData = fileNames.map((filename) => {
    // Remove ".md" from file name to get id
    const id = filename.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const frontmatter = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(frontmatter.data as { date: string; title: string }),
    }
  })

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string) {
  // Get the data of a single markdown entry by the Id
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const frontmatter = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(frontmatter.content)
  const content = processedContent.toString()

  // Combine the data with the id
  return {
    id,
    content,
    ...(frontmatter.data as { date: string; title: string }),
  }
}
