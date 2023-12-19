import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsC from '@/assets/chords/guitarChordsC'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsC })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
