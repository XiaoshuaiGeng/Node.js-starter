const path = require('path')
const express = require('express')
const geocode = require('../../weather-app/utils/geocode')
const forecast = require('../../weather-app/utils/forecast')
const hbs = require('hbs')

// Express config
const public_dir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
const app = express()

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(public_dir))

// Setup routing rules
app.get('', (req, res) =>{
    res.render('index',{
        title: 'Weather App',
        name: 'Xiaoshuai'
    })
})

// app.com
// app.com/help
// app.com/about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Xiaoshuai'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Xiaoshuai',
        helpText: 'This is some helpful text'
    })
})

app.get('/weather', (req, res) =>{
    const log_object = {
        forecast: 'Weather forecast',
        Location: 'Windsor, Ontario, Canada'
    }
    // geocode('Windsor, Ontario, Canada', (error, {latitude, longitude, location} = {}) => {
    //     if(error){
    //         // log_object.geocode = error
    //         // console.log(error)
    //     }else{
    //         // console.log(latitude)
    //         log_object.latitude = latitude
    //         // log_object['geocode']['longitude'] = longitude
    //         // log_object['geocode']['location'] = location
    //         forecast(latitude,longitude, (error, response) =>{
    //             if(error){
    //                 // log_object.forecast = error
    //                 // console.log(error)
    //             } else {
    //                 // log_object.foreast = response
    //                 // console.log(response)
    //             }
    //         })
    //     }
    // })
    res.send(log_object)
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: "404 Not Found",
        name: "Xiaoshuai Geng",
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) =>{
    res.render('404', {
        title: "404 Not Found",
        name: "Xiaoshuai Geng",
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})