const bd = require("./bd")



const createLivro = async (body)=>{
    const array = [
        "'"+body.tombo+"'" ,
        "'"+body.titulo+"'" ,
        "'"+body.autor+"'",
        body.edicao,
        "'"+body.estante+"'",
        body.prateleira,
        body.situacao,
        body.iduniversidade
    ]
    const sql = `INSERT INTO livros(tombo, titulo, autor, edicao, estante, prateleira, situacao, iduniversidade) VALUES(${array}) `
    const [dados] = await bd.query(sql)
    return dados

}

const getAllLivro = async ()=>{
    const sql = "SELECT * FROM livros";
    const [dados] = await bd.query(sql)
    return dados
}

const deleteLivro = async (id)=>{
    const sql = `DELETE FROM livros WHERE id = '${id}'`
    const [dados] = await bd.query(sql)

    return dados
}

const setLivro = async (id, body)=>{
    const sql = `UPDATE livros SET tombo = ${body.tombo}, titulo = '${body.titulo}', autor = '${body.autor}', edicao = ${body.edicao}, estante = '${body.estante}', prateleira = ${body.prateleira}, situacao = ${body.situacao}, iduniversidade = ${body.iduniversidade} WHERE id = '${id}'`

    const dados = await bd.query(sql);

    return dados
}

module.exports = {
    createLivro,
    getAllLivro,
    deleteLivro,
    setLivro
}