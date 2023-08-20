import React from 'react'
import { getPosts } from '../lib/get-posts'
import PostList from '../components/post-list'
import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'

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
  return (
    <>
      <Head>
        <title>ブログ - @moekidev</title>
        <meta property="og:url" content={`https://moeki.dev/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - @moekidev" />
      </Head>
      <section className="">
        <h2 className="text-2xl font-bold">
          <span className="">ブログ</span>
        </h2>
        <div className="mt-4">
          <PostList posts={allPostsData} />
        </div>
      </section>
    </>
  )
}
