const userModel= require("../models/userModel");

const createUser = async function (req, res) {
    let user = req.body; 
    let saveUser = await userModel.create(user);
    res.send({msg: saveUser}); 
};

module.exports.createUser= createUser;