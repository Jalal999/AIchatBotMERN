import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'
import { COOKIE_NAME } from './constants.js';

export const createToken = (id: string, email: string, expiresIn: string) => {
    const payload = { id, email }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn
    });
    return token;
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.signedCookies[`${COOKIE_NAME}`]
    
    if(!token || token.trim() === "") {
        return res.status(401).json({message: "Token Not Received..."})
    }

    return new Promise<void>((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if(err) {
                reject(err.message)
                return res.status(401).json({ message: "Token Expired..."})
            } else {
                resolve();
                // setting local variables from response of this middleware 
                // and using them from the next middleware
                res.locals.jwtData = success
                return next()
            }
        })
    })
}