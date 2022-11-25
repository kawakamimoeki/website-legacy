import React from 'react'
import meta from '../datas/meta.json'
import Head from 'next/head'

export default function Seo() {
  return (
    <Head>
      <script
        defer
        data-domain="moeki.dev"
        src="https://plausible.io/js/script.js"></script>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:url" content="https://moeki.dev" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://moeki.dev/img/me.jpg" />
    </Head>
  )
}
