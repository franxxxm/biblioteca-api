
module.exports = (req, res, next)=>{
    const jwt = require('jsonwebtoken');

    const token = req.params.token;
    const decoded = jwt.decode(token, { complete: true });
    const payload = decoded.payload;
    
    req.params.id = payload.id;
    
    next();
}