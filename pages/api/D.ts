import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsD from '@/assets/chords/guitarChordsD'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { suffix } = req.query
    // Check if suffix are provided
    if (suffix) {
      // Filter the data based on the suffix
      const filteredChords = guitarChordsD.filter(
        (chord) => chord.suffix === suffix
      )
      return res.status(200).json({ guitarChordsD: filteredChords })
    }

    // If key or suffix is not provided, return the entire data set
    res.status(200).json({ guitarChordsD })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to load guitar tabs' })
  }
}
