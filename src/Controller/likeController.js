import likeModel from "../Models/likeModel.js";

const likeController = {
  createLike: async (req, res) => {
    try {
      const newLike = await Like.create({ PostId: req.body.postId });
      res.json(newLike);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};
export default likeController;
