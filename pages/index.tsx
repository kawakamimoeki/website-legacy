import { InferGetStaticPropsType } from 'next'
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
import { useLocale } from '../hooks/use-locale'

export async function getStaticProps() {
  const posts = await getPosts()
  const contributions = await githubRepositories(repositories.contributions)
  const works = await githubRepositories(repositories.works)
  return {
    props: {
      posts,
      contributions,
      works
    }
  }
}

export default function IndexPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { t } = useLocale()
  return (
    <>
      <MainVisual />
      <Vision />
      <Bios />
      <Works repos={props.works} />
      <Contributions repos={props.contributions} />
      <Blog posts={props.posts[t.meta.slug].filter((p, i) => i < 3)} />
      <Contact />
      <Links />
    </>
  )
}
