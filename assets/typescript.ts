// export interface AllChordsProps {
//   [guitarChordKey: string]: {
//     key: string
//     suffix: string
//     positions: {
//       frets: number[]
//       fingers: number[]
//       baseFret: number
//       barres: number[]
//       capo?: boolean
//       midi?: number[]
//     }[]
//   }[]
// }

export interface ChordPositionProps {
  frets: number[]
  fingers: number[]
  baseFret: number
  barres: number[]
  capo?: boolean
  midi?: number[]
}

export interface GuitarChordProps {
  key: string
  suffix: string
  positions: ChordPositionProps[]
}

export interface SpecificChordProps {
  tone: string
  suffix: string
  positions: {
    frets: number[]
    fingers: number[]
    baseFret: number
    barres: number[]
    capo?: boolean
    midi?: number[]
  }[]
  handleFetchChords: any
}

export interface GuitarChordsFilterDataProps {
  main: {
    strings: number
    fretsOnChord: number
    name: string
    numberOfChords: number
  }
  tunings: { standard: string[] }
  keys: string[]
  suffixes: string[]
}
