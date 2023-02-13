const LivroControllers = require("../controllers/livroController");
const middlewares = require("../middlewares/verificarCamposLivro")
const express = require('express')
const router = express.Router()


router.post("/livro", middlewares.verificarCampos , LivroControllers.createLivro)
router.get("/livro", LivroControllers.getAllLivro)
router.delete("/livro/:id", LivroControllers.deleteLivro)
router.put("/livro/:id", middlewares.verificarCampos,  LivroControllers.setLivro);


module.exports = router;
