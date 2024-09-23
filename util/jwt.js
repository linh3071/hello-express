import jwt from 'jsonwebtoken';

export const jwtSecret = 'jwtSecret';

export function encodeToken(user) {
    return jwt.sign(user, jwtSecret, {
        expiresIn: 60 * 60
    });
}
