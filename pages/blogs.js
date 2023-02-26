import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'


export default function Home() {


  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <h1>Blogs</h1>
      <p>
        ......
      </p>
      <Link href="/about">About</Link>
 
    </>
  )
}
