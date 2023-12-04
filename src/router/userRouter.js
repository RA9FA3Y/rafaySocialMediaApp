import { Router } from "express";
import userController from "../Controller/userController.js";

const userRouter = Router();
userRouter.post("/", (req, res) => {
  console.log("Reached userRouter.post");
  userController.createUser(req, res);
});

export default userRouter;
