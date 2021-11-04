const { Schema, model } = require("mongoose");

const thingsSchema = new Schema({
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

const Thing = model("Prueba", thingsSchema, "Pruebas");

module.exports = Thing;
