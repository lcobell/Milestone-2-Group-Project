const db = require('../models')

db.Workout.create([
  {
    name: 'Deadlifts',
    sets: 3,
    pounds: 100,
    reps: 5,
    timer: 3,
  },
  {
    name: 'Benchpress',
    sets: 3,
    pounds: 100,
    reps: 5,
    timer: 3,
  },
  {
    name: 'Bicepcurls',
    sets: 3,
    pounds: 100,
    reps: 5,
    timer: 3,
  },
])
  .then(() => {
    console.log('Success!')
    process.exit()
  })
  .catch((err) => {
    console.log('Failure!', err)
    process.exit()
  })
