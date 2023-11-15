import TabHeader from './tab-header/TabHeader'
import Fret from './tab-main/Fret'
interface TabProps {
  tone: string
  suffix: string
  positions: {
    frets: number[]
    fingers: number[]
    capo?: boolean
    baseFret: number
    barres: number[]
    midi?: number[]
  }
  version: number
}

export default function Tab({ tone, suffix, positions, version }: TabProps) {
  function createTabArray(frets: number[], fingers: number[]): number[][] {
    const tabArray: number[][] = Array.from({ length: 4 }, () =>
      Array(frets.length).fill(0)
    )

    frets.forEach((fret, index) => {
      if (fret > 0 && fret <= 4) {
        tabArray[fret - 1][index] = fingers[index]
      }
    })

    return tabArray
  }

  const tabArray = createTabArray(positions.frets, positions.fingers)

  return (
    <div className='tab-container' data-testid='tab-container'>
      <TabHeader
        tone={tone}
        suffix={suffix}
        baseFret={positions.baseFret}
        frets={positions.frets}
        version={version}
      />
      {tabArray.map((tab: number[], index: number) => {
        return <Fret key={`${tone}${suffix}-${index}`} strings={tab} />
      })}
    </div>
  )
}
