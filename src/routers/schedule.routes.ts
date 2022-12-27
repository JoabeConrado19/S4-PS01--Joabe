import { Router } from "express";
import { createScheduleController } from "../controllers/schedules.controllers";



const scheduleRoutes = Router()
scheduleRoutes.post('', createScheduleController)



export default scheduleRoutes