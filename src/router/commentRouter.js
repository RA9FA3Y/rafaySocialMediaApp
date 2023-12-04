import { Router } from "express";
import commentController from "../Controller/commentController.js";

const commentRouter = Router();

Router.post("/", commentController.createComment);

export default commentRouter;
