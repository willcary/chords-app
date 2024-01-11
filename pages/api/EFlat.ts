import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsEFlat from '@/assets/chords/guitarChordsEFlat'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { suffix } = req.query
    // Check if suffix are provided
    if (suffix) {
      // Filter the data based on the suffix
      const filteredChords = guitarChordsEFlat.filter(
        (chord) => chord.suffix === suffix
      )
      return res.status(200).json({ guitarChordsEFlat: filteredChords })
    }

    // If key or suffix is not provided, return the entire data set
    res.status(200).json({ guitarChordsEFlat })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to load guitar tabs' })
  }
}
