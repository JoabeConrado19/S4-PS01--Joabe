import AppDataSource from "../../data-source";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";
import { SchedulesUsersProperties } from "../../entities/schedules_users_properties.entity";
import { Properties } from "../../entities/properties.entity";

const isValidPropertyId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {

    const propertyRepository = AppDataSource.getRepository(Properties);

    const property = await propertyRepository.findOne({
        where: { id: req.body.propertyId },
      });
    
      if (!property) {
        throw new AppError("Invalid propertyId", 404);
      }
    
      if (!property) {
        throw new AppError("Property not exists", 404);
      }

  next();
};

export default isValidPropertyId;
