import Tab from './tab/Tab'

interface chordInterface {
  key: string
  suffix: string
  positions: {
    frets: number[]
    fingers: number[]
    capo?: boolean
    baseFret: number
    barres: number[]
    midi?: number[]
  }[]
}

//Refactor props to use multiple chords as in the guitar.json file.
export default function Tabs({ key, suffix, positions }: chordInterface) {
  return (
    <div className='tabs'>
      {positions.map((position) => (
        <Tab
          key={`${key}-${suffix}-${position.frets}`}
          tone='D'
          suffix='sus2'
          positions={position}
        />
      ))}
    </div>
  )
}
