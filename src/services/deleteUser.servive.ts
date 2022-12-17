import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";
import AppError from "../errors/AppError";

const deleteUserService = async (id: string): Promise<User | null> => {
  const userRepository = AppDataSource.getRepository(User)
  const user = await userRepository.findOneBy({
    id: id
  });
  if (user?.isActive == false) {
    throw new AppError("User is already inactive", 400)
  }

  user!.isActive = false

  await userRepository.save(user!)

  return user

}

export default deleteUserService