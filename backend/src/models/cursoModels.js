const bd = require("./bd");



const createCurso = async (nome, idUnivesidade)=>{
    const sql = `INSERT INTO cursos(nome, idUnivesidade) VALUES('${nome}', '${idUnivesidade}')`
    const curso = await bd.query(sql);
    
    return curso;

}

const getAllCurso = async ()=>{
    const sql = `SELECT * FROM cursos`
    const [curso] = await bd.query(sql);

    return curso;
}

const getIdCurso = async(id)=>{
    const sql = `SELECT * FROM cursos WHERE id = '${id}'`
    const [curso] = await bd.query(sql);

    return curso;
}

const deleteCurso = async(id)=>{
    const sql = `DELETE FROM cursos WHERE id = '${id}'`
    const curso = await bd.query(sql);

    return curso
}

const setCurso = async(id, nome)=>{
    const sql = `UPDATE curso SET nome = '${nome}' WHERE id = '${id}'`
    const curso = bd.quey(sql);

    return curso
}


module.exports = {
    createCurso,
    getAllCurso,
    getIdCurso,
    deleteCurso,
    setCurso
}