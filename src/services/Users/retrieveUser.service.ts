import { IUserRequest, IUserUpdate } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const retrieveUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.findOne({
    where: { id },
  });

  return [204, user];
};

export default retrieveUserService;
