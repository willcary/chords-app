import Tab from './tab/Tab'
import TabGroup from './tab/TabGroup'
import { AllChordsProps, SpecificChordProps } from '@/assets/typescript'

//Refactor props to use multiple chords as in the guitar.json file.
export default function Tabs({ chords }: AllChordsProps) {
  return (
    <div
      className='flex flex-row justify-center flex-wrap gap-x-4 gap-y-8 my-4'
      data-testid='tabs'
    >
      {chords.map((chord) => {
        const { key: tone, suffix, positions } = chord
        return (
          <TabGroup
            key={`${tone}-${suffix}`}
            tone={tone}
            suffix={suffix}
            positions={positions}
          />
        )
      })}
    </div>
  )
}
