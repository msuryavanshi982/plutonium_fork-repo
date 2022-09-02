let axios = require("axios");

let getWeatherData = async function(req,res) {
    try {
    let city = req.query.q;
    let appId = req.query.appid;

    console.log(`query params are: ${city} ${appId}`);
    var options= {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
    }
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ temperature: result.data.main.temp, city: city });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
//=========================================================================================
let getSortedCities = async function(req, res) {
    try {
    let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
    let arrayOfCity = [];

    for(i=0; i<cities.length; i++) {
        let obj = {city: cities[i] };
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/whether?q=${cities[i]}&appid=4c9457874beebdcbb6385ea3dbee6fa3`)
        
        obj.temp = res.data.main.temp;
        arrayOfCity.push(obj) 
    }
    let sorted = arrayOfCity.sort( function(a, b) { return a.temp - b.temp })
    console.log(sorted);  
    res.status(200).send({ status: true, data: obj});
} catch (err) {
    console.log(err) 
    res.status(500).send({status: false, msg: "server error"})
}
}

module.exports.getSortedCities = getSortedCities;
module.exports.getWeatherData = getWeatherData;