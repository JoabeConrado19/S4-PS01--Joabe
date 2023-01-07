import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users";
import {
  UserReturnSerializer
} from "../../serializers/users.serializers";

const patchUserService = async (id: string, userData: IUserUpdate) => {
  const userRepository = AppDataSource.getRepository(User);
  const userRetrieved = await userRepository.findOneBy({
    id: id,
  });

  const user = {
    ...userRetrieved,
    ...userData,
  };

  await userRepository.save(user);

  const returnedUser: any = await UserReturnSerializer.validate(user, {
    stripUnknown: true,
  });

  return returnedUser;
};

export default patchUserService;
