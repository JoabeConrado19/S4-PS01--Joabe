import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import AppError from "../../errors/AppError";
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Properties } from "../../entities/properties.entity";
import jwt from "jsonwebtoken";

const createScheduleService = async (
  userData: IScheduleRequest,
  token: string
) => {
  const scheduleRepository = AppDataSource.getRepository(
    SchedulesUsersProperties
  );
  const propertyRepository = AppDataSource.getRepository(Properties);
  const userRepository = AppDataSource.getRepository(User);

  let userId: string = "";

  jwt.verify(token, "SECRET_KEY", (error: any, decoded: any) => {
    userId = decoded.sub;
  });
  const user = await userRepository.findOne({
    where: { id: userId },
  });
  if (!user) {
    throw new AppError("User not exists", 404);
  }

  const property = await propertyRepository.findOne({
    where: { id: userData.propertyId },
  });

  if (!property) {
    throw new AppError("Property not exists", 404);
  }

  const schedule = scheduleRepository.create(userData);
  schedule.property = property;
  schedule.user = user;

  await scheduleRepository.save(schedule);

  return {
    message: `Agendado para o dia ${userData.date}, as ${userData.hour}`,
  };
};

export default createScheduleService;
