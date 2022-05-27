import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>PENU Official Web Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>penu1881@gmail.com</h1>
      </main>

      <Footer />
    </div>
  )
}
