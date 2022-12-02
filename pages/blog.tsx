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
        <title>Blog - Moeki Kawakami</title>
        <meta property="og:url" content={`https://kawakamimoeki.com/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog - Moeki Kawakami" />
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
