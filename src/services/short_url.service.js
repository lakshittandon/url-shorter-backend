
import { generateNanoId } from '../utils/helper.js'
import urlSchema from "../models/shorturl.model.js ";
import { saveShortUrl } from "../dao/short_url.js";

 
export const createShortUrlServiceWithoutUser = async (url) => {
    const shortUrl = await generateNanoId(7)
    await saveShortUrl(url, shortUrl)
    return shortUrl
}

export const createShortUrlServiceWithUser = async (url, userId) => {
    const shortUrl = await generateNanoId(7)
    await saveShortUrl(url, shortUrl, userId)
    return shortUrl
}