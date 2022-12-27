import AppDataSource from "../../data-source"
import { IPropertyRequest } from "../../interfaces/properties"
import { Properties } from "../../entities/properties.entity"
import { PropertiesReturnSerializer, PropertiesUniqueReturnSerializer } from "../../serializers/properties.serializers"
import { Adresses } from "../../entities/adresses.entity"
import { Categories } from "../../entities/category.entity"
import AppError from "../../errors/AppError"


const createPropertieService = async (userData: IPropertyRequest) => {
    const propertieRepository = AppDataSource.getRepository(Properties)
    const adressRepository = AppDataSource.getRepository(Adresses)
    const categoryRepository = AppDataSource.getRepository(Categories)


    const propertie = propertieRepository.create(userData)
    const address = adressRepository.create(userData.address)
    const id = userData.categoryId

 
    
  if (id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  )) {

  }
  else {
    throw new AppError("Invalid uuid", 409)
  }

    const category = await categoryRepository.findOne({
        where: {
            id: id
        }})

    if(!category){
        throw new AppError("Category not exists", 409)

    }

    await adressRepository.save(address)



   propertie.address = {...address}
   propertie.category = category.name

   await propertieRepository.save(propertie)

    const returnedPropertie: any = await PropertiesUniqueReturnSerializer.validate(propertie, {
        stripUnknown: true
    })

    console.log(propertie)
    return propertie


}

export default createPropertieService