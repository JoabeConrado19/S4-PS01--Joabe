import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { listUsersReturnedData } from "../../serializers/users.serializers";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const returnedUser: any = await listUsersReturnedData.validate(users, {
    stripUnknown: true,
  });

  return returnedUser;
};

export default listUsersService;
