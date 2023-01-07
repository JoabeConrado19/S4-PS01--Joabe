import { Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import createUserService from "../services/Users/createUser.service";
import deleteUserService from "../services/Users/deleteUser.servive";
import listUsersService from "../services/Users/listUsers.service";
import loginUserService from "../services/Users/loginUser.service";
import patchUserService from "../services/Users/patchUser.servive";
import retrieveUserService from "../services/Users/retrieveUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const data = await listUsersService();
  return res.status(200).json(data);
};

const retrieveUsersController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = await retrieveUserService(id);
  return res.status(200).json(data);
};
const patchUsersController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const userData = req.body;
  const data = await patchUserService(id, userData);
  return res.status(200).json(data);
};

const deleteUsersController = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const data = await deleteUserService(id);
  return res.status(204).json();
};

const loginUsersController = async (req: Request, res: Response) => {
  const data = await loginUserService(req.body.email);
  return res.status(200).json(data);
};

export {
  createUserController,
  listUsersController,
  retrieveUsersController,
  patchUsersController,
  deleteUsersController,
  loginUsersController,
};
