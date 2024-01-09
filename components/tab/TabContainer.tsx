import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import FilterBtns from '@/components/tab/FilterBtns'
import Tabs from '@/components/Tabs'
import { GuitarChordProps } from '@/assets/typescript'
import { guitarChordsFilterData as filterData } from '@/assets/chords/guitarChordsFilterData'
import guitarChordsC from '@/assets/chords/guitarChordsC'

export default function TabContainer() {
  const [chords, setChords] = useState<GuitarChordProps[]>(guitarChordsC)
  const [filteredChords, setFilteredChords] =
    useState<GuitarChordProps[]>(guitarChordsC)

  useEffect(() => {
    setFilteredChords(chords)
  }, chords)
  function handleFilterSuffix(suffix: string) {
    // !!--- Bug Here, need to reset when fetching different key/chords and update filteredChords with new key/chords
    // Also, ideally this would be filtered within the API call and not here. To look into.
    if (!suffix) {
      setFilteredChords(chords)
      return
    }
    const updatedFilteredChords = chords.filter(
      (chord) => chord.suffix === suffix
    )
    setFilteredChords(updatedFilteredChords)
  }

  async function handleFetchChords(chordName: string) {
    if (chordName.endsWith('#')) {
      chordName = chordName.replace(/#$/, 'Sharp')
    }
    if (chordName.endsWith('b')) {
      chordName = chordName.replace(/b$/, 'Flat')
    }
    const res = await fetch(`http://localhost:3000/api/${chordName}`)
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
        handleFilterSuffix={handleFilterSuffix}
      />
      <Tabs chords={filteredChords} />
    </>
  )
}
