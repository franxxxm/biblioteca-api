const UsuarioControllers = require("../controllers/usuarioController");
const verificar = require("../middlewares/verificarCamposVazios");
const express = require('express')
const router = express.Router()

router.post("/usuario", verificar, UsuarioControllers.createUsuario);
router.get("/usuario", UsuarioControllers.getAllUsuario);
router.get("/usuario/:id", UsuarioControllers.getIdUsuario);
router.delete("/usuario/:id", UsuarioControllers.deleteUsuario);
router.put("/usuario/:id", verificar, UsuarioControllers.setUsuario);


module.exports = router