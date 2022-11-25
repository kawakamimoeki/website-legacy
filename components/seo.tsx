import React from 'react'
import Head from 'next/head'
import { useLocale } from '../hooks/use-locale'

export default function Seo() {
  const { t } = useLocale()
  return (
    <Head>
      <script
        defer
        data-domain="moeki.dev"
        src="https://plausible.io/js/script.js"></script>
      <title>{t.title}</title>
      <link rel="alternate" hrefLang="en" href="https://moeki.dev" />
      <link rel="alternate" hrefLang="ja" href="https://moeki.dev/ja" />
      <meta name="description" content={t.description} />
      <meta property="og:url" content="https://moeki.dev" />
      <meta property="og:title" content={t.title} />
      <meta property="og:site_name" content={t.title} />
      <meta property="og:description" content={t.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://moeki.dev/img/me.jpg" />
    </Head>
  )
}
