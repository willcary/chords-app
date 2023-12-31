import Head from 'next/head'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Tabs from '@/components/Tabs'
import exampleChord from '@/assets/exampleChord'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
        <Tabs
          tone={exampleChord.key}
          suffix={exampleChord.suffix}
          positions={exampleChord.positions}
        />
      </main>
    </>
  )
}
