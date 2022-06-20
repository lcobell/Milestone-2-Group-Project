const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: String,
  sets: String,
  lbs: String,
  reps: String,
  timer: String,
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
