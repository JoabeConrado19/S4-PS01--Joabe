import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity"
import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/AppError";
import { Categories } from "../../entities/category.entity";

const categoryExists = async (req: Request, res: Response, next: NextFunction) => {
    const categoriesRepository = AppDataSource.getRepository(Categories)

    const exists = await categoriesRepository.exist({ where: { name: req.body.name } });
    if (exists === true) {
        throw new AppError("Category already exists!", 409)
    }

    next()
}

export default categoryExists