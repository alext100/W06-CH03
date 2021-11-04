const debug = require("debug")("things:database");

const chalk = require("chalk");
const mongoose = require("mongoose");

const mongoDBPruebas = process.env.MONGODB_PRUEBAS;
const mongoDBProduction = process.env.MONGODB_PRODUCTION;

const mongodbConnect = (dataBase) =>
  mongoose.connect(
    dataBase === "mongoDBPruebas" ? mongoDBPruebas : mongoDBProduction,
    (error) => {
      if (error) {
        debug(chalk.red("No se ha podido iniciar la base de datos."));
        debug(chalk.red(error.message));
        return;
      }
      debug(chalk.green("Conectado a la base de datos: ", dataBase));
    }
  );

module.exports = mongodbConnect;
