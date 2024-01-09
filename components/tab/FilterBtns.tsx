'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function FilterBtns({ filterData, handleFetchChords }: any) {
  const searchParams = useSearchParams()

  const selectedKey = searchParams.get('key')
  const selectedSuffix = searchParams.get('suffix')

  return (
    <div>
      <div>
        <p className='gradient-text'>Key:</p>
        <ul className='mx-auto flex flex-row gap-4 justify-center max-w-3xl overflow-auto whitespace-nowrap mb-4'>
          {filterData.keys.map((key: string) => (
            <li key={key}>
              <Link href={`?key=${key}&suffix=${selectedSuffix}`}>{key}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className='gradient-text'>Suffix</p>
        <ul className='mx-auto flex flex-row gap-4 max-w-3xl overflow-auto whitespace-nowrap'>
          {filterData.suffixes.map((suffix: string) => (
            <li key={suffix}>
              <Link href={`?key=${selectedKey}&suffix=${suffix}`}>
                {suffix}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
