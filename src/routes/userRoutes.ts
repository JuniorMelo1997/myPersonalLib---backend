import {Router} from "express";
import { createUserController } from "../controllers/userController/createUserController";
import { dropUserController } from "../controllers/userController/dropUserController";
import { getUserController } from "../controllers/userController/getUserController";
import { getAllUsersController } from "../controllers/userController/getAllUsersController";

const userRoutes = Router();

userRoutes.post("/user", createUserController);
userRoutes.delete("/user/:id", dropUserController);
userRoutes.get(["/user/:id", "/users/:id"], getUserController);
userRoutes.get(["/user", "/users"], getAllUsersController)

export {userRoutes}