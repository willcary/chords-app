import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsF from '@/assets/chords/guitarChordsF'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsF })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
