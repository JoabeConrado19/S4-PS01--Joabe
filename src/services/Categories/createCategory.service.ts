import { IUserRequest } from "../../interfaces/users"
import AppDataSource from "../../data-source"
import { UserReturnSerializer } from "../../serializers/users.serializers"
import AppError from "../../errors/AppError"
import { Categories } from "../../entities/category.entity"
import { ICategoryRequest } from "../../interfaces/categories"


const createCategoryService = async (userData: ICategoryRequest): Promise<ICategoryRequest> => {
    const userRepository = AppDataSource.getRepository(Categories)
    const category = userRepository.create(userData)

    await userRepository.save(category)

    const returnedCategory: any = await UserReturnSerializer.validate(category, {
        stripUnknown: true
    })

    return returnedCategory


}

export default createCategoryService