const emprestimoController = require("../controllers/emprestimoController");
const middlewares = require("../middlewares/verificarCampos");
const express = require('express');
const router = express.Router();


router.get("/emprestimo", emprestimoController.getAllEmprestimo);
router.get("/emprestimo/:id", emprestimoController.getIdEmprestimo);
router.post("/emprestimo", middlewares, emprestimoController.createEmprestimo);
router.delete("/emprestimo/:id", emprestimoController.deleteEmprestimo);
router.put("/emprestimo/:id", middlewares, emprestimoController.setEmprestimo);

module.exports = router;