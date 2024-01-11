import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsG from '@/assets/chords/guitarChordsG'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { suffix } = req.query
    // Check if suffix are provided
    if (suffix) {
      // Filter the data based on the suffix
      const filteredChords = guitarChordsG.filter(
        (chord) => chord.suffix === suffix
      )
      return res.status(200).json({ guitarChordsG: filteredChords })
    }

    // If key or suffix is not provided, return the entire data set
    res.status(200).json({ guitarChordsG })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to load guitar tabs' })
  }
}
