import { Router } from "express";
import postController from "../Controller/postController.js";

const postRouter = Router();

postRouter.post("/:userId", postController.create);
postRouter.post("/:userId/post/:postId/like", postController.likePost);
postRouter.get("/", postController.getAll);
postRouter.get("/:userId/single_post/:postId/like", postController.getOne);
postRouter.put("/user/:userId/update_post/:postId", postController.update);
postRouter.delete("/user/:userId/delete_post/:postId", postController.delete);

export default postRouter;

