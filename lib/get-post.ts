import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { PostType } from '../interfaces/post'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPost(id): Promise<PostType> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id and contentHtml
  return {
    id,
    title: matterResult.data.title,
    content: matterResult.content,
    date: matterResult.data.date
  }
}
