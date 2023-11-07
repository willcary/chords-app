import String from './String'

export default function Fret({ strings }: { strings: number[] }) {
  return (
    <div className='fret' data-testid='fret'>
      {strings.map((string: number, index: number) => (
        <String key={`${string}-${index}`} string={string} />
      ))}
    </div>
  )
}
