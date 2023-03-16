
module.exports = (req, res, next)=>{
    const cookie = req.cookies;
    if(cookie.token){
    //verificar sua rota e rediricionalo
        switch (req.url) {
            case "/login":
                return res.redirect("/usuario/");
            break;
            case "/registro":
                return res.redirect("/usuario/");
            break;
        }
    }
    if(!cookie.token){
        switch (req.url) {
            case "/perfil":
                return res.redirect("/usuario/");
                break;
            case "/biblioteca":
                return res.redirect("/usuario/");
                break;
            
        }
    }
        
       
    next();
}