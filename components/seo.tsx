import React from 'react'
import Head from 'next/head'

export default function Seo() {
  return (
    <Head>
      <title>Moeki Kawakami</title>
      <meta name="description" content="Hello. I'm web developer in Japan." />
      <meta property="og:site_name" content="" />
      <meta property="og:description" content="Hello. I'm web developer in Japan." />
      <meta property="og:image" content="https://moeki.dev/img/ogp.png" />
      <meta property="twitter:image" content="https://moeki.dev/img/ogp.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" type="image/x-icon" href="/img/favicon.ico"></link>
    </Head>
  )
}
