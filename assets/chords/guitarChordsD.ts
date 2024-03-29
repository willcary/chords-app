const guitarChordsD = [
  {
    key: 'D',
    suffix: 'major',
    positions: [
      {
        frets: [-1, -1, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 62, 66],
      },
      {
        frets: [-1, 4, 3, 1, 2, 1],
        fingers: [0, 4, 3, 1, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 2,
        midi: [50, 54, 57, 62, 66],
      },
      {
        frets: [-1, 1, 3, 3, 3, 1],
        fingers: [0, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [50, 57, 62, 66, 69],
      },
      {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 62, 66, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'minor',
    positions: [
      {
        frets: [-1, -1, 0, 2, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 62, 65],
      },
      {
        frets: [1, 1, 3, 3, 2, 1],
        fingers: [1, 1, 3, 4, 2, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 57, 62, 65, 69],
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 6,
        barres: [],
        midi: [53, 57, 62, 65],
      },
      {
        frets: [1, 3, 3, 1, 1, 1],
        fingers: [1, 3, 4, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 62, 65, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'dim',
    positions: [
      {
        frets: [-1, -1, 0, 1, -1, 1],
        fingers: [0, 0, 0, 1, 0, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 56, 65],
      },
      {
        frets: [-1, 3, 1, -1, 1, 2],
        fingers: [0, 4, 1, 0, 2, 3],
        baseFret: 3,
        barres: [],
        midi: [50, 53, 62, 68],
      },
      {
        frets: [-1, 1, 2, 3, 2, -1],
        fingers: [0, 1, 2, 4, 3, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 56, 62, 65],
      },
      {
        frets: [3, 1, -1, 3, 2, -1],
        fingers: [3, 1, 0, 4, 2, 0],
        baseFret: 8,
        barres: [],
        midi: [50, 53, 65, 68],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'dim7',
    positions: [
      {
        frets: [-1, -1, 0, 1, 0, 1],
        fingers: [0, 0, 0, 2, 0, 3],
        baseFret: 1,
        barres: [],
        midi: [50, 56, 59, 65],
      },
      {
        frets: [-1, 2, 3, 1, 3, 1],
        fingers: [0, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4,
        midi: [50, 56, 59, 65, 68],
      },
      {
        frets: [-1, 2, 0, 4, 3, 1],
        fingers: [0, 2, 0, 4, 3, 1],
        baseFret: 7,
        barres: [],
        midi: [53, 50, 65, 68, 71],
      },
      {
        frets: [1, 2, 3, 1, 3, 1],
        fingers: [1, 2, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 56, 62, 65, 71, 74],
      },
    ],
  },
  {
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
  },
  {
    key: 'D',
    suffix: 'sus4',
    positions: [
      {
        frets: [-1, -1, 0, 2, 3, 3],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 62, 67],
      },
      {
        frets: [-1, 3, 0, 0, 1, 3],
        fingers: [0, 3, 0, 0, 1, 4],
        baseFret: 3,
        barres: [],
        midi: [50, 50, 55, 62, 69],
      },
      {
        frets: [1, 1, 3, 3, 4, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 57, 62, 67, 69],
      },
      {
        frets: [1, 3, 3, 3, 1, 1],
        fingers: [1, 2, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 62, 67, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'sus2sus4',
    positions: [
      {
        frets: [-1, 1, 1, 3, 1, 1],
        fingers: [0, 1, 1, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [50, 55, 62, 64, 69],
      },
      {
        frets: [-1, 4, 1, 1, 2, 2],
        fingers: [0, 4, 1, 1, 2, 2],
        barres: [1, 2],
        baseFret: 2,
        midi: [50, 52, 57, 62, 67],
      },
      {
        frets: [1, 1, 3, 3, 1, 3],
        fingers: [1, 1, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 55, 62, 67, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: '7sus4',
    positions: [
      {
        frets: [-1, -1, 0, 2, 1, 3],
        fingers: [0, 0, 0, 2, 1, 4],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 60, 67],
      },
      {
        frets: [-1, 3, 3, 3, 1, -1],
        fingers: [0, 2, 3, 4, 1, 0],
        baseFret: 3,
        barres: [],
        midi: [50, 55, 60, 62],
      },
      {
        frets: [1, 1, 3, 1, 4, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 57, 60, 67, 69],
      },
      {
        frets: [1, 3, 1, 3, 1, 1],
        fingers: [1, 3, 1, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 60, 67, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'alt',
    positions: [
      {
        frets: [-1, -1, 0, 1, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 56, 62, 66],
      },
      {
        frets: [-1, 3, 2, -1, 1, 2],
        fingers: [0, 4, 2, 0, 1, 3],
        baseFret: 3,
        barres: [],
        midi: [50, 54, 62, 68],
      },
      {
        frets: [-1, 1, 2, 3, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 56, 62, 66],
      },
      {
        frets: [-1, 3, 0, 3, 1, 2],
        fingers: [0, 3, 0, 4, 1, 2],
        baseFret: 9,
        barres: [],
        midi: [56, 50, 66, 68, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'aug',
    positions: [
      {
        frets: [-1, -1, 0, 3, 3, 2],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 1,
        barres: [],
        midi: [50, 58, 62, 66],
      },
      {
        frets: [-1, 3, 2, 1, 1, -1],
        fingers: [0, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 3,
        midi: [50, 54, 58, 62],
      },
      {
        frets: [4, 3, 2, 1, 1, -1],
        fingers: [4, 3, 2, 1, 1, 0],
        barres: [1],
        baseFret: 7,
        midi: [50, 54, 58, 62, 66],
      },
      {
        frets: [1, -1, 3, 2, 2, -1],
        fingers: [1, 0, 4, 2, 3, 0],
        baseFret: 10,
        barres: [],
        midi: [50, 62, 66, 70],
      },
    ],
  },
  {
    key: 'D',
    suffix: '5',
    positions: [
      {
        frets: [1, 3, -1, -1, -1, -1],
        fingers: [1, 3, 0, 0, 0, 0],
        baseFret: 10,
        barres: [],
        midi: [50, 57],
      },
      {
        frets: [-1, 1, 3, -1, -1, -1],
        fingers: [0, 1, 3, 0, 0, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 57],
      },
      {
        frets: [1, 3, 3, -1, -1, -1],
        fingers: [1, 3, 4, 0, 0, 0],
        baseFret: 10,
        barres: [],
        midi: [50, 57, 62],
      },
    ],
  },
  {
    key: 'D',
    suffix: '6',
    positions: [
      {
        frets: [-1, -1, 0, 2, 0, 2],
        fingers: [0, 0, 0, 2, 0, 3],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 59, 66],
      },
      {
        frets: [-1, 3, 2, 2, 1, -1],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 3,
        barres: [],
        midi: [50, 54, 59, 62],
      },
      {
        frets: [-1, 1, 3, 3, 3, 3],
        fingers: [0, 1, 3, 3, 3, 4],
        barres: [3],
        baseFret: 5,
        midi: [50, 57, 62, 66, 71],
      },
      {
        frets: [1, 3, 1, 1, 4, 1],
        fingers: [1, 3, 1, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 7,
        midi: [47, 54, 57, 62, 69, 71],
      },
    ],
  },
  {
    key: 'D',
    suffix: '69',
    positions: [
      {
        frets: [-1, 4, 3, 1, 0, 0],
        fingers: [0, 4, 3, 1, 0, 0],
        baseFret: 2,
        barres: [],
        midi: [50, 54, 57, 59, 64],
      },
      {
        frets: [-1, 2, 1, 1, 2, 2],
        fingers: [0, 2, 1, 1, 3, 4],
        barres: [1],
        baseFret: 4,
        midi: [50, 54, 59, 64, 69],
      },
      {
        frets: [2, 1, 1, 1, 2, 2],
        fingers: [2, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 9,
        midi: [50, 54, 59, 64, 69, 74],
      },
      {
        frets: [-1, 2, 2, 1, 2, 2],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [2],
        baseFret: 11,
        midi: [57, 62, 66, 71, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: '7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 1, 2],
        fingers: [0, 0, 0, 2, 1, 3],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 60, 66],
      },
      {
        frets: [-1, 3, 2, 3, 1, -1],
        fingers: [0, 3, 2, 4, 1, 0],
        baseFret: 3,
        barres: [],
        midi: [50, 54, 60, 62],
      },
      {
        frets: [1, 1, 3, 1, 3, 1],
        fingers: [1, 1, 3, 1, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 57, 60, 66, 69],
      },
      {
        frets: [1, 3, 1, 2, 1, 1],
        fingers: [1, 3, 1, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 60, 66, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: '7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 1, 2],
        fingers: [0, 0, 0, 1, 1, 2],
        barres: [1],
        baseFret: 1,
        midi: [50, 56, 60, 66],
      },
      {
        frets: [-1, -1, 2, 3, 1, 2],
        fingers: [0, 0, 2, 4, 1, 3],
        baseFret: 3,
        barres: [],
        midi: [54, 60, 62, 68],
      },
      {
        frets: [-1, 1, 2, 1, 3, -1],
        fingers: [0, 1, 2, 1, 3, 0],
        barres: [1],
        baseFret: 5,
        midi: [50, 56, 60, 66],
      },
      {
        frets: [2, -1, 2, 3, 1, -1],
        fingers: [2, 0, 3, 4, 1, 0],
        baseFret: 9,
        barres: [],
        midi: [50, 60, 66, 68],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'aug7',
    positions: [
      {
        frets: [-1, -1, 0, 3, 1, 2],
        fingers: [0, 0, 0, 4, 1, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 58, 60, 66],
      },
      {
        frets: [-1, 2, 1, 2, -1, 3],
        fingers: [0, 2, 1, 3, 0, 4],
        baseFret: 4,
        barres: [],
        midi: [50, 54, 60, 70],
      },
      {
        frets: [-1, 1, 4, 1, 3, 2],
        fingers: [0, 1, 4, 1, 3, 2],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [50, 58, 60, 66, 70],
      },
      {
        frets: [1, -1, 1, 2, 2, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 10,
        barres: [],
        midi: [50, 60, 66, 70],
      },
    ],
  },
  {
    key: 'D',
    suffix: '9',
    positions: [
      {
        frets: [2, 2, 1, 2, 2, 2],
        fingers: [2, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 4,
        midi: [45, 50, 54, 60, 64, 69],
      },
      {
        frets: [-1, 1, 0, 1, 1, 2],
        fingers: [0, 1, 0, 2, 3, 4],
        baseFret: 7,
        barres: [],
        midi: [52, 50, 62, 66, 72],
      },
      {
        frets: [2, 1, 2, 1, 2, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 9,
        midi: [50, 54, 60, 64, 69],
      },
      {
        frets: [1, 3, 1, 2, 1, 3],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 60, 66, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: '9b5',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4,
        midi: [50, 54, 60, 64, 68],
      },
      {
        frets: [-1, 1, 2, 1, 3, 0],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 56, 60, 66, 64],
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9,
        midi: [50, 54, 60, 64, 68, 74],
      },
      {
        frets: [1, 2, 1, 2, -1, 3],
        fingers: [1, 2, 1, 3, 0, 4],
        barres: [1],
        baseFret: 10,
        midi: [50, 56, 60, 66, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'aug9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 2, 3],
        fingers: [0, 2, 1, 3, 3, 4],
        barres: [2],
        baseFret: 4,
        midi: [50, 54, 60, 64, 70],
      },
      {
        frets: [-1, 3, 0, 1, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 5,
        barres: [],
        midi: [52, 50, 60, 66, 70],
      },
      {
        frets: [2, 1, 2, 1, 3, -1],
        fingers: [2, 1, 3, 1, 4, 0],
        barres: [1],
        capo: true,
        baseFret: 9,
        midi: [50, 54, 60, 64, 70],
      },
      {
        frets: [1, -1, 1, 2, 2, 0],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 10,
        barres: [],
        midi: [50, 60, 66, 70, 64],
      },
    ],
  },
  {
    key: 'D',
    suffix: '7b9',
    positions: [
      {
        frets: [-1, -1, 0, 4, 3, 1],
        fingers: [0, 0, 0, 4, 3, 1],
        baseFret: 2,
        barres: [],
        midi: [50, 60, 63, 66],
      },
      {
        frets: [-1, 2, 1, 2, 1, 2],
        fingers: [0, 2, 1, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 4,
        midi: [50, 54, 60, 63, 69],
      },
      {
        frets: [-1, 2, 0, 1, 3, 1],
        fingers: [0, 2, 0, 1, 4, 1],
        barres: [1],
        baseFret: 5,
        midi: [51, 50, 60, 66, 69],
      },
      {
        frets: [3, 2, 3, 1, -1, -1],
        fingers: [3, 2, 4, 1, 0, 0],
        baseFret: 8,
        barres: [],
        midi: [50, 54, 60, 63],
      },
    ],
  },
  {
    key: 'D',
    suffix: '7#9',
    positions: [
      {
        frets: [-1, 2, 1, 2, 3, -1],
        fingers: [0, 2, 1, 3, 4, 0],
        baseFret: 4,
        barres: [],
        midi: [50, 54, 60, 65],
      },
      {
        frets: [0, 0, 0, 4, 1, 2],
        fingers: [0, 0, 0, 4, 1, 2],
        baseFret: 7,
        barres: [],
        midi: [40, 45, 50, 65, 66, 72],
      },
      {
        frets: [-1, 2, 1, 1, 1, 2],
        fingers: [0, 2, 1, 1, 1, 3],
        barres: [1],
        capo: true,
        baseFret: 7,
        midi: [53, 57, 62, 66, 72],
      },
      {
        frets: [1, 3, 1, 2, 1, 4],
        fingers: [1, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 60, 66, 69, 77],
      },
    ],
  },
  {
    key: 'D',
    suffix: '11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 1, 2],
        fingers: [0, 0, 0, 0, 1, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 55, 60, 66],
      },
      {
        frets: [-1, 3, 2, 3, 1, 1],
        fingers: [0, 3, 2, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 3,
        midi: [50, 54, 60, 62, 67],
      },
      {
        frets: [-1, 1, 1, 1, 3, 1],
        fingers: [0, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [50, 55, 60, 66, 69],
      },
      {
        frets: [-1, 3, 1, 1, 2, 2],
        fingers: [1, 1, 1, 2, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 7,
        midi: [54, 57, 62, 67, 72],
      },
    ],
  },
  {
    key: 'D',
    suffix: '9#11',
    positions: [
      {
        frets: [-1, -1, 0, 1, 1, 2],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 1,
        barres: [],
        midi: [50, 56, 60, 66],
      },
      {
        frets: [-1, 2, 1, 2, 2, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 4,
        midi: [50, 54, 60, 64, 68],
      },
      {
        frets: [-1, 3, 0, 1, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 7,
        barres: [],
        midi: [54, 50, 62, 68, 72],
      },
      {
        frets: [2, 1, 2, 1, 1, 2],
        fingers: [2, 1, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 9,
        midi: [50, 54, 60, 64, 68, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: '13',
    positions: [
      {
        frets: [-1, -1, 0, 4, 1, 2],
        fingers: [0, 0, 0, 4, 1, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 59, 60, 66],
      },
      {
        frets: [1, 1, 1, 1, 3, 3],
        fingers: [1, 1, 1, 1, 3, 4],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 55, 60, 66, 71],
      },
      {
        frets: [3, 2, 0, 2, 0, 1],
        fingers: [4, 2, 0, 3, 0, 1],
        baseFret: 8,
        barres: [],
        midi: [50, 54, 50, 64, 59, 72],
      },
      {
        frets: [1, -1, 1, 2, 3, -1],
        fingers: [1, 0, 2, 3, 4, 0],
        baseFret: 10,
        barres: [],
        midi: [50, 60, 66, 71],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'maj7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 2, 2],
        fingers: [0, 0, 0, 1, 1, 1],
        barres: [2],
        capo: true,
        baseFret: 1,
        midi: [50, 57, 61, 66],
      },
      {
        frets: [-1, 4, 3, 1, 1, 1],
        fingers: [0, 4, 3, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2,
        midi: [50, 54, 57, 61, 66],
      },
      {
        frets: [1, 1, 3, 2, 3, 1],
        fingers: [1, 1, 3, 2, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 57, 61, 66, 69],
      },
      {
        frets: [-1, -1, 1, 1, 1, 3],
        fingers: [0, 0, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 7,
        midi: [57, 62, 66, 73],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'maj7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 2, 2],
        fingers: [0, 0, 0, 1, 2, 3],
        baseFret: 1,
        barres: [],
        midi: [50, 56, 61, 66],
      },
      {
        frets: [-1, 1, 2, 2, 3, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 56, 61, 66],
      },
      {
        frets: [2, 1, 3, 3, 1, 1],
        fingers: [2, 1, 3, 4, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 9,
        midi: [50, 54, 61, 66, 68, 73],
      },
      {
        frets: [1, 2, 2, 2, -1, 1],
        fingers: [1, 2, 3, 4, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 56, 61, 66, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'maj7#5',
    positions: [
      {
        frets: [-1, -1, 0, 3, 2, 2],
        fingers: [0, 0, 0, 4, 2, 3],
        baseFret: 1,
        barres: [],
        midi: [50, 58, 61, 66],
      },
      {
        frets: [1, 4, 3, 2, 1, 1],
        fingers: [1, 4, 3, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2,
        midi: [42, 50, 54, 58, 61, 66],
      },
      {
        frets: [-1, 1, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 5,
        barres: [],
        midi: [50, 50, 61, 66, 70],
      },
      {
        frets: [-1, -1, 0, 3, 3, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 9,
        barres: [],
        midi: [50, 66, 70, 73],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'maj9',
    positions: [
      {
        frets: [-1, 4, 1, 1, 1, 1],
        fingers: [0, 4, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 2,
        midi: [50, 52, 57, 61, 66],
      },
      {
        frets: [-1, 2, 1, 3, 1, -1],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 4,
        barres: [],
        midi: [50, 54, 61, 63],
      },
      {
        frets: [-1, 3, 0, 3, 1, 3],
        fingers: [0, 2, 0, 3, 1, 4],
        baseFret: 7,
        barres: [],
        midi: [54, 50, 64, 66, 73],
      },
      {
        frets: [1, -1, 2, 2, 1, 3],
        fingers: [1, 0, 2, 3, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 61, 66, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'maj11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 2, 2],
        fingers: [0, 0, 0, 0, 1, 1],
        barres: [2],
        baseFret: 1,
        midi: [50, 55, 61, 66],
      },
      {
        frets: [1, 1, 1, 2, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 55, 61, 66, 69],
      },
      {
        frets: [-1, 3, 0, 1, 2, 3],
        fingers: [0, 3, 0, 1, 2, 4],
        baseFret: 7,
        barres: [],
        midi: [54, 50, 62, 67, 73],
      },
      {
        frets: [1, 1, 2, 2, 1, 1],
        fingers: [1, 1, 2, 3, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 55, 61, 66, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'maj13',
    positions: [
      {
        frets: [-1, -1, 0, 4, 2, 2],
        fingers: [0, 0, 0, 3, 1, 1],
        barres: [2],
        baseFret: 1,
        midi: [50, 59, 61, 66],
      },
      {
        frets: [-1, 4, 3, 3, 1, 0],
        fingers: [0, 4, 2, 3, 1, 0],
        baseFret: 2,
        barres: [],
        midi: [50, 54, 59, 61, 64],
      },
      {
        frets: [-1, 1, 1, 2, 3, 3],
        fingers: [0, 1, 1, 2, 3, 4],
        barres: [1],
        baseFret: 5,
        midi: [50, 55, 61, 66, 71],
      },
      {
        frets: [2, 1, 1, 1, 2, 1],
        fingers: [2, 1, 1, 1, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 9,
        midi: [50, 54, 59, 64, 69, 73],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'm6',
    positions: [
      {
        frets: [-1, -1, 0, 2, 0, 1],
        fingers: [0, 0, 0, 2, 0, 1],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 59, 65],
      },
      {
        frets: [-1, 3, 1, 2, 1, 3],
        fingers: [0, 3, 1, 2, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 3,
        midi: [50, 53, 59, 62, 69],
      },
      {
        frets: [-1, 1, 3, -1, 2, 3],
        fingers: [0, 1, 3, 0, 2, 4],
        baseFret: 5,
        barres: [],
        midi: [50, 57, 65, 71],
      },
      {
        frets: [2, -1, 1, 2, 2, 2],
        fingers: [2, 0, 1, 3, 3, 3],
        barres: [2],
        baseFret: 9,
        midi: [50, 59, 65, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'm7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 1, 1],
        fingers: [0, 0, 0, 3, 1, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 60, 65],
      },
      {
        frets: [-1, 1, 3, 1, 2, 1],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [1],
        baseFret: 5,
        midi: [50, 57, 60, 65, 69],
      },
      {
        frets: [-1, -1, 2, 2, 1, 3],
        fingers: [0, 0, 2, 3, 1, 4],
        baseFret: 6,
        barres: [],
        midi: [57, 62, 65, 72],
      },
      {
        frets: [1, 3, 1, 1, 1, 1],
        fingers: [1, 3, 1, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 60, 65, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'm7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 1, 1],
        fingers: [0, 0, 0, 1, 1, 1],
        barres: [1],
        baseFret: 1,
        midi: [50, 56, 60, 65],
      },
      {
        frets: [-1, 3, 1, 3, 1, 2],
        fingers: [0, 3, 1, 4, 1, 2],
        barres: [1],
        baseFret: 3,
        midi: [50, 53, 60, 62, 68],
      },
      {
        frets: [-1, 1, 2, 1, 2, -1],
        fingers: [0, 1, 3, 2, 4, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 56, 60, 65],
      },
      {
        frets: [-1, 1, 0, 3, 2, 1],
        fingers: [0, 1, 0, 4, 3, 2],
        baseFret: 8,
        barres: [],
        midi: [53, 50, 65, 68, 72],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'm9',
    positions: [
      {
        frets: [1, 0, 0, 2, 1, 0],
        fingers: [1, 0, 0, 3, 2, 0],
        baseFret: 1,
        barres: [],
        midi: [41, 45, 50, 57, 60, 64],
      },
      {
        frets: [-1, 3, 1, 3, 3, 3],
        fingers: [0, 2, 1, 3, 4, 4],
        barres: [3],
        baseFret: 3,
        midi: [50, 53, 60, 64, 69],
      },
      {
        frets: [-1, 1, 3, 1, 2, 0],
        fingers: [0, 1, 4, 2, 3, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 57, 60, 65, 64],
      },
      {
        frets: [1, 3, 1, 1, 1, 3],
        fingers: [1, 3, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 60, 65, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'm69',
    positions: [
      {
        frets: [-1, 4, 2, 1, 0, 0],
        fingers: [0, 4, 2, 1, 0, 0],
        baseFret: 2,
        barres: [],
        midi: [50, 53, 57, 59, 64],
      },
      {
        frets: [-1, 3, 1, 2, 3, 0],
        fingers: [0, 3, 1, 2, 4, 0],
        baseFret: 3,
        barres: [],
        midi: [50, 53, 59, 64, 64],
      },
      {
        frets: [-1, 2, 0, 2, 1, 2],
        fingers: [0, 2, 0, 3, 1, 4],
        baseFret: 6,
        barres: [],
        midi: [52, 50, 62, 65, 71],
      },
      {
        frets: [-1, 3, 3, 1, 3, 3],
        fingers: [0, 2, 2, 1, 3, 4],
        barres: [3],
        baseFret: 10,
        midi: [57, 62, 65, 71, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'm11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 1, 1],
        fingers: [0, 0, 0, 0, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 1,
        midi: [50, 55, 60, 65],
      },
      {
        frets: [-1, 3, 1, 3, 3, 1],
        fingers: [0, 2, 1, 3, 4, 1],
        barres: [1],
        capo: true,
        baseFret: 3,
        midi: [50, 53, 60, 64, 67],
      },
      {
        frets: [3, 1, 3, 2, 1, 1],
        fingers: [3, 1, 4, 2, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 8,
        midi: [50, 53, 60, 64, 67, 72],
      },
      {
        frets: [1, 1, 1, 1, 1, 3],
        fingers: [1, 1, 1, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 55, 60, 65, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'mmaj7',
    positions: [
      {
        frets: [-1, -1, 0, 2, 2, 1],
        fingers: [0, 0, 0, 2, 3, 1],
        baseFret: 1,
        barres: [],
        midi: [50, 57, 61, 65],
      },
      {
        frets: [-1, 4, 2, 1, 1, 0],
        fingers: [0, 4, 2, 1, 1, 0],
        barres: [1],
        baseFret: 2,
        midi: [50, 53, 57, 61, 64],
      },
      {
        frets: [1, 1, 3, 2, 2, 1],
        fingers: [1, 1, 4, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 57, 61, 65, 69],
      },
      {
        frets: [1, 3, 2, 1, 1, 1],
        fingers: [1, 3, 2, 1, 1, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 61, 65, 69, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'mmaj7b5',
    positions: [
      {
        frets: [-1, -1, 0, 1, 2, 1],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: [],
        midi: [50, 56, 61, 65],
      },
      {
        frets: [1, 2, 3, 3, 3, -1],
        fingers: [1, 2, 3, 3, 3, 0],
        barres: [3],
        baseFret: 4,
        midi: [44, 50, 56, 61, 65],
      },
      {
        frets: [-1, 1, 2, 2, 2, -1],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 56, 61, 65],
      },
      {
        frets: [1, 2, 2, 1, -1, 1],
        fingers: [1, 2, 2, 1, 0, 1],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 56, 61, 65, 74],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'mmaj9',
    positions: [
      {
        frets: [-1, 3, 1, 4, 3, 0],
        fingers: [0, 2, 1, 4, 3, 0],
        baseFret: 3,
        barres: [],
        midi: [50, 53, 61, 64, 64],
      },
      {
        frets: [-1, 3, 0, 2, 2, 1],
        fingers: [0, 4, 0, 2, 3, 1],
        baseFret: 5,
        barres: [],
        midi: [52, 50, 61, 65, 69],
      },
      {
        frets: [-1, 1, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 8,
        barres: [],
        midi: [53, 50, 64, 69, 73],
      },
      {
        frets: [1, 3, 2, 1, 1, 3],
        fingers: [1, 3, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 57, 61, 65, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'mmaj11',
    positions: [
      {
        frets: [-1, -1, 0, 0, 2, 1],
        fingers: [0, 0, 0, 0, 2, 1],
        baseFret: 1,
        barres: [],
        midi: [50, 55, 61, 65],
      },
      {
        frets: [-1, 3, 1, 4, 3, 1],
        fingers: [0, 2, 1, 4, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 3,
        midi: [50, 53, 61, 64, 67],
      },
      {
        frets: [1, 1, 1, 3, 3, 1],
        fingers: [1, 1, 1, 2, 3, 1],
        barres: [1],
        capo: true,
        baseFret: 5,
        midi: [45, 50, 55, 62, 66, 69],
      },
      {
        frets: [1, 1, 2, 1, 1, 3],
        fingers: [1, 1, 2, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [50, 55, 61, 65, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'add9',
    positions: [
      {
        frets: [-1, 4, 3, 1, 4, 1],
        fingers: [0, 3, 2, 1, 4, 1],
        barres: [1],
        baseFret: 2,
        midi: [50, 54, 57, 64, 66],
      },
      {
        frets: [-1, 1, 3, 3, 3, 0],
        fingers: [0, 1, 2, 3, 4, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 57, 62, 66, 64],
      },
      {
        frets: [-1, -1, 0, 3, 1, 4],
        fingers: [0, 0, 0, 3, 1, 4],
        baseFret: 7,
        barres: [],
        midi: [50, 64, 66, 74],
      },
      {
        frets: [-1, -1, 3, 2, 1, 3],
        fingers: [0, 0, 3, 2, 1, 4],
        baseFret: 10,
        barres: [],
        midi: [62, 66, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: 'madd9',
    positions: [
      {
        frets: [-1, 4, 2, 1, 2, 0],
        fingers: [0, 4, 2, 1, 3, 0],
        baseFret: 2,
        barres: [],
        midi: [50, 53, 57, 62, 64],
      },
      {
        frets: [-1, 4, 2, 1, 4, -1],
        fingers: [0, 3, 2, 1, 4, 0],
        baseFret: 2,
        barres: [],
        midi: [50, 53, 57, 64],
      },
      {
        frets: [-1, 1, 3, 3, 2, 0],
        fingers: [0, 1, 3, 4, 2, 0],
        baseFret: 5,
        barres: [],
        midi: [50, 57, 62, 65, 64],
      },
      {
        frets: [-1, -1, 3, 1, 1, 3],
        fingers: [0, 0, 3, 1, 1, 4],
        barres: [1],
        capo: true,
        baseFret: 10,
        midi: [62, 65, 69, 76],
      },
    ],
  },
  {
    key: 'D',
    suffix: '/F#',
    positions: [
      {
        frets: [2, 0, 0, 2, 3, 2],
        fingers: [1, 0, 0, 2, 4, 3],
        baseFret: 1,
        barres: [],
        midi: [42, 45, 50, 57, 62, 66],
      },
      {
        frets: [1, 4, 3, 1, 2, 1],
        fingers: [1, 4, 3, 1, 2, 1],
        barres: [1],
        baseFret: 2,
        midi: [42, 50, 54, 57, 62, 66],
      },
      {
        frets: [-1, -1, 3, 1, 2, 4],
        fingers: [0, 0, 3, 1, 2, 4],
        baseFret: 2,
        barres: [],
        midi: [54, 57, 62, 69],
      },
    ],
  },
  {
    key: 'D',
    suffix: '/A',
    positions: [
      {
        frets: [-1, 0, 0, 2, 3, 2],
        fingers: [0, 0, 0, 1, 3, 2],
        baseFret: 1,
        barres: [],
        midi: [45, 50, 57, 62, 66],
      },
      {
        frets: [1, 1, 3, 3, 3, 1],
        fingers: [1, 1, 2, 3, 4, 1],
        barres: [1],
        baseFret: 5,
        midi: [45, 50, 57, 62, 66, 69],
      },
      {
        frets: [2, 2, 1, 4, 4, -1],
        fingers: [2, 3, 1, 4, 4, 0],
        barres: [4],
        baseFret: 4,
        midi: [45, 50, 54, 62, 66],
      },
    ],
  },
  {
    key: 'D',
    suffix: '/Bb',
    positions: [
      {
        frets: [-1, 1, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 1,
        barres: [],
        midi: [46, 50, 57, 62, 66],
      },
      {
        frets: [-1, 1, 4, 2, 3, 2],
        fingers: [0, 1, 4, 2, 3, 2],
        barres: [2],
        baseFret: 1,
        midi: [46, 54, 57, 62, 66],
      },
      {
        frets: [2, 1, 3, 3, 3, -1],
        fingers: [2, 1, 3, 3, 3, 0],
        barres: [3],
        baseFret: 5,
        midi: [46, 50, 57, 62, 66],
      },
    ],
  },
  {
    key: 'D',
    suffix: '/B',
    positions: [
      {
        frets: [-1, 2, 0, 2, 3, 2],
        fingers: [0, 1, 0, 2, 4, 3],
        baseFret: 1,
        barres: [],
        midi: [47, 50, 57, 62, 66],
      },
      {
        frets: [-1, 2, 4, 2, 3, 2],
        fingers: [0, 1, 3, 1, 2, 1],
        barres: [2],
        baseFret: 1,
        midi: [47, 54, 57, 62, 66],
      },
      {
        frets: [-1, 1, 3, 1, 2, 4],
        fingers: [0, 1, 3, 1, 2, 4],
        barres: [1],
        baseFret: 2,
        midi: [47, 54, 57, 62, 69],
      },
    ],
  },
  {
    key: 'D',
    suffix: '/C',
    positions: [
      {
        frets: [-1, 3, 0, 2, 3, 2],
        fingers: [0, 3, 0, 1, 4, 2],
        baseFret: 1,
        barres: [],
        midi: [48, 50, 57, 62, 66],
      },
      {
        frets: [-1, 3, 4, 2, 3, 2],
        fingers: [0, 2, 4, 1, 3, 1],
        barres: [2],
        baseFret: 1,
        midi: [48, 54, 57, 62, 66],
      },
      {
        frets: [4, 1, 3, 3, 3, -1],
        fingers: [4, 1, 3, 3, 3, 0],
        barres: [3],
        baseFret: 5,
        midi: [48, 50, 57, 62, 66],
      },
    ],
  },
]

export default guitarChordsD
