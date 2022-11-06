import text from '../data/text.json'
import Head from 'next/head'

export default function component() {
  return (
    <Head>
      <title>{text.title}</title>
      <meta name="description" content={text.description} />
      <meta property="og:url" content="https://moeki.dev" />
      <meta property="og:title" content={text.title} />
      <meta property="og:site_name" content={text.title} />
      <meta property="og:description" content={text.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/me.jpg" />
    </Head>
  )
}
