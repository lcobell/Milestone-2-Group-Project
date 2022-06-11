const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: String,
    sets: Number,
    lbs: Number,
    reps: Number,
    timer: Number,
  })
  
  
  const Workout = mongoose.model('Workout', workoutSchema)

  module.exports = Workout;