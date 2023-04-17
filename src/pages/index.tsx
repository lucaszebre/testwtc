import Head from 'next/head'
import Nav from '@/components/Nav'
import Drops from '@/components/Drops'
export default function Home() {
  return (
    <>
      <Head>
        <title>WhenToCop?</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <>
      <Nav/>
      <Drops/>
      </>
    </>
  )
}
