import type { NextApiRequest, NextApiResponse } from 'next'
import guitarChordsCSharp from '@/assets/guitarChordsCSharp'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({ guitarChordsCSharp })
  } catch (err) {
    res.status(500).json({ error: 'failed to load guitar tabs' })
  }
}
