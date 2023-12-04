import joi from "joi";

const userValidator = {
create: (req, res, next) => {
try{
const body= req.body;
const schema= joi.object({
emailId: joi.string().max(30).email().required(),
userName: joi.string().min(3).max(50).required(),
});
const {error, value} = schema.validate(body);
if (error) {
return res.status(400).json({ message: "bad happen",error});
}
next();
} catch (error) {
return res.status(404).json({message: "something went", error});
  }
 },
};

export default userValidator;