import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsFSharp from '@/assets/chords/guitarChordsFSharp'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsFSharp })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
