const LivroModels = require("../models/livroModels")

const createLivro = async (req, res)=>{
    const livro = await LivroModels.createLivro(req.body)
    if(livro){
        return res.status(200).json({mensagem:true})
    }
    return res.status(200).json({mensagem:false})
}

const getAllLivro = async (req, res)=>{
    const livro = await LivroModels.getAllLivro()
    res.status(200).json(livro)
}

const deleteLivro = async (req, res)=>{
    const livro = await LivroModels.deleteLivro(req.params.id)
    if(!livro.affectedRows > 0){
        return res.status(200).json({mensagem:false})
    }
    res.status(200).json({mensagem:true})
}

const setLivro = async (req, res) =>{
    const livro = await LivroModels.setLivro(req.params.id, req.body)
    if(!livro.affectedRows > 0){   
        return res.status(200).json({mensagem:false})
    }
    res.status(200).json({mensagem:true})
}



module.exports = {
    createLivro,
    getAllLivro,
    deleteLivro,
    setLivro
}