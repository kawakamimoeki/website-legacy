import SEO from '../components/seo.jsx'
import Header from '../components/header.jsx'
import Vision from '../components/vision.jsx'
import Bio from '../components/bio.jsx'
import Links from '../components/links.jsx'
import Contact from '../components/contact.jsx'
import Blog from '../components/blog.jsx'
import { getPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = await getPostsData()
  return {
    props: {
      allPostsData
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
      <Blog posts={props.allPostsData} />
      <Contact />
      <Links />
    </>
  )
}
