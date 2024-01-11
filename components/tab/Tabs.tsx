import Tab from './Tab'
import TabGroup from './TabGroup'
import { GuitarChordProps, SpecificChordProps } from '@/assets/typescript'

//Refactor props to use multiple chords as in the guitar.json file.
export default function Tabs({
  chords,
  handleFetchChords,
}: {
  chords: GuitarChordProps[]
  handleFetchChords: any
}) {
  return (
    <div
      className='flex flex-row justify-center flex-wrap gap-x-4 gap-y-8 my-4'
      data-testid='tabs'
    >
      {chords.length === 1 ? (
        <>
          {chords[0].positions.map((position, index) => {
            const { key: tone, suffix } = chords[0]
            return (
              <Tab
                key={`${tone}${suffix}${position.fingers}${position.frets}`}
                tone={chords[0].key}
                suffix={chords[0].suffix}
                positions={position}
                version={index + 1}
                handleFetchChords={handleFetchChords}
              />
            )
          })}
        </>
      ) : chords.length > 1 ? (
        chords.map((chord) => {
          const { key: tone, suffix, positions } = chord
          return (
            <TabGroup
              key={`${tone}-${suffix}`}
              tone={tone}
              suffix={suffix}
              positions={positions}
              handleFetchChords={handleFetchChords}
            />
          )
        })
      ) : (
        <p>No chords available.</p>
      )}
    </div>
  )
}
