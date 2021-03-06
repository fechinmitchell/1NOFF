import '../styles/globals.css'
import "tailwindcss/tailwind.css"
import Link from 'next/link'
import Layout from '../components/Layout'

function Marketplace({ Component, pageProps }) {
  return ( 
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    /* <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">1NOFF</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Create INOFF
            </a>
          </Link>
          <Link href="/collection">
            <a className="mr-6 text-pink-500">
              Collection
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My INOFFs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
    <Component {...pageProps} />
    </div> */
  )
}

export default Marketplace 
