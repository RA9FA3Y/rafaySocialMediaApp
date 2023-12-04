import postModel from "../Models/postModel.js";
 const postController= {
create: async (req, res) => {
    try {
      const newPost = await Post.create({ content: req.body.content, UserId: req.body.userId });
      res.json(newPost);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Error' });
    }
  }};

  export default postController