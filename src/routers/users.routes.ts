import { Router } from "express";
import { createUserController, deleteUsersController, listUsersController, patchUsersController, retrieveUsersController } from "../controllers/users.controllers";
import findUser from "../middlewares/usersMiddlewares/findUser.middleware";
import onlyAdmVerify from "../middlewares/usersMiddlewares/onlyAdm.middleware";
import userExists from "../middlewares/usersMiddlewares/userExists.middleware";

import uuidVerify from "../middlewares/usersMiddlewares/UuidVerify.middleware";
import validateDataMiddleware from "../middlewares/usersMiddlewares/validatedData.middleware";
import bodyEditVerify from "../middlewares/usersMiddlewares/verifyEditBody.middleware";
import { createUserSerializer, updateUserSerializer } from "../serializers/users.serializers";


const userRoutes = Router()
userRoutes.post('',validateDataMiddleware(createUserSerializer),userExists, createUserController)
userRoutes.get('', onlyAdmVerify, listUsersController)
userRoutes.get('/:id',uuidVerify, findUser, retrieveUsersController)
userRoutes.patch('/:id', uuidVerify, findUser,validateDataMiddleware(updateUserSerializer),bodyEditVerify ,patchUsersController)
userRoutes.delete('/:id',uuidVerify, findUser, onlyAdmVerify, deleteUsersController)

export default userRoutes