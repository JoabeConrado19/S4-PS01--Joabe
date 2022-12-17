import { Router } from "express";
import { createUserController, deleteUsersController, listUsersController, loginUsersController, patchUsersController, retrieveUsersController } from "../controllers/users.controllers";
import loginVerify from "../middlewares/loginVerify.Middleware";



const loginRoute = Router()
loginRoute.post('', loginVerify, loginUsersController)


export default loginRoute