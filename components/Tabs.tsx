export default function Tabs() {
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
      {
        frets: [-1, -1, 1, 1, 2, 4],
        fingers: [0, 0, 1, 1, 2, 4],
        barres: [1],
        baseFret: 2,
        midi: [52, 57, 62, 69],
      },
      {
        frets: [1, 1, 3, 3, 1, 1],
        fingers: [1, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 57, 62, 64, 69],
      },
      {
        frets: [-1, 1, 1, 1, 4, 4],
        fingers: [0, 1, 1, 1, 4, 4],
        barres: [1, 4],
        capo: true,
        baseFret: 7,
        midi: [52, 57, 62, 69, 74],
      },
    ],
  }
  return <div></div>
}
