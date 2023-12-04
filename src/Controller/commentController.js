import commentModel from "../Models/commentModel.js";

const commentController = {
    create: async (req, res) => {
        try {
          const newComment = await Comment.create({ text: req.body.text, PostId: req.body.postId });
          res.json(newComment);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: ' Server Error' });
        }
      }
}

export default commentController