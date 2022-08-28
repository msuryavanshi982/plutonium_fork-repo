const valHeader = function (req, res, next) {
    let header = req.headers;
    let appType = header["isFreeAppUser"];
    if (!appType) {
      appType = header["isfreeappuser"];
    }
    else {
      return res.send({ msg: "header is missing" });
    }
  
    if (appType === "true") {
      req.appTypeFree = true;
    } else {
      req.appTypeFree = false;
    }
    next();
  };
  
  module.exports.valHeader = valHeader;