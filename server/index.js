// Require needed modules.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

// Create a homepage route.
app.get('/', function (req, res) {
  // This gets sent to the client
  // (your web browser most likely!)
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
