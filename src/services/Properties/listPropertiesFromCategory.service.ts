import AppDataSource from "../../data-source"
import { Categories } from "../../entities/category.entity"
import { Properties } from "../../entities/properties.entity"

import AppError from "../../errors/AppError"
import { listPropertiesReturnedData } from "../../serializers/properties.serializers"
import { QueryBuilder } from 'typeorm'

const listPropertiesFromCategoriesService = async (id:string) => {
    const categoryRepository = AppDataSource.getRepository(Categories)
    const propertiesRepository = AppDataSource.getRepository(Properties)

    // const properties = await propertiesRepository.find()
    // const categories = await categoryRepository.find()

    // const returnList:any = []
    // let category = ""

    // categories.forEach(element => {
    //   if(element.id === id){
    //     category = element.name


    //   }
    //   else{
    //     throw new AppError("Category not found", 404)
    //   }

      
    // });
    console.log("cheguei aquq")

    const properties = await propertiesRepository.createQueryBuilder('properties_database').
    select('*').
    from(Properties, 'properties').
    where('properties.categoriesId = :id', {id: id}).
    getRawMany()

    console.log(properties)

    

    const returnedUser: any = await listPropertiesReturnedData.validate(properties, {
        stripUnknown: true
      })
    
      
      return properties

    
}

export default listPropertiesFromCategoriesService