import SEO from '../components/seo'
import { ThemeProvider, useTheme } from 'next-themes'
import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/post.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react'

function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const root = window.document.documentElement
    const color = root.style.getPropertyValue('--initial-color-mode')
    setTheme(color)
  }, [setTheme])

  return (
    <>
      <SEO />
      <ThemeProvider attribute="class">
        <div
          className="leading-7 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
          style={{
            wordBreak: 'break-all',
            transition: '0.5s'
          }}>
          <Header />
          <div className="mx-auto max-w-2xl py-8 px-4">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
