import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createCategoryService from "../services/Categories/createCategory.service";
import listCategoriesService from "../services/Categories/listCategory.service";
import createUserService from "../services/Users/createUser.service";


const createCategoryController = async (req: Request, res: Response) => {
    const userData: ICategoryRequest = req.body
    const newCategory = await createCategoryService(userData)
    return res.status(201).json(newCategory)
}

const listCategoryController = async (req: Request, res: Response) => {
    const categoriesList = await listCategoriesService()
    return res.status(200).json(categoriesList)
}


export { createCategoryController, listCategoryController }