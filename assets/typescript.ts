interface ChordsC {
  [chordKey: string]: {
    main: {
      strings: number
      fretsOnChord: number
      name: string
      numberOfChords: number
    }
    tunings: {
      standard: string[]
    }
    keys: string[]
    suffixes: string[]
    chords: {}
  }
}
