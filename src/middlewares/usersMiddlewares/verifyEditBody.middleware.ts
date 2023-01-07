import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

const bodyEditVerify = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  if (body.name || body.password || body.email) {
    next();
  } else {
    throw new AppError("Invalid Data", 401);
  }
};

export default bodyEditVerify;
