const request = require("request");

const forecast = (latitude,longitude,callback) => {
    const url =
      `http://api.weatherstack.com/current?access_key=f2f576446fcd773733c2118ed930c105&query=${latitude},${longitude}&units=m`;

    request({url,json: true}, (error,{body}) => {
        if(error){
            callback('Unable to connect to weather services',undefined);
        } else if(body.error){
            callback('Unable to find location from coordinates',undefined);
        } else{
            callback(
              undefined,
              `${body.current.weather_descriptions[0]} .It is ${body.current.temperature} degrees out, but it feels like ${body.current.feelslike} degrees out`
            );
        }
    })
}

module.exports = forecast