import { useState } from 'react'
import Head from 'next/head'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'
import Tabs from '@/components/Tabs'
import { AllChordsProps } from '@/assets/typescript'
import { guitarChordsFilterData as filterData } from '@/assets/chords/guitarChordsFilterData'
import guitarChordsC from '@/assets/chords/guitarChordsC'

const inter = Inter({ subsets: ['latin'] })

export default function Home({
  chordsC,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [chords, setChords] = useState(guitarChordsC)
  async function fetchNewChords() {
    const res = await fetch('http://localhost:3000/api/G')
    const chordsG: AllChordsProps = await res.json()
    const g = chordsG
    console.log(g)
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
        {/* Filter btns */}
        <div>
          <div>
            <p>Key:</p>
            <ul className='mx-auto flex flex-row gap-4 justify-center max-w-3xl overflow-auto whitespace-nowrap mb-4'>
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
            <ul className='mx-auto flex flex-row gap-4 max-w-3xl overflow-auto whitespace-nowrap'>
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
        <Tabs chords={chords} />
        <button onClick={() => fetchNewChords()}>Click to fetch</button>
      </main>
    </>
  )
}

export const getStaticProps = (async () => {
  const res = await fetch('http://localhost:3000/api/C')
  const chordsC: AllChordsProps = await res.json()

  return {
    props: {
      chordsC,
    },
  }
}) satisfies GetStaticProps<{ chordsC: AllChordsProps }>
