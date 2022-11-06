import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-amber-50 leading-7">
      <div className="p-7 max-w-2xl mx-auto">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
