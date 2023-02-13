const CursoModels = require("../models/cursoModels");


const createCurso = async (req, res)=>{ 
    const curso = await CursoModels.createCurso(req.body.nome, req.body.idUniversidade);

    return res.status(200).json({mensagem:true});
}