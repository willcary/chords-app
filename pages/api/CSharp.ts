import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsCSharp from '@/assets/chords/guitarChordsCSharp'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { suffix } = req.query
    // Check if suffix are provided
    if (suffix) {
      // Filter the data based on the suffix
      const filteredChords = guitarChordsCSharp.filter(
        (chord) => chord.suffix === suffix
      )
      return res.status(200).json({ guitarChordsCSharp: filteredChords })
    }

    // If key or suffix is not provided, return the entire data set
    res.status(200).json({ guitarChordsCSharp })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to load guitar tabs' })
  }
}
