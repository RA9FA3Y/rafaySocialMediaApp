
import { DataTypes } from "sequelize";
import sequelize from "../Db/config.js";
import postModel from "./postModel.js";
import userModel from "./userModel.js";

const commentModel = sequelize.define("Comment", {
  
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

postModel.hasMany(commentModel);
commentModel.belongsTo(postModel);
userModel.hasMany(commentModel);
commentModel.belongsTo(userModel);

export default commentModel;
