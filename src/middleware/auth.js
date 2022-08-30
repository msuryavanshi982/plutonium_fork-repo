let jwt = require('jsonwebtoken');

// Authentication :->>>

const validToken = async function(req,res, next){
    let token = req.headers["x-auth-token"];
    if(!token) token = req.headers["X-Auth-Token"];
    if(!token){
        return res.send({status:false, msg: 'Token must be present'});
    }
    let decodedToken = jwt.verify(token, "functionUp-Plutonium");
    if(!decodedToken){
        return res.send({status:false, msg: 'Token is invalid'});
    }
    next();
}//=============================================================================

// Authorization:->>>
const authorization = async function(req,res,next){
    let token = req.headers["x-auth-token"];
    if(!token) token = req.headers["X-Auth-Token"];
    if(!token){
        return res.send({status:false, msg: 'Token must be present'});
    }
    let decodedToken = jwt.verify(token, "functionUp-Plutonium");
    if(!decodedToken){
        return res.send({status:false, msg: 'Token is invalid'});
    }
    let userToBeModified = req.params.userId;
    let userLoggedin = decodedToken.userId;
    if(userToBeModified!==userLoggedin){
        return res.send({status:false, msg:"user loggedin not allowed to modify changes"});
    }
    next();
}

//_____________________________________________________________________________

module.exports.validToken = validToken ;
module.exports.authorization = authorization ;
