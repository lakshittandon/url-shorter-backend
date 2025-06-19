import express from 'express';
import { register, login } from '../controller/auth.controller.js';  
import { requireAuth } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/me', requireAuth, (req, res) => {
  res.json({ id: req.user.id, email: req.user.email });
});

// src/routes/auth.routes.js
router.post('/logout', (req, res) => {
  res.clearCookie('token', { httpOnly: true, sameSite: 'lax' });
  res.json({ success: true });
});

router.post('/register', register);     
router.post('/login', login);

export default router;