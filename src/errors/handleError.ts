import { Request, Response, NextFunction } from "express";
import AppError from "./AppError";

const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json(error.message);
  }
  return res.status(500).json({
    message: "internal server error",
  });
};

export default handleError;
