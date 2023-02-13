const modelsUniversidade = require("../models/universidadeMoldes");


const createUniversidade = async (req, res)=>{
    const uni = await modelsUniversidade.createUniversidade(req.body);

    return res.status(200).json({mensagem:true})
} 

const getAllUniversidae = async (req, res)=>{
    const uni = await modelsUniversidade.getAllUniversidae();

    return res.status(200).json(uni);
}

const getIdUniversidade = async (req, res)=>{
    const uni = await modelsUniversidade.getIdUniversidade(req.params.id)

    return res.status(200).json(uni)
}

const deleteUniversidade = async (req, res)=>{
   const uni = await modelsUniversidade.deleteUniversidade(req.params.id);

   return res.status(200).json({mensagem:true})

}

const setUniversidade = async (req, res)=>{
    const uni = await modelsUniversidade.setUniversidade(req.params.id, req.body.nome);

    return res.status(200).json({mensagem:true})
}

module.exports = {
    createUniversidade,
    getAllUniversidae,
    getIdUniversidade,
    deleteUniversidade,
    setUniversidade
}