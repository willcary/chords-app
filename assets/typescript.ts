export interface AllChordsProps {
  [guitarChordKey: string]: {
    key: string
    suffix: string
    positions: {
      frets: number[]
      fingers: number[]
      baseFret: number
      barres: number[]
      capo?: boolean
      midi?: number[]
    }[]
  }[]
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
}
