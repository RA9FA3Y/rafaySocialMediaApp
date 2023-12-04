import { Router } from "express";
import postController from "../Controller/postController.js";

const postRouter = Router();

Router.post("/", postController.createPost);

export default postRouter;
