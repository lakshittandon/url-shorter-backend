import { registerUser, loginUser } from '../services/auth.service.js';
import { cookieOptions } from '../config/config.js';

export const register = async (req, res) => {
  try {
    const token = await registerUser(req.body);
    res.cookie('token', token, cookieOptions);
    res.status(201).json({ success: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


export const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.cookie('token', token, cookieOptions);
    res.json({ success: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};