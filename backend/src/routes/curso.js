const cursoController = require("../controllers/cursoController");
const middlewares = require("../middlewares/verificarCampos");
const express = require('express');
const router = express.Router();

router.post("/curso", middlewares, cursoController.createCurso);
router.get("/curso", cursoController.getAllCurso);
router.get("/curso/:id", cursoController.getIdCurso);
router.put("/curso/:id", middlewares, cursoController.setCurso);
router.delete("/curso/:id", cursoController.deleteCurso);

module.exports = router;