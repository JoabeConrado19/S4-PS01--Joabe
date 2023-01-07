import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

const dateVerify = (req: Request, res: Response, next: NextFunction) => {
  const date = req.body.date;
  const newDate = new Date(date);
  const dateSplit = date.split("/");
  const weekDay = newDate.getDay();
  const year = parseInt(dateSplit[0]);
  const mouth = parseInt(dateSplit[1]);
  const day = parseInt(dateSplit[2]);

  if (
    day <= 31 &&
    day >= 1 &&
    mouth <= 12 &&
    mouth >= 1 &&
    year > 0 &&
    year < 3000 &&
    weekDay > 0 &&
    weekDay < 6
  ) {
    return next();
  } else {
    throw new AppError("Invalid date", 400);
  }
};

export default dateVerify;
