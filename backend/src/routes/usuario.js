const UsuarioControllers = require("../controllers/usuarioController");
const middlewares = require("../middlewares/verificarCampos")
const express = require('express')
const router = express.Router();
const DadosToken = require("../middlewares/receberDadosToken");

router.post("/usuario",  UsuarioControllers.createUsuario);
router.get("/usuario", UsuarioControllers.getAllUsuario);
router.get("/usuario/:token", DadosToken, UsuarioControllers.getIdUsuario);
router.delete("/usuario/:token", DadosToken, UsuarioControllers.deleteUsuario);
router.put("/usuario/:token", DadosToken, UsuarioControllers.setUsuario);
router.post("/usuario/login", UsuarioControllers.login);

module.exports = router