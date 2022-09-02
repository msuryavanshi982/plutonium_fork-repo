let axios = require("axios");

let getMeme = async function(req, res) {
    try {
        var options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let results = await axios(options);
        console.log(results);
        res.status(200).send({data: results.data});
    } catch(err) {
        console.log(err)
        res.status(500).send({ msg: err.message });
    }
}

let getMemes = async function(req,res) {
    try {
    let template_id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    // let userName = req.headers["username"]; 
    // let password = req.headers.password;
    console.log(template_id, text1, text0);
    if(template_id && text0 && text1) {
    let options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
    }
    let result = await axios(options);
    console.log(result.data);  
    res.status(200).send({ status: true, msg: result.data })
    } else {
        res.status(400).send({status: false, msg:"Please provide valid input data"});
    } 
  }  catch(err) {
    console.log(err)
    res.status(500).send({ msg: err.message });
  }
}

module.exports.getMemes = getMemes;
module.exports.getMeme = getMeme;
