const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const debug = require("debug")("things:server");
const preguntasRoutes = require("./routes/preguntasRoutes");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.yellow(`Escuchando en el puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Ha habido un error al iniciar el servidor."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.red(`El puerto ${port} está en uso.`));
    }
  });
};

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  debug("El segundo middleware responde!");
  next();
});

app.use("/", preguntasRoutes);

module.exports = initializeServer;
