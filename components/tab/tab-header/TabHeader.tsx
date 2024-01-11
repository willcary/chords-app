import TabHeaderO from './symbols/TabHeaderO'
import TabHeaderX from './symbols/TabHeaderX'

interface TabHeaderProps {
  tone: string
  suffix: string
  baseFret: number
  frets: number[]
  version: number
  handleFetchChords: any
}

export default function TabHeader({
  tone,
  suffix,
  baseFret,
  frets,
  version,
  handleFetchChords,
}: TabHeaderProps) {
  return (
    <>
      <p
        className='text-xl cursor-pointer'
        onClick={() => handleFetchChords(tone, suffix)}
      >
        {tone}
        <span className='text-xs'>{suffix}</span>{' '}
        <span className='text-sm italic'>(v{version})</span>
      </p>
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
