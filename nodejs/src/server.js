import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDataBase from "./config/connectDataBase";

require("dotenv").config();
const app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// declare routes
viewEngine(app);
initWebRoutes(app);

connectDataBase();

const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log("Backend Nodejs is running on the port: " + port);
});
