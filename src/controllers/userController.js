const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//=========================api-1========================================>>>

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let user = await userModel.create(data);
    res.status(201).send({ status: true, data: user });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

//=========================api-2========================================>>>

const loginUser = async function (req, res) {
  try {
    let emailId = req.body.emailId;
    let password = req.body.password;
    
    if(emailId=="" || password ==""){
        res.status(400).send({status:false , msg: "email and password must be present"});
    }
    let login = await userModel.findOne({ emailId: emailId, password: password });
    if (!login) {
      return res.status(401).send({ msg: "Email & Password is not correct" });
    }
    let token = jwt.sign(
      {
        userId: login._id, //payload
        batch: "Plutonium",
      },
      "functionUp-Plutonium"
    ); //secret key
    res.setHeader("x-auth-token", token);
    res.status(200).send({ status: true, data: { token: token } });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

//=========================api-3========================================>>>

const getUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res.status(400).send({ msg: "user Id is required" });
    }
    res.status(200).send({ status: true, data: userDetails });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

//=========================api-4========================================>>>

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;

    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res
        .status(400)
        .send({ status: false, msg: "no such user is exist" });
    }
    let userData = req.body;
    let updateUser = await userModel.findOneAndUpdate(
      { _id: userId },
      userData,
      {
        new: true,
      }
    );
    res.status(200).send({ status: true, data: updateUser });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

//=========================api-5========================================>>>

const deleteUser = async function (req, res) {
  try {
    let userId = req.params.userId;

    let userDetails = await userModel.findById(userId);
    if (!userDetails) {
      return res
        .status(400)
        .send({ status: false, msg: "no such user is exist" });
    }
    let userData = req.body;
    userData.isDeleted = true;
    let deleteUser = await userModel.updateOne({ _id: userId }, userData, {
      new: true,
    });
    res.status(200).send({ status: true, data: deleteUser });
  } catch (err) {
    return res.status(500).send({ msg: err.message });
  }
};

//=======================================================================>>>

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
