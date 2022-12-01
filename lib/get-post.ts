import contentfulClient from './contentful-client'
import en from '../locales/en'
import ja from '../locales/ja'

export async function getPost(id) {
  const post = {}
  await Promise.all(
    [en, ja].map(async (l) => {
      post[l.meta.slug] = await contentfulClient.getEntry(id, {
        locale: l.meta.slug
      })
    })
  )
  return post
}
