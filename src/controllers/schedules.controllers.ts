import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import createScheduleService from "../services/schedules/createSchedule";
import listSchedulesFromPropertieService from "../services/schedules/listSchedulesFromPropertie";




const createScheduleController = async (req: Request, res: Response) => {
    const userData: IScheduleRequest = req.body
    const authToken = req.headers.authorization;
    const token = authToken!.split(" ")[1];
    const newCategory = await createScheduleService(userData, token)
    return res.status(201).json(newCategory)
}

const listSchedulesFromPropertieController = async (req: Request, res: Response) => {
    const propertieId: string = req.params.id
    const listSchedules = await listSchedulesFromPropertieService(propertieId)
    return res.status(200).json(listSchedules)
}



export { createScheduleController, listSchedulesFromPropertieController}