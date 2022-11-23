import express from "express";
import homeControllers from "../controllers/homeControllers";

const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", homeControllers.getHomePage);

  router.get("/diepsang", (req, res) => {
    return res.send("diepsang");
  });

  return app.use("/", router);
};

module.exports = initWebRoutes;
