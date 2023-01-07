import { Router } from "express";
import { createCategoryController, listCategoryController, listPropertieFromCategoryController } from "../controllers/category.controllers";
import categoryExists from "../middlewares/categoriesMiddlewares/categoryExists.middleware";
import validateDataMiddleware from "../middlewares/usersMiddlewares/validatedData.middleware";
import { createCategorySerializer } from "../serializers/category.serializers";
import onlyAdmVerify from "../middlewares/usersMiddlewares/onlyAdm.middleware";
import uuidVerify from "../middlewares/usersMiddlewares/UuidVerify.middleware";



const categoryRoutes = Router()
categoryRoutes.post('',validateDataMiddleware(createCategorySerializer), onlyAdmVerify, categoryExists, createCategoryController)
categoryRoutes.get('', listCategoryController)
categoryRoutes.get('/:id/properties',uuidVerify, listPropertieFromCategoryController)


export default categoryRoutes