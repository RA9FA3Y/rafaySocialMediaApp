import { Router } from "express";
import userRouter from "../router/userRouter.js";
import postRouter from "../router/postRouter.js";
import likeRouter from "../router/likeRouter.js";
import commentRouter from "../router/commentRouter.js";

const allRoutes = Router();

allRoutes.use('/users', userRouter);
allRoutes.use('/posts', postRouter);
allRoutes.use('/likes', likeRouter);
allRoutes.use('/comments', commentRouter);

export default allRoutes;
