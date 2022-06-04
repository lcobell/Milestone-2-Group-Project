const router = require('express').Router()
const db = require('../models')

//HOME
router.get('/', (req, res) => {
  db.Workout.find()
    .then((workouts) => {
      res.render('workouts/index', { workouts })
    })
    .catch((err) => {
      console.log('err', err)
      res.render('error404')
    })
})

//CREATE
router.post('/', (req, res) => {
  db.Workout.create(req.body)
    .then(() => {
      res.redirect('/workouts')
    })
    .catch((err) => {
      console.log('err', err)
      res.render('error404')
    })
})

//NEW
router.get('/new', (req, res) => {
  res.render('workouts/new')
})

//DETAILS
router.get('/:id', (req, res) => {
  db.Workout.findById(req.params.id)
    .then((workout) => {
      res.render('workouts/my-workouts', { workout })
    })
    .catch((err) => {
      console.log('err', err)
      res.render('error404')
    })
})

//UPDATE
router.put('/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/workouts/${req.params.id}`)
    })
    .catch((err) => {
      console.log('err', err)
      res.render('error404')
    })
})

//DELETE
router.delete('/:id', (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then((workout) => {
      res.redirect('/workouts')
    })
    .catch((err) => {
      console.log('err', err)
      res.render('error404')
    })
})

//EDIT
router.get('/:id/edit', (req, res) => {
  db.Workout.findById(req.params.id)
    .then((workout) => {
      res.render('workouts/edit', { workout })
    })
    .catch((err) => {
      res.render('error404')
    })
})

module.exports = router
