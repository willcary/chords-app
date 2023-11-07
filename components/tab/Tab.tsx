import TabHeader from '../tab-header/TabHeader'
import Fret from './Fret'
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
}

export default function Tab({ tone, suffix, positions }: TabProps) {
  function createTabArray(frets: number[], fingers: number[]): number[][] {
    const tabArray = []
    for (let i = 1; i <= 4; i++) {
      let subArray: number[] = []
      frets.forEach((fret: number, index: number) => {
        if (fret === i) {
          subArray.push(fingers[index])
        } else {
          subArray.push(0)
        }
      })
      tabArray.push(subArray)
    }
    return tabArray
  }

  const tabArray = createTabArray(positions.frets, positions.fingers)

  return (
    <div className='tab-container'>
      <TabHeader
        tone={tone}
        suffix={suffix}
        baseFret={positions.baseFret}
        frets={positions.frets}
      />
      {tabArray.map((tab: number[], index: number) => {
        return <Fret key={`${tone}${suffix}-${index}`} strings={tab} />
      })}
    </div>
  )
}
