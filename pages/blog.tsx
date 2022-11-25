import React from 'react'
import { getPosts } from '../lib/get-posts'
import PostList from '../components/post-list'
import Dotted from '../components/dotted'
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
