import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsC from '@/assets/chords/guitarChordsC'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { suffix } = req.query
    // Check if suffix are provided
    if (suffix) {
      // Filter the data based on the suffix
      const filteredChords = guitarChordsC.filter(
        (chord) => chord.suffix === suffix
      )
      return res.status(200).json({ guitarChordsC: filteredChords })
    }

    // If key or suffix is not provided, return the entire data set
    res.status(200).json({ guitarChordsC })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to load guitar tabs' })
  }
}
