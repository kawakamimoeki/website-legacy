import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import SEO from '../components/seo.jsx'
import Header from '../components/header.jsx'
import Vision from '../components/vision.jsx'
import Values from '../components/values.jsx'
import Bio from '../components/bio.jsx'
import Topics from '../components/topics.jsx'
import Links from '../components/links.jsx'
import Footer from '../components/footer.jsx'
import Contact from '../components/contact.jsx'

export default function Home(props) {
  return (
    <>
      <SEO />
      <Header likeCount={props.likeCount} />
      <Vision />
      <Values />
      <Bio />
      <Topics />
      <Contact />
      <Links />
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const likeCount = await prisma.like.count()
  return {
    props: { likeCount: likeCount }
  }
}
