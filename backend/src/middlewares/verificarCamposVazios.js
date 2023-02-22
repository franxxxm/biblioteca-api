const verificar = (req, res, next)=>{
    const body = req.body;
    const vazios = [];

    for(const key in body){
        if(body[key] == '' || body[key] == null || body[key] == undefined){
            vazios.push({campos:key})        
           }
    }

    if(vazios.length > 0){
        vazios.push({mensagem:'alguns campos estão vazios'})
        return res.status(400).json(vazios)
    }
    next();
}

module.exports = verificar;