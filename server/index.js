// Require needed modules.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

app.use('/places', require('./controllers/workouts'))

// Create a homepage route.
app.get('/', function (req, res) {
  res.send('Hello world')
})

// Create a second route.
app.get('/second', function (req, res) {
  res.send('My Second Page!')
})

app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Page</h1>')
})

// Listen for connections.
app.listen(3000, function () {
  console.log('I am awake!')
})
