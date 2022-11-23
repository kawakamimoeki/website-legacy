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
import { GraphQLClient, gql } from 'graphql-request'

export async function getStaticProps() {
  const allPostsData = await getPostsData()
  const contributionList = [
    {
      repo: 'forem',
      owner: 'forem'
    },
    {
      repo: 'vite_ruby',
      owner: 'ElMassimo'
    }
  ]
  const workList = [
    {
      repo: 'micro-admin',
      owner: 'cc-kawakami'
    },
    {
      repo: 'uchini',
      owner: 'cc-kawakami'
    },
    {
      repo: 'barruun',
      owner: 'cc-kawakami'
    }
  ]
  const graphQLClient = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_BEARER_TOKEN}`
    }
  })
  const contributions = await Promise.all(
    contributionList.map(async (c) => {
      const data = await graphQLClient.request(gql`
  {
    repository(name: "${c.repo}", owner: "${c.owner}") {
      nameWithOwner
      description
      url
    }
  }`)
      return data.repository
    })
  )
  const works = await Promise.all(
    workList.map(async (w) => {
      const data = await graphQLClient.request(gql`
  {
    repository(name: "${w.repo}", owner: "${w.owner}") {
      nameWithOwner
      description
      url
    }
  }`)
      return data.repository
    })
  )
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
