// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

//Controllers
const workoutController = require('./controllers/workouts_controller')
app.use('/workouts', workoutController)

// Express
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// Routes
app.get('/', function (req, res) {
  res.send('home')
})

app.get('*', (req, res) => {
  res.send('error404')
})

// Listen for Connections
app.listen(process.env.PORT)

//REACT connectiong
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' })
})
