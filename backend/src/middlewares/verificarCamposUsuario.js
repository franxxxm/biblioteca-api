const verificarCampos = async (req, res, next)=>{
    const usuario = req.body;
    const vazios = [];

    for(const key in usuario){
        if(usuario[key] == '' || usuario[key] == null || usuario[key] == undefined){
            vazios.push({campos:key})
        }
    }

    if(vazios.length > 0){
        vazios.push({mensagem:'campo vazio'})
        return res.status(400).json(vazios)
    }

    next();
}

module.exports = {
    verificarCampos
}