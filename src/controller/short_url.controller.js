import { generateNanoId } from "../utils/helper.js"
import { createShortUrlServiceWithoutUser } from "../services/short_url.service.js"
import { findUrlFromShortUrl } from "../dao/short_url.js"

import {

  createShortUrlServiceWithUser
} from '../services/short_url.service.js';

import { listUserShortUrls } from '../services/short_url.service.js';

export const getMyShortUrls = async (req, res) => {
  try {
    const urls = await listUserShortUrls(req.user.id);
    res.json(urls);
  } catch (e) {
    res.status(500).json({ error: 'Failed to load URLs' });
  }
};

export const createShortUrl = async (req, res) => {
  const { url } = req.body;

  const shortUrl = req.user
    ? await createShortUrlServiceWithUser(url, req.user.id)
    : await createShortUrlServiceWithoutUser(url);

  res.send(`${process.env.APP_URL}/${shortUrl}`);
};



export const redirectFromShortUrl  = async (req, res) => {
    const { id } = req.params
    const url = await findUrlFromShortUrl(id)
    res.redirect(url.originalUrl)
} 