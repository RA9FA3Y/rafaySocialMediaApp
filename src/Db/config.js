 import { Sequelize } from "sequelize";

 const sequelize = new Sequelize("user", "postgres", "1230", {
   host: "localhost",
   dialect: 'postgres',
   port: 5432,
 });



 export const dbConnection = async () => {
   try {
     await sequelize.authenticate();
     console.log("Db Connection has been established successfully");
   } catch (error) {
     console.log("Db unable to connect", error);
   }
 };

export default sequelize;
