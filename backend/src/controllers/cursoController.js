const CursoModels = require("../models/cursoModels");


const createCurso = async (req, res)=>{ 
    const curso = await CursoModels.createCurso(req.body.nome, req.body.idUniversidade);

    return res.status(200).json({mensagem:true});
}

const getAllCurso = async (req, res)=>{
    const curso = await CursoModels.getAllCurso();

    return res.status(200).json({mensagem:true});
}

const getIdCurso = async (req, res)=>{
    const curso = await CursoModels.getAllCurso(req.params.id);

    return res.status(200).json({mensagem:true})
}

const deleteCurso = async (req, res)=>{
    const curso = await CursoModels.deleteCurso(req.params.id);

    return res.status(200).json({mensagme:true});
}

const setCurso = async (req, res)=>{
    const curso = await CursoModels.setCurso(req.params.id)

    return res.status(200).json({mensagem:true})
}

module.exports = {
    createCurso, 
    getAllCurso,
    getIdCurso,
    deleteCurso,
    setCurso
}