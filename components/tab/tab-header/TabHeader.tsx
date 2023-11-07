import TabHeaderO from './symbols/TabHeaderO'
import TabHeaderX from './symbols/TabHeaderX'

interface TabHeaderProps {
  tone: string
  suffix: string
  baseFret: number
  frets: number[]
}

export default function TabHeader({
  tone,
  suffix,
  baseFret,
  frets,
}: TabHeaderProps) {
  return (
    <>
      <h2>{tone + suffix}</h2>
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
