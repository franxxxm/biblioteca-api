const bd = require("./bd");


const createEmprestimo = async ({idLivro1, idLivro2, idLivro3, idUser, idAdmEmp, idAdmDev, dataEmp, dataDev})=>{
    const sql = `INSERT INTO emprestimos(idLivro1, idLivro2, idLivro3, idUser, idAdmEmp, idAdmDev, dataEmp, dataDev) VALUES('${idLivro1}', '${idLivro2}', '${idLivro3}', '${idUser}', '${idAdmEmp}', '${idAdmDev}', '${dataEmp}', '${dataDev}')`
    const emprestimo = await bd.query(sql);

    return emprestimo;
}

const getAllEmprestimo = async()=>{
    const sql = `SELECT FROM emprestimos`;
    const [emprestimo] = await bd.query(sql)

    return emprestimo
}


const getIdEmprestimo = async(id)=>{
    const sql = `SELECT FROM emprestimos WHERE id = '${id}'`    
    const [emprestimo] = await bd.query(sql);

    return emprestimo
}

const deleteEmprestimo = async(id)=>{
    const sql = `DELETE FROM`
}