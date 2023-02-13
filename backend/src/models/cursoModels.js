const bd = require("./bd");



const createCurso = async (nome, idUnivesidade)=>{
    const sql = `INSERT INTO cursos(nome, idUnivesidade) VALUES('${nome}', '${idUnivesidade}')`
    const curso = await bd.query(sql);
    
    return curso;

}

const getAllCurso = async ()=>{
    const sql = `SELECT * FROM cursos`
    const [curso] = bd.query(sql);

    return curso;
}


module.exports = {
    createCurso,
    getAllCurso
}