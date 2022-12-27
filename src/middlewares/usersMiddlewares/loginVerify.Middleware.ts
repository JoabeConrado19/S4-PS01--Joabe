import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";


const loginVerify = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email
  const password = req.body.password
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({
    email: email
  });

  if (!user) {
    throw new AppError("User not found", 404)
  }
  const passwordMatch = await compare(password, user.password)

  if (!passwordMatch) {
    throw new AppError("Email or password invalid", 403)
  }

  
  const token = jwt.sign(
    { email, isAdm: user.isAdm },
    "SECRET_KEY",
    { expiresIn: "24h", subject: user.id }
    )
    
    if(user.isActive === false){
      throw new AppError("User Inactive", 400)
    }
    

  return next()
}

export default loginVerify