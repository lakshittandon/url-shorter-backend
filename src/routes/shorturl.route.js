import express from "express";
import { createShortUrl } from "../controller/short_url.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { getMyShortUrls } from '../controller/short_url.controller.js';
const router = express.Router();


router.get('/my', requireAuth, getMyShortUrls);

router.post('/', requireAuth, createShortUrl);   


export default router;