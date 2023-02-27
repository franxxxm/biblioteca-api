const verificar = (req, res, next)=>{
    const body = req.body;
    const vazios = [];

    for(const key in body){
        if(body[key] == undefined || body[key] == '' || body[key] == null){
            vazios.push(key);
        }
    }

    if(vazios.length > 0){
        vazios.push({mensagem:"tem campos vazios"})

        return res.status(400).json(vazios)
    }

    next();
}


module.exports = verificar;