import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsA from '@/assets/chords/guitarChordsA'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsA })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
