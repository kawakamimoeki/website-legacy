import contentfulClient from './contentful-client'
import en from '../locales/en'
import ja from '../locales/ja'

export async function getPosts() {
  let posts = {}
  await Promise.all(
    [en, ja].map(async (l) => {
      const entries = await contentfulClient.getEntries({
        locale: l.meta.slug
      })
      return (posts[l.meta.slug] = entries.items)
    })
  )
  return posts
}
