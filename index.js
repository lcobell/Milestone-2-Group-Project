// Require needed modules.
require('dotenv').config()
const express = require('express')

const port = process.env.PORT || 3000

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', function (req, res) {
  res.send('Hello world')
})

//controllers
const workoutController = require('./server/controllers/workouts_controller.js')
app.use('/workouts', workoutController)

app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>')
})

// Listen for connections.
app.listen(port, () => console.log(`Listening on port ${port}`))

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }) //Line 10
})
