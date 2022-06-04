const router = require('express').Router()
const db = require('../models')

//HOME
router.get('/', (req, res) => {
  db.Workout.find()
    .then((workouts) => {
      res.render('index', { workouts })
    })
    .catch((err) => {
      console.log('err', err)
      res.render('index')
    })
})

//CREATE
router.post('/', (req, res) => {
  db.Workout.create(req.body)
    .then(() => {
      res.redirect('index')
    })
    .catch((err) => {
      console.log('err', err)
      res.render('index')
    })
})

//NEW
router.get('/new', (req, res) => {
  res.render('index')
})

//DETAILS
router.get('/:id', (req, res) => {
  db.Workout.findById(req.params.id)
    .then((workout) => {
      res.render('index', { workout })
    })
    .catch((err) => {
      console.log('err', err)
      res.render('index')
    })
})

//UPDATE
router.put('/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(index)
    })
    .catch((err) => {
      console.log('err', err)
      res.render('index')
    })
})

//DELETE
router.delete('/:id', (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then((workout) => {
      res.redirect('index')
    })
    .catch((err) => {
      console.log('err', err)
      res.render('index')
    })
})

//EDIT
router.get('/:id/edit', (req, res) => {
  db.Workout.findById(req.params.id)
    .then((workout) => {
      res.render('index', { workout })
    })
    .catch((err) => {
      res.render('index')
    })
})

module.exports = router
