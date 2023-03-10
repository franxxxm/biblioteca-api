const univerisdadeController = require("../controllers/universidadeController");
const middlewares = require("../middlewares/verificarCampos");
const express = require('express');
const router = express.Router();

router.post("/universidade", middlewares, univerisdadeController.createUniversidade);
router.get("/universidade", univerisdadeController.getAllUniversidae);
router.get("/universidade/:id", univerisdadeController.getIdUniversidade);
router.delete("/universidade/:id", univerisdadeController.deleteUniversidade);
router.put("/universidade/:id", middlewares, univerisdadeController.setUniversidade);

module.exports = router;