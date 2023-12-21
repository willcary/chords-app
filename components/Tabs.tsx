import Tab from './tab/Tab'
import { AllChordsProps, SpecificChordProps } from '@/assets/typescript'

//Refactor props to use multiple chords as in the guitar.json file.
export default function Tabs({ chords }: AllChordsProps) {
  return (
    <div
      className='flex flex-row justify-center flex-wrap gap-4 my-4'
      data-testid='tabs'
    >
      {chords.map((chord) => {
        const { key: tone, suffix, positions } = chord
        return (
          // Change styles accordingly for carousel sliders
          <div
            key={`${tone}${suffix}`}
            className='flex flex-row justify-center flex-wrap gap-4 my-4'
          >
            {positions.map((position, version) => (
              <Tab
                key={`${tone}${suffix}${position.frets}${position.fingers}`}
                tone={tone}
                suffix={suffix}
                positions={position}
                version={version + 1}
              />
            ))}
          </div>
        )
      })}
      {/* {chords.map((chord): SpecificChordProps => (
               
      ))} */}
      {/* {positions.map((position, version) => (
        <Tab
          key={`${tone}-${suffix}-${position.frets}`}
          tone='D'
          suffix='sus2'
          positions={position}
          version={version + 1}
        />
      ))} */}
    </div>
  )
}
