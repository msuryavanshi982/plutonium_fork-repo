const publisherModel = require('../models/publisherModel');


const createPublisher = async function (req, res) {
    let publisher = req.body;
    let publisherData = await publisherModel.create(publisher);
    res.send({data : publisherData});
};
//=========================================================================================//
const getPublishersData = async function (req, res) {
    let publishers = await publisherModel.find(); 
    res.send({data: publishers}); 
};

//___________________________________________________________________________________________
module.exports.createPublisher = createPublisher;
module.exports.getPublishersData = getPublishersData;
