import React from 'react'
import { getPosts } from '../lib/get-posts'
import PostList from '../components/post-list'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { useLocale } from '../hooks/use-locale'

export async function getStaticProps() {
  const allPostsData = await getPosts()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({
  allPostsData
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const { t } = useLocale()

  return (
    <>
      <Head>
        <title>Blog - {t.title}</title>
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://kawakamimoeki.com/en/blog`}
        />
        <link
          rel="alternate"
          hrefLang="ja"
          href={`https://kawakamimoeki.com/ja/blog`}
        />
        <meta
          property="og:url"
          content={`https://kawakamimoeki.com/${t.slug}/blog`}
        />
        <meta property="og:title" content={`Blog - ${t.title}`} />
      </Head>
      <section className="">
        <h2 className="text-2xl font-bold">
          <span className="marker marker-yellow">Blog</span>
        </h2>
        <div className="mt-4">
          <PostList posts={allPostsData} />
        </div>
      </section>
    </>
  )
}
