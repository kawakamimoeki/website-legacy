import SEO from '../components/seo'
import { ThemeProvider, useTheme } from 'next-themes'
import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/post.css'
import Footer from '../components/footer'

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
          className="leading-7 text-gray-900 dark:bg-gray-900 dark:text-white"
          style={{ wordBreak: 'break-all' }}>
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
