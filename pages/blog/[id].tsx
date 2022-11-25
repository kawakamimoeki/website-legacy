import * as React from 'react'
import Head from 'next/head'
import Markdown from '../../components/markdown.jsx'
import Date from '../../components/date'
import Title from '../../components/title'
import { getPosts } from '../../lib/get-posts'
import { getPost } from '../../lib/get-post'
import Link from 'next/link'
import SEO from '../../components/seo'
import { PostType } from '../../interfaces/post'

export async function getStaticPaths() {
  const postsData = await getPosts()
  const paths = postsData.map((d) => {
    return {
      params: {
        id: d.id
      },
      locale: 'en'
    }
  })
  paths.push(...paths.map((p) => ({ ...p, locale: 'ja' })))
  return {
    paths,
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

export default function Post({ post }: { post: PostType }): JSX.Element {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Title>{post.title}</Title>
      <Date className="text-sm opacity-50" dateString={post.date.toString()} />
      <Markdown content={post.content}></Markdown>
      <Link
        className="underline decoration-yellow-400 decoration-4 underline-offset-4 font-bold block my-6 text-center"
        href="/blog"
        passHref>
        ← Back to moeki.dev/blog
      </Link>
    </>
  )
}
