const emprestimoController = require("../controllers/emprestimoController");
const express = require('express');
const router = express.Router();


router.get("/emprestimo", emprestimoController.getAllEmprestimo);
router.get("/emprestimo/:id", emprestimoController.getIdEmprestimo);
router.post("/emprestimo", emprestimoController.createEmprestimo);
router.delete("/emprestimo/:id", emprestimoController.deleteEmprestimo);
router.put("/emprestimo/:id", emprestimoController.setEmprestimo);

module.exports = router;