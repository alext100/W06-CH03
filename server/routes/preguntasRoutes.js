const express = require("express");
const Prueba = require("../../database/models/pregunta");

const router = express.Router();

router.get("/", async (req, res) => {
  const preguntas = await Prueba.find();
  res.json(preguntas);
});

router.get("/pregunta/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedQuestion = await Prueba.findById(id);
    if (searchedQuestion) {
      res.json(searchedQuestion);
    } else {
      const error = new Error("Pet not found");
      error.code = 404;
      throw error;
    }
  } catch (error) {
    error.code = 400;
    next(error);
  }
});

module.exports = router;
