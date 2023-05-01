import * as React from 'react'
import Head from 'next/head'
import Markdown from '../../components/markdown.jsx'
import Date from '../../components/date'
import Title from '../../components/title'
import { getPosts } from '../../lib/get-posts'
import { getPost } from '../../lib/get-post'
import Link from 'next/link'
import { PostType } from '../../interfaces/post'

export async function getStaticPaths() {
  const postsData = await getPosts()
  const paths = postsData.map((d) => {
    return {
      params: {
        id: d.id
      }
    }
  })
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
        <title>{post.title} - Moeki Kawakami</title>
        <meta property="og:url" content={`https://moeki.dev/blog/${post.id}`} />
        <meta property="og:title" content={`${post.title} - Moeki Kawakami`} />
      </Head>
      <Title>{post.title}</Title>
      <Date className="text-sm opacity-50" dateString={post.date.toString()} />
      <Markdown
        className="mt-10 prose mx-auto max-w-none"
        content={post.content}></Markdown>
      <Link className="font-bold block my-6 text-center" href="/blog" passHref>
        ← 一覧に戻る
      </Link>
    </>
  )
}
