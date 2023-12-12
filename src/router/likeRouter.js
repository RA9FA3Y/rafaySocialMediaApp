import { Router } from "express";
import likeController from "../Controller/likeController.js";

const likeRouter = Router();

likeRouter.post("/post/:postId/like",  likeController.createLike);

export default likeRouter;