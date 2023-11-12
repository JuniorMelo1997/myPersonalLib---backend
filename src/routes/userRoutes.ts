import {Router} from "express";
import { createUserController } from "../controllers/userController/createUserController";

const userRoutes = Router();

userRoutes.post("/user", createUserController);

export {userRoutes}