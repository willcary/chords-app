import String from './String'

export default function Fret({ strings }: { strings: number[] }) {
  return (
    <div className='fret'>
      {strings.map((string: number, index: number) => (
        <String key={`${string}-${index}`} string={string} />
      ))}
    </div>
  )
}
