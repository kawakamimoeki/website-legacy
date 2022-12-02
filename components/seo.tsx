import React from 'react'
import Head from 'next/head'

export default function Seo() {
  return (
    <Head>
      <title>Moeki Kawakami</title>
      <meta
        name="description"
        content="Hi. I'm Moeki Kawakami, software developer in Japan."
      />
      <meta property="og:site_name" content="" />
      <meta
        property="og:description"
        content="Hi. I'm Moeki Kawakami, software developer in Japan."
      />
      <meta
        property="og:image"
        content="https://moeki.dev/img/kawakamimoeki.jpg"
      />
      <meta
        property="twitter:image"
        content="https://moeki.dev/img/kawakamimoeki.jpg"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}
