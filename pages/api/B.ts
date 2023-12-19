import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsB from '@/assets/guitarChordsB'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsB })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
