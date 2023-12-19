import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsG from '@/assets/guitarChordsG'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsG })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
