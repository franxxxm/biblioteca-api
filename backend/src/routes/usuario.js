const UsuarioControllers = require("../controllers/usuarioController");
const middlewares = require("../middlewares/verificarCampos")
const express = require('express')
const router = express.Router()

router.post("/usuario", middlewares, UsuarioControllers.createUsuario);
router.get("/usuario", UsuarioControllers.getAllUsuario);
router.get("/usuario/:id", UsuarioControllers.getIdUsuario);
router.delete("/usuario/:id", UsuarioControllers.deleteUsuario);
router.put("/usuario/:id", middlewares, UsuarioControllers.setUsuario);


module.exports = router