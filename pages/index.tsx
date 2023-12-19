import { useState } from 'react'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Tabs from '@/components/Tabs'
import exampleChord from '@/assets/chords/exampleChord'
import { guitarChordsFilterData as filterData } from '@/assets/chords/guitarChordsFilterData'

const inter = Inter({ subsets: ['latin'] })

interface AllChords {
  [guitarChordKey: string]: {
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
    chords: {
      [chordKey: string]: {
        key: string
        suffix: string
        positions: {
          frets: number[]
          fingers: number[]
          baseFret: number
          barres: number[]
          capo?: boolean
          midi?: number[]
        }[]
      }
    }
  }
}

export default function Home({
  chordsC,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [otherChords, setOtherChords] = useState(chordsC)
  async function fetchNewChords() {
    const res = await fetch('http://localhost:3000/api/G')
    const chordsG: AllChords = await res.json()
    const g = chordsG
    console.log(g)
    setOtherChords({})
  }

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
          <div>
            <p>Key:</p>
            <ul className='mx-auto flex flex-row gap-4 justify-center max-w-3xl overflow-auto'>
              {filterData.keys.map((key) => (
                <li key={key}>
                  <button onClick={() => console.log(`${key} was clicked`)}>
                    {key}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Suffix</p>
            <ul className='mx-auto flex flex-row gap-4 justify-center max-w-3xl overflow-auto'>
              {filterData.suffixes.map((suffix) => (
                <li key={suffix}>
                  <button onClick={() => console.log(`${suffix} was clicked`)}>
                    {suffix}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Tabs
          tone={exampleChord.key}
          suffix={exampleChord.suffix}
          positions={exampleChord.positions}
        />
        <button onClick={() => fetchNewChords()}>Click to fetch</button>
        <p>
          Name:{' '}
          {otherChords.guitarChordsC.main &&
            otherChords.guitarChordsC.main.name}
        </p>
      </main>
    </>
  )
}

export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3000/api/C')
  const chordsC: AllChords = await res.json()

  return {
    props: {
      chordsC,
    },
  }
}) satisfies GetStaticProps<{ chordsC: AllChords }>
