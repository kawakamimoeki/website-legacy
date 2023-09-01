import Head from 'next/head'
import MainVisual from '../components/sections/index/main-visual'
import Vision from '../components/sections/index/vision'
import Contact from '../components/sections/index/contact'

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://moeki.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="@moekidev" />
      </Head>
      <MainVisual />
      <Vision />
      <Contact />
    </>
  )
}
