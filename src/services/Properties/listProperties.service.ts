import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { listPropertiesReturnedData } from "../../serializers/properties.serializers"



const listPropertiesService = async () => {
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const categories = await propertiesRepository.find()

    const returnedPropertie: any = await listPropertiesReturnedData.validate(categories, {
        stripUnknown: true
      })
    
      return returnedPropertie

    
}

export default listPropertiesService