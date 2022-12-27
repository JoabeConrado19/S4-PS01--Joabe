import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const loginUserService = async (email: string, password: string) => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({
    email: email
  });
  if (!user) {
    return [404, { message: "user not found" }]
  }
  const token = jwt.sign(
    { email, isAdm: user.isAdm },
    "SECRET_KEY",
    { expiresIn: "24h", subject: user.id }
  )

  return { "token": token }
}

export default loginUserService