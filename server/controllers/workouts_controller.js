const express = require('express')
const workouts = express.Router()

// INDEX
workouts.get('/', (req, res) => {
  res.send('This is the index at /workouts')
})

module.exports = workouts

// CREATE

// NEW

//POST

//DELETE

//SHOW
