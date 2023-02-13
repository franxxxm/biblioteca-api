const UsuarioControllers = require("../controllers/usuarioController");
const middlewares = require("../middlewares/verificarCamposUsuario")
const express = require('express')
const router = express.Router()

router.post("/usuario", middlewares.verificar, UsuarioControllers.createUsuario);
router.get("/usuario", UsuarioControllers.getAllUsuario);
router.get("/usuario/:id", UsuarioControllers.getIdUsuario);
router.delete("/usuario/:id", UsuarioControllers.deleteUsuario);
router.put("/usuario/:id", middlewares.verificar, UsuarioControllers.setUsuario);


module.exports = router