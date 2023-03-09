const { Model } = require("sequelize");
const bd = require("./bd");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');


    const createUsuario = async ({nome, email, senha, adm, CPF, tipoUser, idCurso, rua, bairro, cidade, UF, CEP, fone1, fone2, fone3, obs})=>{ 
        const sql1 = `SELECT * FROM usuarios WHERE email = '${email}'`
        const [email1] = await bd.query(sql1)
        if(email1.length > 0) return true;
       
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(senha, salt);
        senha = hash;
       
        const usuario = [
            "'"+ nome +"'",
            "'"+email+"'",
            "'"+senha+"'",
            "'"+adm+"'",
            "'"+CPF+"'",
            "'"+tipoUser+"'",
            "'"+idCurso+"'",
            "'"+rua+"'",
            "'"+bairro+"'",
            "'"+cidade+"'",
            "'"+UF+"'",
            "'"+CEP+"'",
            "'"+fone1+"'",
            "'"+fone2+"'",
            "'"+fone3+"'",
            "'"+obs+"'"
            ]
        const sql = `INSERT INTO usuarios(nome, email, senha, adm, CPF, tipoUser, idCurso, rua, bairro, cidade, UF, CEP, fone1, fone2, fone3, obs) VALUES(${usuario})`
        const [resultado] = await bd.query(sql);
        
        return false;
    }

    const getAllUsuario = async ()=>{
        const sql = "SELECT * FROM usuarios"
        const usuario = await bd.query(sql);

        return usuario
    }

    const getIdUsuario = async (id)=>{
        const sql = `SELECT * FROM usuarios WHERE id = '${id}'`
        const [usuario] = await bd.query(sql)

        return usuario
    }
     
    const deleteUsuario = async (id)=>{
        const sql = `DELETE FROM usuarios WHERE id = '${id}' `
        const usuario = bd.query(sql)
        
        return usuario
    }

    const setUsuario = async(id, {nome, email, senha, adm, CPF, tipoUser, idCurso, rua, bairro, cidade, UF, CEP, fone1, fone2, fone3, obs})=>{
        const sql = `UPDATE usuarios SET  nome = '${nome}', email = '${email}', senha = '${senha}', adm = '${adm}', CPF = '${CPF}', tipoUser = '${tipoUser}', idCurso = '${idCurso}', rua = '${rua}', bairro = '${bairro}', cidade = '${cidade}', UF = '${UF}', CEP = '${CEP}', fone1 = '${fone1}', fone2 = '${fone2}', fone3 = '${fone3}', obs = '${obs}' WHERE id = '${id}' `
        const usuario = await bd.query(sql);

        return usuario;
    }

    const login = async({email, senha})=>{
        const sql = `SELECT * FROM usuarios WHERE email = '${email}'`;
        const [dados] =  await bd.query(sql)
        if(dados.length <= 0) return false;

        for(const key in dados){
            return {
                id:dados[key].id,
                email:dados[key].email,
                senha:dados[key].senha,
                senhaUser:senha
            }
        }
    }

module.exports = {
    createUsuario,
    getAllUsuario,
    getIdUsuario,
    deleteUsuario,
    setUsuario,
    login
}
