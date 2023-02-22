const cursoController = require("../controllers/cursoController");
const verificar = require("../middlewares/verificarCamposCurso");
const express = require('express');
const router = express.Router();

router.post("/curso", verificar, cursoController.createCurso);
router.get("/curso", cursoController.getAllCurso);
router.get("/curso/:id", cursoController.getIdCurso);
router.put("/curso/:id", cursoController.setCurso);
router.delete("/curso/:id", cursoController.deleteCurso);

module.exports = router;