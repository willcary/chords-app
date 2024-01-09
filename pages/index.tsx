import { useState } from 'react'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import TabContainer from '@/components/tab/TabContainer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // }: { InferGetStaticPropsType<typeof getStaticProps>, searchParams: { [key: string]: string | string[] | undefined }}) {

  return (
    <>
      <Head>
        <title>Chords App</title>
        <meta
          name='description'
          content='Easily access guitar chord diagrams'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>
        <h1>Guitar Chords</h1>
        <TabContainer />
      </main>
    </>
  )
}

// export const getStaticProps = (async () => {
//   const res = await fetch('http://localhost:3000/api/C')
//   const chordsC: GuitarChordProps[] = await res.json()

//   return {
//     props: {
//       chordsC,
//     },
//   }
// }) satisfies GetStaticProps<{ chordsC: GuitarChordProps[] }>
