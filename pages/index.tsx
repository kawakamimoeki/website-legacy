import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import MainVisual from '../components/sections/index/main-visual'
import Vision from '../components/sections/index/vision'
import Bios from '../components/sections/index/bios'
import Contact from '../components/sections/index/contact'
import Blog from '../components/sections/index/blog'
import { getPosts } from '../lib/get-posts'

export async function getStaticProps() {
  const posts = await getPosts()
  return {
    props: {
      posts
    }
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://moeki.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="@moekidev" />
      </Head>
      <MainVisual />
      <Vision />
      <Contact />
      <Blog posts={props.posts} />
    </>
  )
}
