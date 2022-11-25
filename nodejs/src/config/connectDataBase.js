const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("learn_web_database", "root", "diepsang13++S", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

const connectDataBase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDataBase;
