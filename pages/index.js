import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden bg-blue-800">
      <Head>
        <title>Mac-Muzik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* sidebar */}
        <Sidebar />
        {/* center */}
      </main>
      <div>{/* player */}</div>
    </div>
  )
}
