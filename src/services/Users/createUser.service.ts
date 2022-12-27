import { IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { UserReturnSerializer } from "../../serializers/users.serializers"
import AppError from "../../errors/AppError"


const createUserService = async (userData: IUserRequest): Promise<User> => {
    const userRepository = AppDataSource.getRepository(User)
    const user = userRepository.create(userData)


    await userRepository.save(user)


    const returnedUser: any = await UserReturnSerializer.validate(user, {
        stripUnknown: true
    })

    return returnedUser


}

export default createUserService