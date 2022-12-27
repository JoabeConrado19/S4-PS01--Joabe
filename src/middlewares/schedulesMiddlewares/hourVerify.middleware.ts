import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

const hourVerify = (req: Request, res: Response, next: NextFunction) => {
  const hour = req.body.hour

  const hourSplitedH = hour.split(':')[0]
  const hourSplitedMin = hour.split(':')[1]
  console.log(hourSplitedH)

  if (hour.match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/) && hourSplitedH < 18 && hourSplitedMin > 8) {

    return next()
  }
  else {
    throw new AppError("Invalid hour", 400)
  }

}

export default hourVerify
