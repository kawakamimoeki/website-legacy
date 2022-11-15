import '../styles/globals.css'
import '../styles/post.css'
import Footer from '../components/footer.jsx'

function MyApp({ Component, pageProps }) {
  return (
    <div className="leading-7 text-gray-900" style={{ wordBreak: 'break-all' }}>
      <div className="p-7 max-w-2xl mx-auto">
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
