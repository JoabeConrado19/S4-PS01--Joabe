import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";

const admAndUserVerify = (request: Request, response: Response, next: NextFunction) => {
    const authToken = request.headers.authorization;
    const id = request.params.id

    if (!authToken) {
        return response.status(401).json({ "message": "missing authorization token" })
    }
    const token = authToken.split(" ")[1];

    jwt.verify(token, "SECRET_KEY", (error, decoded: any) => {
        if (decoded.sub === id) {
            next()
        }
        else if (decoded.isAdm === true) {
            next()
        }
        else if (decoded.sub != id) {
            throw new AppError("Missing Adm Permission", 401)
        }
        else if (error) {
            throw new AppError(error.message, 404)
        }

    })

}

export default admAndUserVerify