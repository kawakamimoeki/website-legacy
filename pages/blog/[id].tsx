import * as React from 'react'
import Head from 'next/head'
import Markdown from '../../components/markdown'
import Date from '../../components/date'
import Title from '../../components/title'
import { getPost, getPosts } from '../../lib/get-posts'
import Link from 'next/link'
import SEO from '../../components/seo'
import { Post } from '../../interfaces/post'

export async function getStaticPaths() {
  const postsData = await getPosts()
  return {
    paths: postsData.map((d) => {
      return {
        params: {
          id: d.id
        }
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({
  params
}: {
  params: {
    id: number
  }
}) {
  const post = await getPost(params.id)

  return {
    props: {
      post
    }
  }
}

export default function Post({ post }: { post: Post }): JSX.Element {
  return (
    <>
      <SEO />
      <Head>
        <title>{post.title}</title>
      </Head>
      <Title>{post.title}</Title>
      <Date className="text-sm opacity-50" dateString={post.date.toString()} />
      <Markdown content={post.content}></Markdown>
      <Link
        className="underline decoration-yellow-400 decoration-4 underline-offset-4 font-bold block my-6 text-center"
        href="/blog">
        ← Back to moeki.dev/blog
      </Link>
    </>
  )
}
