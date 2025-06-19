import urlSchema from '../models/shorturl.model.js';


export const saveShortUrl = async (url, shortUrl,userId) => {
    const newUrl = new urlSchema({
        originalUrl: url,
        shortUrl: shortUrl
    })
    if (userId) {
        newUrl.user = userId;
    }
    await newUrl.save();
    
}

export const findUrlFromShortUrl = async (shortUrl) => {
    const shorturl = await urlSchema.findOneAndUpdate({ shortUrl: shortUrl },{$inc: { clicks: 1 }}, { new: true });
    return shorturl
}