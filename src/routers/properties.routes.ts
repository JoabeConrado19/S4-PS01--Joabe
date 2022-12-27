import { Router } from "express";
import { createPropertieController } from "../controllers/properties.controllers";
import PropertieExists from "../middlewares/properties/propertiesExists.middlewares";
import propertieUuidVerify from "../middlewares/properties/propertieUuidVerify.middleware";
import onlyAdmVerify from "../middlewares/usersMiddlewares/onlyAdm.middleware";
import uuidVerify from "../middlewares/usersMiddlewares/UuidVerify.middleware";
import validateDataMiddleware from "../middlewares/usersMiddlewares/validatedData.middleware";
import { createPropertiesSerializer } from "../serializers/properties.serializers";


const propertiesRoutes = Router()
propertiesRoutes.post('',validateDataMiddleware(createPropertiesSerializer), onlyAdmVerify, propertieUuidVerify, PropertieExists, createPropertieController)



export default propertiesRoutes