const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const address = process.argv[2]
// const url = "http://api.weatherstack.com/current?access_key=c2d0b1d4d30467c3e83d5953f340a881&query=Windsor"

if (!address){
    console.log('Please provide an address')
}else {
    console.log(process.argv)
    geocode(address, (error, {latitude, longitude, location} = {}) => {
        // console.log('Error', error)
        // console.log('Data', data)
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            } else {
                console.log(location)
                console.log(forecastData)
            }
        })
    })
}
