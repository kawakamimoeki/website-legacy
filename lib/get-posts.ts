import fs from 'fs'
import path from 'path'
import { getPost } from './get-post'
import { PostType } from '../interfaces/post'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPosts(): Promise<Array<PostType>> {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, '')
      return getPost(id)
    })
  )
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}
