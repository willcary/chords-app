'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { GuitarChordsFilterDataProps } from '@/assets/typescript'

export default function FilterBtns({
  filterData,
  handleFetchChords,
}: {
  filterData: GuitarChordsFilterDataProps
  handleFetchChords: any
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedKey = (searchParams.get('key') || 'C') as string
  const selectedSuffix = (searchParams.get('suffix') || '') as string

  useEffect(() => {
    handleFetchChords(selectedKey, selectedSuffix)
  }, [router.query.key, router.query.suffix])

  return (
    <div>
      <div>
        <p className='gradient-text'>Key:</p>
        <ul className='mx-auto flex flex-row gap-4 justify-center max-w-3xl overflow-auto whitespace-nowrap mb-4'>
          {filterData.keys.map((key: string) => (
            <li key={key}>
              <Link
                href={`?${new URLSearchParams({
                  key,
                })}`}
              >
                {key}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className='gradient-text'>Suffix</p>
        <ul className='mx-auto flex flex-row gap-4 max-w-3xl overflow-auto whitespace-nowrap'>
          {filterData.suffixes.map((suffix: string) => (
            <li key={suffix}>
              <Link
                href={`?${new URLSearchParams({ key: selectedKey, suffix })}`}
              >
                {suffix}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
