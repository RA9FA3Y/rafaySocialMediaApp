import { Router } from "express";
import userRouter from "../router/userRouter.js";
import postRouter from "../router/postRouter.js";
import AuthenticateMiddleware from "../middleware/authenticate.js";
import likeRouter from "../router/likeRouter.js";
import commentRouter from "../router/commentRouter.js";

const allRoutes = Router();

allRoutes.use("/user", userRouter);
allRoutes.use("/post", AuthenticateMiddleware, postRouter);
allRoutes.use('/likes', AuthenticateMiddleware, likeRouter);
allRoutes.use('/comments', AuthenticateMiddleware, commentRouter);

export default allRoutes;
