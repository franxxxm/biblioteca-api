const LivroControllers = require("../controllers/livroController");
const middlewares = require("../middlewares/verificarCampos");
const express = require('express');
const router = express.Router();


router.post("/livro", middlewares, LivroControllers.createLivro)
router.get("/livro", LivroControllers.getAllLivro)
router.delete("/livro/:id", LivroControllers.deleteLivro)
router.put("/livro/:id", middlewares, LivroControllers.setLivro);


module.exports = router;
