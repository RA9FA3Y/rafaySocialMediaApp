import sequelize from "../Db/config.js";
import userModel from "./userModel.js";
import postModel from "./postModel.js";

const likeModel = sequelize.define("like, {}");

userModel.hasMany(likeModel);
likeModel.belongsTo(userModel);
postModel.hasMany(likeModel);
likeModel.belongsTo(postModel);

export default likeModel