import SEO from '../components/seo.jsx'
import Header from '../components/header.jsx'
import Vision from '../components/vision.jsx'
import Bio from '../components/bio.jsx'
import Links from '../components/links.jsx'
import Contact from '../components/contact.jsx'
import Blog from '../components/blog.jsx'
import Works from '../components/works'
import Contributions from '../components/contributions'
import { getPostsData } from '../lib/posts'
import repositories from '../data/repositories.json'
import { repositoryInfos } from '../lib/repository-infos'

export async function getStaticProps() {
  const allPostsData = await getPostsData()
  const contributions = await repositoryInfos(repositories.contributions)
  const works = await repositoryInfos(repositories.works)
  return {
    props: {
      allPostsData,
      contributions,
      works
    }
  }
}

export default function Home(props) {
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
