let jwt = require("jsonwebtoken");

// Authentication :->>>

const validToken = async function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["X-Auth-Token"];
    if (!token) {
      return res
        .satus(401)
        .send({ status: false, msg: "Token must be present" });
    }
    let decodedToken = jwt.verify(token, "functionUp-Plutonium");
    if (!decodedToken) {
      return res.status(400).send({ status: false, msg: "Token is invalid" });
    }
    next();
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.messge });
  }
}; //=============================================================================

// Authorization:->>>
const authorization = async function (req, res, next) {
  try {
    let token = req.headers["x-auth-token"];
   // if (!token) token = req.headers["X-Auth-Token"];
    if (!token) {
      return res
        .status(400)
        .send({ status: false, msg: "Token must be present" });
    }
    let decodedToken = jwt.verify(token, "functionUp-Plutonium");
    if (!decodedToken) {
      return res.status(401).send({ status: false, msg: "Token is invalid" });
    }
    let userToBeModified = req.params.userId;
    let userLoggedin = decodedToken.userId;
    if (userToBeModified != userLoggedin) {
      return res
        .status(403)
        .send({
          status: false,
          msg: "user loggedin not allowed to modify changes",
        });
    }
    next();
  } catch (err) {
    return res.status(500).send({ status: false, msg: err.messge });
  }
};

//_____________________________________________________________________________

module.exports.validToken = validToken;
module.exports.authorization = authorization;
