const modelsEmprestimo = require("../models/emprestimoModels");


 const createEmprestimo = async(req, res)=>{
    const emprestimo = await modelsEmprestimo.createEmprestimo(req.body);
    return res.status(200).json({mensagem:true});
 }

 const getAllEmprestimo = async(req, res)=>{
    const emprestimo = await modelsEmprestimo.getAllEmprestimo();

    return res.status(200).json(emprestimo);
 }

 const getIdEmprestimo = async (req, res)=>{
    const emprestimo = await modelsEmprestimo.getIdEmprestimo(req.params.id);

    return res.status(200).json(emprestimo)
 }

 const deleteEmprestimo = async (req, res)=>{
    const emprestimo = await modelsEmprestimo.deleteEmprestimo(req.params.id);

    return res.status(200).json({mensagem:true})
 }

 const setEmprestimo = async(req, res)=>{
   const emprestimo = await modelsEmprestimo.setEmprestimo(req.params.id,req.body);


   return res.status(200).json({mensagem:true});
 }


 module.exports = {
     createEmprestimo,
     getAllEmprestimo,
     getIdEmprestimo,
     deleteEmprestimo,
     setEmprestimo
   }