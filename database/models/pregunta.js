const { Schema, model } = require("mongoose");

const pruebaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  default: {
    type: String,
    required: true,
  },
  choices: {
    type: Array,
    required: false,
  },
});

const Prueba = model("Prueba", pruebaSchema, "Pruebas");

module.exports = Prueba;
