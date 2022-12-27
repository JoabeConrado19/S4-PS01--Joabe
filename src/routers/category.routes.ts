import { Router } from "express";
import { createCategoryController, listCategoryController } from "../controllers/category.controllers";
import categoryExists from "../middlewares/categoriesMiddlewares/categoryExists.middleware";
import validateDataMiddleware from "../middlewares/usersMiddlewares/validatedData.middleware";
import { createCategorySerializer } from "../serializers/category.serializers";
import onlyAdmVerify from "../middlewares/usersMiddlewares/onlyAdm.middleware";
import { listPropertiesFromCategoryController } from "../controllers/properties.controllers";
import uuidVerify from "../middlewares/usersMiddlewares/UuidVerify.middleware";



const categoryRoutes = Router()
categoryRoutes.post('',validateDataMiddleware(createCategorySerializer), onlyAdmVerify, categoryExists, createCategoryController)
categoryRoutes.get('', listCategoryController)
categoryRoutes.get('/:id/properties', uuidVerify, listPropertiesFromCategoryController)


export default categoryRoutes