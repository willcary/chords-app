import Link from 'next/link'
import TabHeaderO from './symbols/TabHeaderO'
import TabHeaderX from './symbols/TabHeaderX'

interface TabHeaderProps {
  tone: string
  suffix: string
  baseFret: number
  frets: number[]
  version: number
}

export default function TabHeader({
  tone,
  suffix,
  baseFret,
  frets,
  version,
}: TabHeaderProps) {
  return (
    <>
      <Link href={`?${new URLSearchParams({ key: tone, suffix })}`}>
        <p className='text-xl cursor-pointer'>
          {tone}
          <span className='text-xs'>{suffix}</span>{' '}
          <span className='text-sm italic'>(v{version})</span>
        </p>
      </Link>
      <div className='tab-header' data-testid='tab-header'>
        {frets.map((fret: number, index: number) => {
          return fret === -1 ? (
            <TabHeaderX key={`${tone}${suffix}-${index}`} />
          ) : (
            <TabHeaderO key={`${tone}${suffix}-${index}`} />
          )
        })}
        {baseFret !== 1 && <p className='base-fret'>{baseFret}</p>}
      </div>
    </>
  )
}
