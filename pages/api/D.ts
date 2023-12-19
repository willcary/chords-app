import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsD from '@/assets/guitarChordsD'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsD })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
