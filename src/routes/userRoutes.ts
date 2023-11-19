import {Router} from "express";
import { createUserController } from "../controllers/userController/createUserController";
import { dropUserController } from "../controllers/userController/dropUserController";
import { getUserController } from "../controllers/userController/getUserController";

const userRoutes = Router();

userRoutes.post("/user", createUserController);
userRoutes.delete("/user/:id", dropUserController);
userRoutes.get("/user/:id", getUserController);

export {userRoutes}