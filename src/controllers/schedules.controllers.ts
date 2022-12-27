import { Request, Response } from "express";
import { IScheduleRequest } from "../interfaces/schedules";
import createScheduleService from "../services/schedules/createSchedule";




const createScheduleController = async (req: Request, res: Response) => {
    const userData: IScheduleRequest = req.body
    const newCategory = await createScheduleService(userData)
    return res.status(201).json(newCategory)
}



export { createScheduleController}