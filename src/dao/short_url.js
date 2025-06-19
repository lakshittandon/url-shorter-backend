import ShortUrl from '../models/shorturl.model.js';


export const saveShortUrl = async (url, shortUrl, userId) => {
  const newUrl = new ShortUrl({
    originalUrl: url,
    shortUrl: shortUrl,
    ...(userId ? { user: userId } : {}),  // attach user if present
  });
  await newUrl.save();
};

export const findUrlFromShortUrl = async (shortUrl) => {
  return await ShortUrl.findOneAndUpdate(
    { shortUrl: shortUrl },
    { $inc: { clicks: 1 } },
    { new: true }
  );
};

export const findShortUrlsByUser = async (userId) =>
  ShortUrl.find({ user: userId })
          .sort({ createdAt: -1 })
          .select('shortUrl originalUrl clicks createdAt');