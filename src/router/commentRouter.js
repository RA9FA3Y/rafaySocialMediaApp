import { Router } from "express";
import commentController from "../Controller/commentController.js";
import AuthenticateMiddleware from "../middleware/authenticate.js";

const commentRouter = Router();

commentRouter.post("/user/:userId/post/:postId", AuthenticateMiddleware,commentController.create);
commentRouter.get("/", commentController.getAll);
commentRouter.get("/user/:userId/post/:postId", commentController.getOne);
commentRouter.put("/user/:userId/post/:postId/update_comment/:commentId", commentController.update);

export default commentRouter;