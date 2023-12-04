import { DataTypes } from "sequelize";
import sequelize from "../Db/config.js";
import postModel from "./postModel.js";

const userModel = sequelize.define("User", {
 name:{
  type: DataTypes.STRING,
  allowNull: false,
 }, 
email:{
   type:DataTypes.STRING,
allowNull:false,
},
password:{
  type: DataTypes.STRING,
  allowNull:false,
}
});

userModel.hasMany(postModel);
postModel.belongsTo(userModel);

export default userModel;
