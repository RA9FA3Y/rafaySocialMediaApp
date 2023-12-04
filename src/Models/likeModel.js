// likeModel.js
import { DataTypes } from "sequelize";
import sequelize from "../Db/config.js";
import postModel from "./postModel.js"; // Ensure correct capitalization

const likeModel = sequelize.define("Like", {
  // You might want to add additional fields based on your requirements
});

// Define the association
//likeModel.belongsTo(postModel);
//postModel.hasMany(likeModel);

export default likeModel;
