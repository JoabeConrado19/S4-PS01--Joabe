import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";

const onlyAdmVerify = (request: Request, response: Response, next: NextFunction) => {
    const authToken = request.headers.authorization;
    
    if (!authToken) {
        return response.status(401).json({ "message": "missing authorization token" })
    }
    const token = authToken.split(" ")[1];

    jwt.verify(token, "SECRET_KEY", (error, decoded: any) => {
        if (decoded.isAdm === false) {
            throw new AppError("Missing Adm Permission", 403)
        }
        if (error) {
            throw new AppError(error.message, 404)
        }

        
    })
    return next()
}

export default onlyAdmVerify
