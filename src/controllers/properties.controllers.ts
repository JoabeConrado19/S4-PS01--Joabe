import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertieService from "../services/Properties/createPropertie.service";
import listPropertiesService from "../services/Properties/listProperties.service";
import listPropertiesFromCategoriesService from "../services/Properties/listPropertiesFromCategory.service";


const createPropertieController = async (req: Request, res: Response) => {
    const userData: IPropertyRequest = req.body
    const newPropertie = await createPropertieService(userData)
    return res.status(201).json(newPropertie)
}
const listPropertiesFromCategoryController = async (req: Request, res: Response) => {
    const categoryId:string = req.params.id
    const properties = await listPropertiesFromCategoriesService(categoryId)
    return res.status(200).json(properties)
}

const listPropertiesController = async (req: Request, res: Response) => {
    const properties = await listPropertiesService()
    return res.status(200).json(properties)
}

export { createPropertieController, listPropertiesFromCategoryController, listPropertiesController }