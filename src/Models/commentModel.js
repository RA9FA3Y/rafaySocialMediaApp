
import { DataTypes } from "sequelize";
import sequelize from "../Db/config.js";
import postModel from "./postModel.js";

const commentModel = sequelize.define("Comment", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

commentModel.belongsTo(postModel);
postModel.hasMany(commentModel);

export default commentModel;
