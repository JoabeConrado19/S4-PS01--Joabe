import { Router } from "express";
import { createScheduleController } from "../controllers/schedules.controllers";
import tokenVerify from "../middlewares/usersMiddlewares/tokenVerify.middleware";



const scheduleRoutes = Router()
scheduleRoutes.post('', tokenVerify,createScheduleController)



export default scheduleRoutes