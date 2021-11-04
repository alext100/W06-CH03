const express = require("express");
const Things = require("../../database/models/pregunta");

const router = express.Router();

router.get("/things", async (req, res) => {
  const preguntas = await Things.find();
  res.json(preguntas);
});

router.get("/things/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const searchedQuestion = await Things.findById(id);
    if (searchedQuestion) {
      res.json(searchedQuestion);
    } else {
      const error = new Error("Thing not found");
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
    console.log("Están creando una Thing!");
    next();
  },
  async (req, res, next) => {
    try {
      const questions = req.body;
      const newQuestion = await Things.create(questions);
      res.json(newQuestion);
    } catch (error) {
      error.code = 400;
      error.message = "Error in POST new Thing!";
      next(error);
    }
  }
);

router.delete(
  "/things/:id",
  async (req, res, next) => {
    console.log("Están borrando una Thing with id: ", req.params.id);
    next();
  },
  async (req, res, next) => {
    try {
      const thigToDelete = await Things.findByIdAndRemove(req.params.id);
      res.json(thigToDelete);
    } catch (error) {
      error.code = 500;
      error.message = "Error on DELETE Thing!";
      next(error);
    }
  }
);

router.put(
  "/things/:id",
  async (req, res, next) => {
    console.log("Están modificando una Thing with id: ", req.params.id);
    next();
  },
  async (req, res, next) => {
    try {
      const question = req.body;
      const newQuestion = await Things.findByIdAndUpdate(
        req.params.id,
        question
      );
      res.json(newQuestion);
    } catch (error) {
      error.code = 400;
      error.message = "Error on PUT new Thing!";
      next(error);
    }
  }
);

module.exports = router;
