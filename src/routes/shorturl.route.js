import express from "express";
import { createShortUrl } from "../controller/short_url.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = express.Router();



router.post('/', requireAuth, createShortUrl);   


export default router;