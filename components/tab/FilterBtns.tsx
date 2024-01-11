'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GuitarChordsFilterDataProps } from '@/assets/typescript'

export default function FilterBtns({
  filterData,
  selectedKey,
  selectedSuffix,
}: {
  filterData: GuitarChordsFilterDataProps
  selectedKey: string
  selectedSuffix: string
}) {
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
                className={key === selectedKey ? 'text-secondaryClr' : ''}
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
              {selectedSuffix !== suffix ? (
                <Link
                  href={`?${new URLSearchParams({ key: selectedKey, suffix })}`}
                >
                  {suffix}
                </Link>
              ) : (
                <Link
                  href={`?${new URLSearchParams({
                    key: selectedKey,
                  })}`}
                  className='text-secondaryClr'
                >
                  {suffix}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
