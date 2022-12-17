import { Router } from "express";
import { createUserController, deleteUsersController, listUsersController, patchUsersController, retrieveUsersController } from "../controllers/users.controllers";
import admAndUserVerify from "../middlewares/admAndUser.middleware";
import findUser from "../middlewares/findUser.middleware";
import onlyAdmVerify from "../middlewares/onlyAdm.middleware";
import userExists from "../middlewares/userExists.middleware";

import uuidVerify from "../middlewares/UuidVerify.middleware";
import validateDataMiddleware from "../middlewares/validatedData.middleware";
import bodyEditVerify from "../middlewares/verifyEditBody.middleware";
import { createUserSerializer, updateUserSerializer } from "../serializers/users.serializers";


const userRoutes = Router()
userRoutes.post('',validateDataMiddleware(createUserSerializer),userExists, createUserController)
userRoutes.get('', onlyAdmVerify, listUsersController)
userRoutes.get('/:id',uuidVerify, findUser, retrieveUsersController)
userRoutes.patch('/:id',uuidVerify, findUser, admAndUserVerify,validateDataMiddleware(updateUserSerializer),bodyEditVerify ,patchUsersController)
userRoutes.delete('/:id',uuidVerify, findUser, onlyAdmVerify, deleteUsersController)

export default userRoutes