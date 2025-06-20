export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'none', // Adjust as necessary
    maxAge: 24 * 60 * 60 * 1000 // 1 day in milliseconds
};

export const jwtOptions = { expiresIn: '1d' }; 