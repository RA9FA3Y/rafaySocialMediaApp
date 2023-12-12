import { Router } from "express";
import userController from "../Controller/userController.js";
import authController from "../Controller/auth/authController.js";

const userRouter = Router();
userRouter.post(("/register" , authController.register))
userRouter.post(("/login" , authController.login))
userRouter.post("/", userController.create);
userRouter.get("/Id", userController.getAll);

export default userRouter;