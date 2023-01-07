import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import { Properties } from "../../entities/properties.entity";

const listSchedulesFromPropertieService = async (id: string) => {
  const propertieRepository = AppDataSource.getRepository(Properties);

  const schedules = await propertieRepository
    .createQueryBuilder("properties")
    .leftJoinAndSelect("properties.schedules", "schedules")
    .leftJoinAndSelect("properties.address", "address")
    .leftJoinAndSelect("properties.category", "categories")
    .where("properties.id = :id", { id: id })
    .leftJoinAndSelect("schedules.user", "user")
    .getOne();

  if (!schedules) {
    throw new AppError("schedules not found", 404);
  }

  return schedules;
};

export default listSchedulesFromPropertieService;
