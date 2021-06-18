import Head from 'next/head'
import MainPage from '../components/MainPage'
import Loader from '../components/Loader'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Space-X</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <MainPage /> */}
      <Loader />
    </div>
  )
}
