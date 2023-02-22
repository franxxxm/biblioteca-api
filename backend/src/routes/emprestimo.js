const emprestimoController = require("../controllers/emprestimoController");
const verificar = require("../middlewares/verificarCamposVazios");
const express = require('express');
const router = express.Router();


router.get("/emprestimo", emprestimoController.getAllEmprestimo);
router.get("/emprestimo/:id", emprestimoController.getIdEmprestimo);
router.post("/emprestimo", verificar, emprestimoController.createEmprestimo);
router.delete("/emprestimo/:id", emprestimoController.deleteEmprestimo);
router.put("/emprestimo/:id", verificar, emprestimoController.setEmprestimo);

module.exports = router;