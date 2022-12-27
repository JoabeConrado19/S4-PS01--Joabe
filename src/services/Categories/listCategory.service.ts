import AppDataSource from "../../data-source"
import { Categories } from "../../entities/category.entity"
import { User } from "../../entities/user.entity"
import { listCategoriesReturnedData } from "../../serializers/category.serializers"
import { listUsersReturnedData } from "../../serializers/users.serializers"

const listCategoriesService = async () => {
    const categoryRepository = AppDataSource.getRepository(Categories)

    const categories = await categoryRepository.find()

    const returnedUser: any = await listCategoriesReturnedData.validate(categories, {
        stripUnknown: true
      })
    
      return returnedUser

    
}

export default listCategoriesService