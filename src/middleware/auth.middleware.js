import { verifyToken } from '../utils/helper.js';

export const requireAuth = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) return res.status(401).json({ error: 'Not logged in' });

  try {
    req.user = verifyToken(token);     // { id, email, iat, exp }
    next();
  } catch {
    return res.status(401).json({ error: 'Invalid / expired token' });
  }
};