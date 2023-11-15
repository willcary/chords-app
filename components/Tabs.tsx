import Tab from './tab/tab-main/Tab'

interface chordInterface {
  tone: string
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
export default function Tabs({ tone, suffix, positions }: chordInterface) {
  return (
    <div
      className='flex flex-row justify-center flex-wrap gap-4 my-4'
      data-testid='tabs'
    >
      {positions.map((position, version) => (
        <Tab
          key={`${tone}-${suffix}-${position.frets}`}
          tone='D'
          suffix='sus2'
          positions={position}
          version={version + 1}
        />
      ))}
    </div>
  )
}
