import TabHeader from '../tab-header/TabHeader'
import Fret from './Fret'

const exampleChord = {
  key: 'D',
  suffix: 'sus2',
  positions: [
    {
      frets: [-1, -1, 0, 2, 3, 0],
      fingers: [0, 0, 0, 2, 3, 0],
      baseFret: 1,
      barres: [],
      midi: [50, 57, 62, 64],
    },
  ],
}
interface TabProps {
  tone: string
  suffix: string
  positions: number[]
}

export default function Tab({ tone, suffix, positions }: TabProps) {
  function createTabArray(data: number[]): number[][] {
    const tabArray = []
    for (let i = 1; i <= 4; i++) {
      let subArray: number[] = []
      data.forEach((position: number, index: number) => {
        if (position === i) {
          subArray.push(position)
        } else {
          subArray.push(0)
        }
      })
      tabArray.push(subArray)
    }
    return tabArray
  }

  const tabArray = createTabArray(exampleChord.positions[0].fingers)

  return (
    <div className='tab-container'>
      {/* tab header will need key, suffix, and frets props passed to it */}
      <TabHeader />
      {/* Each fret will need an array with fingers passed as props */}
      {tabArray.map((tab: number[], index: number) => {
        return <Fret key={`${tone}${suffix}-${index}`} strings={tab} />
      })}
    </div>
  )
}
