const request = require('request')

// const url = "http://api.weatherstack.com/current?access_key=c2d0b1d4d30467c3e83d5953f340a881&query=Windsor"

// request({url: url}, (error, response)=> {
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYzBkM3RhbGtlciIsImEiOiJja2psaWlwcnowYWhtMnpxbmZkaWU4cno4In0.hU3oK3YfwB1EIR-XIvuhIA&limit=1"
const token = ""

const query = ""

request({url: url, json:true}, (error,message) =>{
    // const data = JSON.parse(message.body)
    // console.log(typeof(message))

    const latitude = message.body.features[0].center[1]
    const longitude = message.body.features[0].center[0]
    console.log(latitude,longitude)
})