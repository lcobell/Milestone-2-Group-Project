const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: Number,
  lbs: Number,
  reps: Number,
  timer: Number,
})

module.exports = mongoose.model('Workout', workoutSchema)
