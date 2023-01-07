import { Router } from "express";
import { createScheduleController, listSchedulesFromPropertieController } from "../controllers/schedules.controllers";
import dateVerify from "../middlewares/schedulesMiddlewares/dateVerify.middleware copy";
import hourVerify from "../middlewares/schedulesMiddlewares/hourVerify.middleware";
import scheduleExists from "../middlewares/schedulesMiddlewares/scheduleExists.middleware";
import isValidPropertyId from "../middlewares/schedulesMiddlewares/validPropertyId.middleware";
import onlyAdmVerify from "../middlewares/usersMiddlewares/onlyAdm.middleware";
import tokenVerify from "../middlewares/usersMiddlewares/tokenVerify.middleware";



const scheduleRoutes = Router()
scheduleRoutes.post('', tokenVerify, hourVerify, dateVerify,isValidPropertyId, scheduleExists, createScheduleController)
scheduleRoutes.get('/properties/:id', onlyAdmVerify, listSchedulesFromPropertieController)



export default scheduleRoutes