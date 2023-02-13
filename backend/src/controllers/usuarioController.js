const modelsUsuario = require("../models/usuarioModels");


const createUsuario = async (req, res)=>{
    const usuario = await modelsUsuario.createUsuario(req.body);

    return res.status(200).json({mensagem:true});
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


module.exports = {
    createUsuario,
    getAllUsuario,
    getIdUsuario,
    deleteUsuario,
    setUsuario
}

