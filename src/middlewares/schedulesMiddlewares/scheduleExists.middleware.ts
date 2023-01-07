import AppDataSource from "../../data-source";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity";

const scheduleExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const scheduleRepository = AppDataSource.getRepository(SchedulesUsersProperties);

  const schedulesExistis = await scheduleRepository.findOne({
    where: { date: req.body.date, hour: req.body.hour },
  });

  if (schedulesExistis) {
    throw new AppError("Schedules already exists with this time", 409);
  }

  next();
};

export default scheduleExists;
