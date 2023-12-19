import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsEFlat from '@/assets/chords/guitarChordsEFlat'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsEFlat })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
