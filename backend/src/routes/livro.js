const LivroControllers = require("../controllers/livroController");
const verificar = require("../middlewares/verificarCamposVazios");
const express = require('express')
const router = express.Router()


router.post("/livro", verificar, middlewares.verificarCampos , LivroControllers.createLivro)
router.get("/livro", LivroControllers.getAllLivro)
router.delete("/livro/:id", LivroControllers.deleteLivro)
router.put("/livro/:id", verificar, middlewares.verificarCampos,  LivroControllers.setLivro);


module.exports = router;
