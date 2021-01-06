const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/forecast?access_key=c2d0b1d4d30467c3e83d5953f340a881&query=" + latitude+","+longitude 
    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback(error, undefined)
        } else if (response.body.error) { 
            callback(response.body.error, undefined)
        } else {
            callback(undefined, response.body.forecast)
        }

    })

}
module.exports = forecast