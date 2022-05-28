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
{/* ----------------------------------------------------------------------------------------- */}
        <h1>test</h1>
        <a href='/'>Anasayfa</a>
{/* ----------------------------------------------------------------------------------------- */}
      </main>
    
      <Footer />
    </div>
  )
}