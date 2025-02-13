import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your_jwt_secret_key';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, nationality, city } = req.body;

    // Simulate user registration
    if (!email || !nationality || !city) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const token = jwt.sign({ email, nationality, city }, SECRET_KEY, { expiresIn: '1h' });
    return res.status(200).json({ token });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
} 