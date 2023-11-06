import Tab from './tab/Tab'
import exampleChord from '@/assets/exampleChord'

export default function Tabs() {
  return (
    <div className='tabs'>
      <Tab tone='D' suffix='sus2' positions={exampleChord.positions[0]} />
      <Tab tone='D' suffix='sus2' positions={exampleChord.positions[1]} />
      <Tab tone='D' suffix='sus2' positions={exampleChord.positions[2]} />
      <Tab tone='D' suffix='sus2' positions={exampleChord.positions[3]} />
    </div>
  )
}
