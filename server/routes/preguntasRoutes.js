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

router.post(
  "/new",
  (req, res, next) => {
    console.log("Están creando una pregunta!");
    next();
  },
  async (req, res, next) => {
    try {
      const questions = req.body;
      const newQuestion = await Prueba.create(questions);
      res.json(newQuestion);
    } catch (error) {
      error.code = 400;
      error.message = "Error in POST new question!";
      next(error);
    }
  }
);

module.exports = router;
