import { Router } from "express";
import { createPropertieController, listPropertiesController } from "../controllers/properties.controllers";
import propertieUuidVerify from "../middlewares/properties/propertieUuidVerify.middleware";
import onlyAdmVerify from "../middlewares/usersMiddlewares/onlyAdm.middleware";
import validateDataMiddleware from "../middlewares/usersMiddlewares/validatedData.middleware";
import { createPropertiesSerializer } from "../serializers/properties.serializers";


const propertiesRoutes = Router()
propertiesRoutes.post('',validateDataMiddleware(createPropertiesSerializer), onlyAdmVerify, propertieUuidVerify, createPropertieController)
propertiesRoutes.get('', listPropertiesController)



export default propertiesRoutes