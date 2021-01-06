const request = require('request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYzBkM3RhbGtlciIsImEiOiJja2psaWlwcnowYWhtMnpxbmZkaWU4cno4In0.hU3oK3YfwB1EIR-XIvuhIA&limit=1"
    request({ url: url, json: true }, (error, message) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)

        } else if (message.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: message.body.features[0].center[1],
                longitude: message.body.features[0].center[0],
                location: message.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode