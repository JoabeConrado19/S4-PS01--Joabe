import { Router } from "express";
import { loginUsersController} from "../controllers/users.controllers";
import loginVerify from "../middlewares/usersMiddlewares/loginVerify.Middleware";



const loginRoute = Router()
loginRoute.post('', loginVerify, loginUsersController)


export default loginRoute