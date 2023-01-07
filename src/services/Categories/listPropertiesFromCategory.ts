import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import { Categories } from "../../entities/category.entity";

const listPropertiesFromCategorieService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const category = await categoryRepository.findOne({
    where: { id },
  });

  if (!category) {
    throw new AppError("category not found", 404);
  }

  const properties = await categoryRepository.find({
    where: { id },
    relations: { properties: true },
  });

  if (!properties) {
    throw new AppError("properties not found", 404);
  }

  return properties[0];
};

export default listPropertiesFromCategorieService;
