import {Router} from "express";
import { createUserController } from "../controllers/userController/createUserController";
import { dropUserController } from "../controllers/userController/dropUserController";

const userRoutes = Router();

userRoutes.post("/user", createUserController);
userRoutes.delete("/user/:id", dropUserController);

export {userRoutes}