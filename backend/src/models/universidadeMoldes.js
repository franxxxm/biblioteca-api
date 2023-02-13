const bd = require("./bd")


const createUniversidade = async ({nome})=>{
    const sql = `INSERT INTO  universidades(nome) VALUES('${nome}') `
    const universidade = await bd.query(sql);

    return universidade;
}

const getAllUniversidae  = async ()=>{
    const sql = `SELECT * FROM universidades `

    const [universidade] = await bd.query(sql);

    return universidade;
}

const getIdUniversidade = async (id)=>{
    const sql = `SELECT * FROM universidades WHERE id = '${id}'`
    const [univerisdade] = await bd.query(sql);

    return univerisdade;
}

const deleteUniversidade = async(id)=>{
    const sql = `DELETE FROM universidades WHERE id = '${id}'`;
    const univerisdade = await bd.query(sql);

    return univerisdade;
}

const setUniversidade = async(id, nome)=>{
    const sql = `UPDATE universidades SET nome = '${nome}'  WHERE id = '${id}'`
    const univerisdade = await bd.query(sql);

    return univerisdade
}


module.exports = {
    createUniversidade,
    getAllUniversidae,
    getIdUniversidade,
    deleteUniversidade,
    setUniversidade

}