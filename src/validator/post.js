import joi from "joi";

const postValidator = {
create: (req, res, next) => {
try{
const body= req.body;
const schema= joi.object({

content: joi.string().min(3).max(200).required(),
});
const {error, value} = schema.validate(body);
if (error) {
return res.status(400).json({ message: "bad happen",error});
}
next();
} catch (error) {
return res.status(404).json({message: "something went wrong", error});
  }
 },
};

export default postValidator;