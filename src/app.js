import "dotenv/config";
import express from "express";
import { dbConnection } from "./Db/config.js";
import dbinit from "./Db/init.js";
import Session from "express-session";
import sequelize from "./Db/config.js";
import SequelizeStore from "connect-session-sequelize";
import AuthenticateMiddleware from "./middleware/authenticate.js";
import Mail from "./mail/mail.js";
import allRoutes from "./allroutes/app.js";
import PostModel from "./Models/postModel.js";

const app = express();

app.use(express.json());
app.use("/", allRoutes);

dbConnection()
  .then(async () => {
    Mail();

    await dbinit();

    console.log("DB synced Application");

    app.get("/hello", async (req, res) => {
      try {
        const posts = await PostModel.findAll();

        res.json({ message: "Hello from the database", data: posts });
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
        const mySequelizeStore = SequelizeStore(Session.Store);
        const mySequelizeStore1 = new mySequelizeStore({
          db: sequelize,
        });
      }
    });

    app.use(
      Session({
        secret: "lanskjagsfjhgsdjhgf",
        Store: mySequelizeStore1,
        saveUninitialized: false,
        resave: true,
        proxy: false,
      })
    );
    mySequelizeStore1.sync();
    
    app.post("/", AuthenticateMiddleware, (req, res) => {
      return res.json({
        message: "Hello App",
      });
    });
    
    

    app.listen(3301, (err) => {
      if (err) {
        console.error("Error starting the server:", err);
      } else {
        console.log("Server is started at http://localhost:3301");
      }
    });
  })
  .catch((err) => {
    console.log("Db not synced", err);
  });
