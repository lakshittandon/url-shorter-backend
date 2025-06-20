export const cookieOptions = {
  httpOnly : true,
  secure   : true,        // MUST be true because SameSite='none'
  sameSite : "none",
  maxAge   : 24 * 60 * 60 * 1000   // 1 day
};

export const jwtOptions = { expiresIn: '1d' }; 