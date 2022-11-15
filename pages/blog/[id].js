import Head from 'next/head'
import Markdown from '../../components/markdown'
import Date from '../../components/date'
import Title from '../../components/title'
import { getPostData, getPostsData } from '../../lib/posts'
import Link from 'next/link'

export async function getStaticPaths() {
  const postsData = await getPostsData()
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

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Title>{postData.title}</Title>
      <Date className="text-sm opacity-50" dateString={postData.date} />
      <Markdown content={postData.content}></Markdown>
      <Link
        className="underline decoration-yellow-400 decoration-4 underline-offset-4 font-bold block my-6 text-center"
        href="/blog">
        ← Back to moeki.dev/blog
      </Link>
    </>
  )
}
