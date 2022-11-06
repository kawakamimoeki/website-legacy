import SEO from '../components/seo.jsx'
import Header from '../components/header.jsx'
import Vision from '../components/vision.jsx'
import Values from '../components/values.jsx'
import Bio from '../components/bio.jsx'
import Topics from '../components/topics.jsx'
import Links from '../components/links.jsx'
import Footer from '../components/footer.jsx'

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <Vision />
      <Values />
      <Bio />
      <Topics />
      <Links />
      <Footer />
    </>
  )
}
