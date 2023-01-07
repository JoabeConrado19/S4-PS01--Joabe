import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import { IPropertyRequest } from "../interfaces/properties";
import createPropertieService from "../services/Properties/createPropertie.service";
import listPropertiesService from "../services/Properties/listProperties.service";


const createPropertieController = async (req: Request, res: Response) => {
    const userData: IPropertyRequest = req.body
    const newPropertie = await createPropertieService(userData)
    return res.status(201).json(newPropertie)
}


const listPropertiesController = async (req: Request, res: Response) => {
    const properties = await listPropertiesService()
    return res.status(200).json(properties)
}

export { createPropertieController, listPropertiesController }