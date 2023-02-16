const router = require("express").Router();


const livro = require("./livro");
const usuario = require("./usuario");
const universidade = require("./universidade");
const curso = require("./curso");
const emprestimo = require("./emprestimo")

router.use("/", livro);
router.use("/", usuario);
router.use("/", universidade);
router.use("/", curso);
router.use("/", emprestimo);

module.exports = router;