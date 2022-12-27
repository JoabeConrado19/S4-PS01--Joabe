import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

const uuidVerify = (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id

  if (id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  )) {

    return next()
  }
  else {
    throw new AppError("Invalid uuid", 404)
  }

}

export default uuidVerify