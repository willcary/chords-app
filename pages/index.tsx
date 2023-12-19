import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Tabs from '@/components/Tabs'
import exampleChord from '@/assets/exampleChord'

const inter = Inter({ subsets: ['latin'] })

interface AllChords {
  main: {
    strings: number
    fretsOnChord: number
    name: string
    numberOfChords: number
  }
  tunings: {
    standard: string[]
  }
  keys: string[]
  suffixes: string[]
  chords: {}
}

export default function Home({
  allChords,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allChords)
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
        <div>
          <div>Key:</div>
          <div>Suffix:</div>
        </div>
        <Tabs
          tone={exampleChord.key}
          suffix={exampleChord.suffix}
          positions={exampleChord.positions}
        />
        <div>{allChords.main.name}</div>
      </main>
    </>
  )
}

export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3000/api/C')
  const allChords: AllChords = await res.json()

  return {
    props: {
      allChords,
    },
  }
}) satisfies GetStaticProps<{ allChords: AllChords }>
