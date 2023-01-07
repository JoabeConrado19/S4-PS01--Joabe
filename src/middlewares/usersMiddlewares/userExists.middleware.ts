import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";

const userExists = async (req: Request, res: Response, next: NextFunction) => {
  const userRepository = AppDataSource.getRepository(User);

  const exists = await userRepository.exist({
    where: { email: req.body.email },
  });
  if (exists === true) {
    throw new AppError("User already exists!", 409);
  }

  next();
};

export default userExists;
