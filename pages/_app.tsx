import SEO from '../components/seo'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <ThemeProvider attribute="class">
        <div
          className="leading-7 bg-white text-gray-900 dark:bg-gray-900 dark:text-white"
          style={{
            transition: '0.5s'
          }}>
          <Header />
          <div className="pt-20 mx-auto max-w-2xl p-4">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
