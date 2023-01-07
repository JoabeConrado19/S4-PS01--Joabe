import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AppError from "../../errors/AppError";

const tokenVerify = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response
      .status(401)
      .json({ message: "missing authorization token" });
  }
  const token = authToken.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      throw new AppError(error.message, 404);
    }
  });
  return next();
};

export default tokenVerify;
