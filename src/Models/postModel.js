import { DataTypes } from "sequelize";
import sequelize from "../Db/config.js";

const postModel = sequelize.define("Post", {
  author: {
    type: DataTypes.STRING,
  },

  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  like: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default postModel;
