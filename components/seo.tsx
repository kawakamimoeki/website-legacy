import React from 'react'
import Head from 'next/head'
import { useLocale } from '../hooks/use-locale'

export default function Seo() {
  const { t } = useLocale()
  return (
    <Head>
      <title>{t.title}</title>
      <link rel="alternate" hrefLang="en-us" href="https://kawakamimoeki.com" />
      <link rel="alternate" hrefLang="ja" href="https://kawakamimoeki.com/ja" />
      <meta name="description" content={t.description} />
      <meta property="og:url" content="https://kawakamimoeki.com" />
      <meta property="og:title" content={t.title} />
      <meta property="og:site_name" content={t.title} />
      <meta property="og:description" content={t.description} />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://kawakamimoeki.com/img/kawakamimoeki.jpg"
      />
      <meta
        property="twitter:image"
        content="https://kawakamimoeki.com/img/kawakamimoeki.jpg"
      />
      <meta name="twitter:card" content="summary" />
    </Head>
  )
}
