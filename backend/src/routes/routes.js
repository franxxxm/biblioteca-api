const router = require("express").Router();


const livro = require("./livro");
const usuario = require("./usuario");
const universidade = require("./universidade");

router.use("/", livro);
router.use("/", usuario);
router.use("/", universidade);


module.exports = router;