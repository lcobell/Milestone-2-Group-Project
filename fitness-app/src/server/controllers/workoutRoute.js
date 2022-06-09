const express = require('express'),
  router = require('express').Router()
const Workout = require('../models/workouts')

//
router.route('/routine').post((req, res) => {
  const title = req.body.title
  const content = req.body.content
  const newRoutine = new Workout({
    title,
    content,
  })

  newRoutine.save()
})

router.route('/profile').get((req, res) => {
  Workout.find().then((foundWorkouts) => res.json(foundWorkouts))
})

module.exports = router
