const path = require('path')
const express = require('express')
const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')
const hbs = require('hbs')

// Express config
const public_dir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

const app = express()
const port = process.env.PORT || 3000

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
    
    if (!req.query.address) {
        res.send({
            error: "You must provide an address"
        })
    } else {
        console.log(req.query.address)
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({error})
            }
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({error})
                } else {
                    return res.send({
                        location: location,
                        latitude: latitude,
                        longitude: longitude,
                        forecast: forecastData
                    })
                }
            })
        })
        
    }


})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: [
            req.query.search
        ]
    })
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

app.listen(port, () => {
    console.log('Server is up on port 3000')
})