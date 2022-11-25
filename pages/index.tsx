import SEO from '../components/seo'
import { InferGetStaticPropsType } from 'next'
import Header from '../components/header'
import Vision from '../components/sections/index/vision'
import Bio from '../components/description'
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
      <SEO />
      <Header likeCount={props.likeCount} />
      <Vision />
      <Bio />
      <Works repos={props.works} />
      <Contributions repos={props.contributions} />
      <Blog posts={props.allPostsData} />
      <Contact />
      <Links />
    </>
  )
}
