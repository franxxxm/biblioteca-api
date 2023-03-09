const modelsUsuario = require("../models/usuarioModels");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const createUsuario = async (req, res)=>{
    const usuario = await modelsUsuario.createUsuario(req.body);
    
    if(usuario) return res.status(401).json({mensagem:false}); 
     res.status(200).json({mensagem:true});
}

const getAllUsuario = async (req, res)=>{
    const usuario = await modelsUsuario.getAllUsuario();

    return res.status(200).json(usuario);
}

const getIdUsuario = async (req, res)=>{
    const usuario = await modelsUsuario.getIdUsuario(req.params.id);

    return res.status(200).json(usuario);
}

const deleteUsuario = async (req, res)=>{
    const usuario = await modelsUsuario.deleteUsuario(req.params.id);

    return res.status(200).json({mensagem:true});

}

const setUsuario = async (req, res)=>{
    const usuario = await modelsUsuario.setUsuario(req.params.id, req.body);

    return res.status(200).json({mensagem:true});
}

const login = async (req, res)=>{
    const dados = await modelsUsuario.login(req.body);

    if(dados == false) return res.status(401).json({mensagem:false});

    bcrypt.compare(dados.senhaUser, dados.senha, function(err, result){
       if(result){
            const info = {
                id:dados.id,
                email:dados.email
            }
        const segredo = '349ur309r039ir93i'
        const token = jwt.sign(info, segredo, {expiresIn:'1h'});
        return res.status(200).header('Authorization', `Bearer ${token}`).json({mensagem:true})

       }

       return res.status(401).json({mensagem:false});
    })
    
    }

module.exports = {
    createUsuario,
    getAllUsuario,
    getIdUsuario,
    deleteUsuario,
    setUsuario,
    login
}

