const univerisdadeController = require("../controllers/universidadeController");
const verificar = require("../middlewares/verificarCamposVazios");
const express = require('express');
const router = express.Router();

router.post("/universidade", verificar, univerisdadeController.createUniversidade);
router.get("/universidade", univerisdadeController.getAllUniversidae);
router.get("/universidade/:id", univerisdadeController.getIdUniversidade);
router.delete("/universidade/:id", univerisdadeController.deleteUniversidade);
router.put("/universidade/:id", verificar, univerisdadeController.setUniversidade);

module.exports = router;