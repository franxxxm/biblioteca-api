const express = require("express");
const router = express.Router();
const app = express();
const verificarRota = require("../middlewares/verificarRota");
const jwt = require('jsonwebtoken');

router.use((req, res, next)=>{
    const cookie = req.cookies;

    if(cookie.token){
        const token = cookie.token;
        if(req.session.user) return next();
    // Decodifica o token e extrai os dados do payload
        const decoded = jwt.decode(token, { complete: true });
        const payload = decoded.payload;
        req.session.user = payload.id;
    }

    next();
})

    router.get("/", (req, res)=>{
        res.render("./usuario/inicio", {inicio:true, title:"Início", user:req.session.user || null})
    })

    router.get("/perfil", verificarRota, (req, res)=>{
        res.render("./usuario/perfil", {perfil:true, title:"Perfil", user:req.session.user || null})
    })

    router.get("/login", verificarRota, (req, res)=>{
        res.render("./usuario/login.hbs", {login:true, title:'Login', user:req.session.user || null})
    })

    router.get("/biblioteca", verificarRota, (req, res)=>{
        res.render("./usuario/biblioteca", {biblioteca:true, title:'Biblioteca', user:req.session.user || null})
    })

    router.get("/registro", verificarRota, (req, res)=>{
        res.render("./usuario/registro.hbs", {registro:true, title:'Registro'});
    })

    router.get("/sair", (req, res)=>{
        const cookie = req.cookies;
        if(cookie.token){
        delete req.session.user;
        res.cookie('token', '', { expires: new Date(0) });
        }
        return res.redirect("/usuario/")
    })


module.exports = router;