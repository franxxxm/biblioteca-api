const express = require("express");
const router = express.Router();

    router.get("/", (req, res)=>{
        res.render("./usuario/inicio", {title:"Início"})
    })

    router.get("/login", (req, res)=>{
        res.render("./usuario/login.hbs", {title:'Login'})
    })

    router.get("/registro", (req, res)=>{
        res.render("./usuario/registro.hbs", {title:'Registro'});
    })


module.exports = router;