import { Request, Response } from "express";
import { Any } from "typeorm";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/createUser.service";
import deleteUserService from "../services/deleteUser.servive";
import listUsersService from "../services/listUsers.service";
import loginUserService from "../services/loginUser.service";
import patchUserService from "../services/patchUser.servive";
import retrieveUserService from "../services/retrieveUser.service";


const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

const listUsersController = async (req: Request, res: Response) => {
    const data = await listUsersService()
    return res.status(200).json(data)
}

const retrieveUsersController = async (req: Request, res: Response) => {
    const id: any = req.params.id
    const data = await retrieveUserService(id)
    return res.status(200).json(data)
}
const patchUsersController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    const userData = req.body
    const data = await patchUserService(id, userData)
    return res.status(200).json(data)
}

const deleteUsersController = async (req: Request, res: Response) => {
    const id: string = req.params.id
    const data = await deleteUserService(id)
    return res.status(204).json()
}

const loginUsersController = async (req: Request, res: Response) => {
    const data = await loginUserService(req.body.email, req.body.password)
    return res.status(200).json(data)
}

export { createUserController, listUsersController, retrieveUsersController, patchUsersController, deleteUsersController, loginUsersController }