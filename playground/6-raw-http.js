const http = require('http')
const url = "http://api.weatherstack.com/current?access_key=c2d0b1d4d30467c3e83d5953f340a881&query=40,-75&units=f"

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        // data = data + data.toString()

        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error',error)
})

request.end()