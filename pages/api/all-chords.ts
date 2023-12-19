import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChords from '@/assets/chords/guitarChords'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChords })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
