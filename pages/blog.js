import SEO from '../components/seo'
import Header from '../components/header'
import { getPostsData } from '../lib/posts'
import PostList from '../components/post-list'
import Dotted from '../components/dotted'

export async function getStaticProps() {
  const allPostsData = await getPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <SEO />
      <Header />
      <section className="">
        <h2 className="text-2xl font-bold">
          <span className="marker marker-yellow">Blog</span>
        </h2>
        <p>
          <Dotted>The exploration</Dotted> to product design for productivity.
        </p>
        <div className="mt-4">
          <PostList posts={allPostsData} />
        </div>
      </section>
    </>
  )
}
