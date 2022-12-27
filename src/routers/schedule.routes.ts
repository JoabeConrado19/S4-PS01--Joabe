import { Router } from "express";
import { createScheduleController } from "../controllers/schedules.controllers";
import hourVerify from "../middlewares/schedulesMiddlewares/hourVerify.middleware";
import tokenVerify from "../middlewares/usersMiddlewares/tokenVerify.middleware";



const scheduleRoutes = Router()
scheduleRoutes.post('', tokenVerify, hourVerify, createScheduleController)



export default scheduleRoutes