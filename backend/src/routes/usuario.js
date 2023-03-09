const UsuarioControllers = require("../controllers/usuarioController");
const middlewares = require("../middlewares/verificarCampos")
const express = require('express')
const router = express.Router()

router.post("/usuario",  UsuarioControllers.createUsuario);
router.get("/usuario", UsuarioControllers.getAllUsuario);
router.get("/usuario/:id", UsuarioControllers.getIdUsuario);
router.delete("/usuario/:id", UsuarioControllers.deleteUsuario);
router.put("/usuario/:id", UsuarioControllers.setUsuario);
router.post("/usuario/login", UsuarioControllers.login);

module.exports = router