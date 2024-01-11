import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import FilterBtns from '@/components/tab/FilterBtns'
import Tabs from '@/components/tab/Tabs'
import { GuitarChordProps } from '@/assets/typescript'
import { guitarChordsFilterData as filterData } from '@/assets/chords/guitarChordsFilterData'
import guitarChordsC from '@/assets/chords/guitarChordsC'

export default function TabContainer() {
  const [chords, setChords] = useState<GuitarChordProps[]>(guitarChordsC)

  async function handleFetchChords(key: string, suffix: string) {
    if (key.endsWith('#')) {
      key = key.replace(/#$/, 'Sharp')
    }
    if (key.endsWith('b')) {
      key = key.replace(/b$/, 'Flat')
    }
    const apiUrl = suffix
      ? `http://localhost:3000/api/${key}?suffix=${suffix}`
      : `http://localhost:3000/api/${key}`
    console.log(apiUrl)
    const res = await fetch(apiUrl)
    const fetchedChordsObj: GuitarChordProps[] = await res.json()
    const fetchedChords: GuitarChordProps[] = Object.values(
      fetchedChordsObj
    )[0] as unknown as GuitarChordProps[]
    setChords(fetchedChords)
  }

  return (
    <>
      <FilterBtns
        filterData={filterData}
        handleFetchChords={handleFetchChords}
      />
      <Tabs chords={chords} handleFetchChords={handleFetchChords} />
    </>
  )
}
