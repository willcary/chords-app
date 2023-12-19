import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsAFlat from '@/assets/guitarChordsAFlat'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsAFlat })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
