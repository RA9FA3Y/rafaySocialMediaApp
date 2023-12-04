import { Router } from "express";
import likeController from "../Controller/likeController.js";

const likeRouter = Router();
Router.post("/", likeController.createLike);

export default likeRouter;
