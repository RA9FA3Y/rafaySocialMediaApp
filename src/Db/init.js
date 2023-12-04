import userModel from "../Models/userModel.js";
import postModel from "../Models/postModel.js";
import likeModel from "../Models/likeModel.js";
import commentModel from "../Models/commentModel.js";
const dbinit = async () => {
  await postModel.sync({
    alter: true,
    force: false,
  });

  await userModel.sync({
    alter: true,
    force: false,
  });
};

await likeModel.sync({
  alter: true,
  force: false,
});

await commentModel.sync({
  alter: true,
  force: false,
});



export default dbinit;
