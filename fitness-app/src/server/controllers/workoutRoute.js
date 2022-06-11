const express = require('express'),
  router = require('express').Router()
const Workout = require('../models/workouts')

//INDEX
router.route('/profile').get((req, res) => {
  Workout.find().then((foundWorkouts) => res.json(foundWorkouts))
})

//CREATE
router.route('/routines').post((req, res) => {
  const title = req.body.title
  const content = req.body.content
  const sets = req.body.sets
  const lbs = req.body.lbs
  const reps = req.body.reps
  const timer = req.body.timer
  const newRoutine = new Workout({
    title,
    content,
    sets,
    lbs,
    reps,
    timer,
  })

  newRoutine.save()
})

//UPDATE
router.route('/routines/:id').put((req, res, next) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
        console.log('Workout updated successfully !')
      }
    }
  )
})

//DELETE
router.route('/routines/:id').delete((req, res, next) => {
  Workout.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

//GET SINGLE WORKOUT or EDIT
router.route('/routines/:id').get((req, res) => {
  Workout.findById(req.params.id, (error, data) => {
    if (error) {
      return error
    } else {
      res.json(data)
    }
  })
})
module.exports = router
