
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';
import { jwtOptions } from '../config/config.js';

export const generateNanoId = (length) => nanoid(length);

export const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);

export const verifyToken = (token) =>
  jwt.verify(token, process.env.JWT_SECRET);