import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import FilterBtns from '@/components/tab/FilterBtns'
import Tabs from '@/components/tab/Tabs'
import { GuitarChordProps } from '@/assets/typescript'
import { guitarChordsFilterData as filterData } from '@/assets/chords/guitarChordsFilterData'

export default function TabContainer() {
  const [chords, setChords] = useState<GuitarChordProps[]>([])

  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedKey = (searchParams.get('key') || 'C') as string
  const selectedSuffix = (searchParams.get('suffix') || '') as string

  useEffect(() => {
    handleFetchChords(selectedKey, selectedSuffix)
  }, [router.query.key, router.query.suffix])

  async function handleFetchChords(key: string, suffix: string) {
    if (key.endsWith('#')) {
      key = key.replace(/#$/, 'Sharp')
    }
    if (key.endsWith('b')) {
      key = key.replace(/b$/, 'Flat')
    }
    let apiUrl = ''
    const localDevUrlBase = 'http://localhost:3000/api/'
    const prodUrlBase = 'https://my-chords.vercel.app/api/'
    const env = process.env.NODE_ENV
    if (env === 'development') {
      apiUrl = suffix
        ? `${localDevUrlBase}${key}?suffix=${suffix}`
        : `${localDevUrlBase}${key}`
    } else {
      apiUrl = suffix
        ? `${prodUrlBase}${key}?suffix=${suffix}`
        : `${prodUrlBase}${key}`
    }

    const res = await fetch(apiUrl)
    if (!res.ok) {
      throw new Error('Failed to fetch chords. Status: ' + res.status)
    }
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
        selectedKey={selectedKey}
        selectedSuffix={selectedSuffix}
      />
      <Tabs chords={chords} handleFetchChords={handleFetchChords} />
    </>
  )
}
