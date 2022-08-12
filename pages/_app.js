import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout className="content">
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp