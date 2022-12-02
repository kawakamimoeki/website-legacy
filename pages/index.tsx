import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import MainVisual from '../components/sections/index/main-visual'
import Vision from '../components/sections/index/vision'
import Bios from '../components/sections/index/bios'
import Links from '../components/sections/index/links'
import Contact from '../components/sections/index/contact'
import Blog from '../components/sections/index/blog'
import Works from '../components/sections/index/works'
import Contributions from '../components/sections/index/contributions'
import { getPosts } from '../lib/get-posts'
import repositories from '../datas/repositories.json'
import { githubRepositories } from '../lib/github-repositories'

export async function getStaticProps() {
  const allPostsData = await getPosts()
  const contributions = await githubRepositories(repositories.contributions)
  const works = await githubRepositories(repositories.works)
  return {
    props: {
      allPostsData,
      contributions,
      works
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
        <meta property="og:title" content="Moeki Kawakami" />
      </Head>
      <MainVisual />
      <Vision />
      <Bios />
      <Blog posts={props.allPostsData} />
      <Contact />
    </>
  )
}
