import * as React from 'react'
import Head from 'next/head'
import Markdown from '../../../components/markdown.jsx'
import Date from '../../../components/date'
import Title from '../../../components/title'
import { getPosts } from '../../../lib/get-posts'
import { getPost } from '../../../lib/get-post'
import Link from 'next/link'
import { useLocale } from '../../../hooks/use-locale'
import en from '../../../locales/en'
import ja from '../../../locales/ja'

export async function getStaticPaths() {
  let paths = []
  const posts = await getPosts()
  await Promise.all(
    [en, ja].map(async (l) => {
      return posts[l.meta.slug].map((p) => {
        paths.push({
          params: {
            id: p.sys.id,
            slug: p.fields.slug
          },
          locale: l.meta.slug
        })
      })
    })
  )
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const post = await getPost(context.params.id)

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }): JSX.Element {
  const { t } = useLocale()

  return (
    <>
      <Head>
        <title>{post[t.meta.slug].fields.title}</title>
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://kawakamimoeki.com/en-US/blog/${
            post[t.meta.slug].sys.id
          }`}
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href={`https://kawakamimoeki.com/ja/blog/${post[t.meta.slug].sys.id}`}
        />
        <meta
          property="og:url"
          content={`https://kawakamimoeki.com/${t.meta.slug}/blog/${
            post[t.meta.slug].sys.id
          }`}
        />
        <meta property="og:title" content={post[t.meta.slug].fields.title} />
        <meta
          property="twitter:title"
          content={post[t.meta.slug].fields.title}
        />
      </Head>
      <Title>{post[t.meta.slug].fields.title}</Title>
      <Date
        className="text-sm opacity-50"
        dateString={post[t.meta.slug].sys.createdAt.toString()}
      />
      <Markdown content={post[t.meta.slug].fields.content}></Markdown>
      <Link
        className="underline decoration-yellow-400 decoration-4 underline-offset-4 font-bold block my-6 text-center"
        href="/blog"
        passHref>
        ← Back to list
      </Link>
    </>
  )
}
