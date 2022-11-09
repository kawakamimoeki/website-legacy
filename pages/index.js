import SEO from '../components/seo.jsx'
import Header from '../components/header.jsx'
import Vision from '../components/vision.jsx'
import Values from '../components/values.jsx'
import Bio from '../components/bio.jsx'
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
      <Contact />
      <Links />
      <Footer />
    </>
  )
}
