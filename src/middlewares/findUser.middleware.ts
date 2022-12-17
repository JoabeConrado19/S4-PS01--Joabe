import AppDataSource from "../data-source";
import { User } from "../entities/user.entity"
import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOne({
    where: { id }
  });

  if (!user) {
    throw new AppError("User not found", 404)

  }
  next()
}

export default findUser