require("dotenv").config();
// const inquirer = require("inquirer");
require("./database/index");

const initializeServer = require("./server/index");

const port = process.env.SERVER_PORT || 5000;

/* (async () => {
  const answers = await inquirer.prompt([
    {
      name: "puerto",
      type: "input",
      message: "¿En qué puerto quieres que se inicie la API?",
      default: "4000",
    },
    {
      name: "databases",
      type: "list",
      message: "¿Qué base de datos quieres usar?",
      choices: [
        {
          name: "PruebasDB",
          value: "Pruebas",
        },
        {
          name: "ProduccionDB",
          value: "Produccion",
        },
      ],
      default: "Pruebas",
    },
    {
      name: "modificardb",
      type: "list",
      message:
        "¿Quieres permitir que los clientes puedan crear, borrar y modificar?",
      choices: [
        {
          name: "Permitir",
          value: "Si",
        },
        {
          name: "NoPermitir",
          value: "No",
        },
      ],
      default: "No",
    },
  ]);
  console.log(answers);
})(); */

initializeServer(port);
