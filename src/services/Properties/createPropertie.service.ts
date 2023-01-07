import AppDataSource from "../../data-source";
import { IPropertyRequest } from "../../interfaces/properties";
import { Properties } from "../../entities/properties.entity";
import {
  PropertiesReturnSerializer,
  PropertiesUniqueReturnSerializer,
} from "../../serializers/properties.serializers";
import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/category.entity";
import AppError from "../../errors/AppError";

const createPropertieService = async (userData: IPropertyRequest) => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const categoryRepository = AppDataSource.getRepository(Categories);

  const id = userData.categoryId;

  if (
    !id.match(
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
    )
  ) {
    throw new AppError("Invalid uuid", 404);
  }

  const category = await categoryRepository.findOne({
    where: { id },
  });

  const propertyExists = await propertyRepository.findOne({
    where: { address: userData.address },
  });

  if (propertyExists) {
    throw new AppError("property already exists", 409);
  }

  if (!category) {
    throw new AppError("Category not exists", 404);
  }

  const address = addressRepository.create(userData.address);
  await addressRepository.save(address);

  const property = propertyRepository.create(userData);
  property.address = address;
  property.category = category;

  await propertyRepository.save(property);
  return { ...property };
};

export default createPropertieService;
