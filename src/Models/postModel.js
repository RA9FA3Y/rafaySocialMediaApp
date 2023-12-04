// postModel.js
import { DataTypes } from "sequelize";
import sequelize from "../Db/config.js";
import userModel from "./userModel.js";

const postModel = sequelize.define("Post", {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});




export default postModel;
