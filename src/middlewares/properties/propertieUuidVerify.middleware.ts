import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Categories } from "../../entities/category.entity";
import AppError from "../../errors/AppError";

const propertieUuidVerify = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.body.categoryId
  const categoryRepository = AppDataSource.getRepository(Categories)
  const exists = await categoryRepository.exist({ where: { id: req.body.categoryId} });
  
  
  
  if (id.match(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  ) && exists) {
    return next()
  }

  else if(exists === false){
    throw new AppError("Category not found", 404)

  }

  else {
    throw new AppError("Invalid uuid", 409)
  }

}

export default propertieUuidVerify