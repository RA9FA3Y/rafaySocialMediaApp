import userModel from "../Models/userModel.js";
import postModel from "../Models/postModel.js";
import sequelize from "sequelize";
const userController = {
  create: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      const user = userModel.create({
        name,
        email,
        password,
      });

      return res.status(201).json({
        message: "user created",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        message: "something bad happened",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userModel.findAll({
        where: {
          id,
        },
      });
      if (!user) {
        return res.status(404).json({
          message: "user not found",
        });
      }
      res.json({
    student,
  });
    }catch (error) {
  return res.status(500).json({
    message: "Something bad happened",
  });
  }
  
  }
  
  
};


export default userController;
