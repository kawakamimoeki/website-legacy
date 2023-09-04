import React from 'react'
import Head from 'next/head'

export default function Seo() {
  return (
    <Head>
      <title>@moekidev</title>
      <meta name="description" content="Hello. I'm a web developer in Japan." />
      <meta property="og:site_name" content="" />
      <meta property="og:description" content="Hello. I'm a web developer in Japan." />
      <meta property="og:image" content="https://moeki.dev/img/ogp.png" />
      <meta property="twitter:image" content="https://moeki.dev/img/ogp.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}
