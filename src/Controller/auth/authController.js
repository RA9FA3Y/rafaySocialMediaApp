import { hash, compare } from "bcrypt";
import userModel from "../../Models/userModel.js";
import  jwt  from "jsonwebtoken";
import LoginEmail from "../../email/login.js";
import RegisterEmail from "../../email/register.js";


const authController = {
  register: async (req, res) => {
    try{
      const {name, email, password} = req.body;
      const file= req.file;
      const user = await userModel.findOne({
        where: {
          email,
        },
      });
      if (user) {
        return res.status(400).json({message:"account exist"});
      }
      const hPassword = await hash(password, 10);
      const result = await cloudinary.uploader.upload(file.buffer, {
        resource_type: "auto",
      });
      await userModel.create({
        name,
        email,
        password,
      });
      RegisterEmail({
        from: "rafaydogar93@gmail.com",
        to: user.email,
        subject: "register Verification",
        text:"Welcome",
      });
      return res.status(201).json({message:"Registered"});
    } catch (error) {
      return res.status(400).json({error:"something went wrong"});
    }
  },
  login: async (req, res) => {
    try {
      const {email, password} = req.body;
      const user= await userModel.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return res.status(400).json({message:"account with this email does not exist"});
      }
      const confirmPassword = await compare(password, user.password);
      if (!confirmPassword) {
        return res.status(400).json({message:"invalid"});
      }
      const payload = {
        id: user.id,
        email,
      };
      const token = await Jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "14d",
      });
      LoginEmail ({
        from: "rafaydogar93@gmail.com",
        to: user.email,
        subject: "verification",
        text:"Welcome to app",
      });
      req.session.token = token;
      req.session.user = payload;
      await  req.session.save();
      return res.status(200).json({
        payload,
        token,
        message:"user login successfull",
      });
    } catch (error) {
      console.log(error);
      return res.status(400).json({error:"something went wrong"});
    }
  },
};
export default authController;
