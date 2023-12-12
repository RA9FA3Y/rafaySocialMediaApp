import { Sequelize } from "sequelize";

// const env = process.env;

// const sequelize = new Sequelize(
//   env.DB_NAME,
//   env.DB_USER_NAME,
//   env.DB_PASSWORD,
//   {
//     host: env.DB_HOST,
//     port: env.DB_PORT,
//     dialect: env.DB_DIALECT,
//     logging: false,
//   }
// );

 const sequelize = new Sequelize("user", "postgres", "1230", {
   host: "localhost",
   dialect: 'postgres',
   port: 5432,
   logging: false,
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
