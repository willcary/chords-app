import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsBFlat from '@/assets/chords/guitarChordsBFlat'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsBFlat })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
