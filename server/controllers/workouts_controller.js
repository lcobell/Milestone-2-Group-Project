const router = require('express').Router()
const db = require('../models')

//HOME
router.get('/', (req, res) => {
  db.Workout.find()
})

//CREATE
router.post('/', (req, res) => {
  db.Workout.create(req.body)
})

//NEW
router.get('/new', (req, res) => {
  res.render('index')
})

//DETAILS
router.get('/:id', (req, res) => {
  db.Workout.findById(req.params.id)
})

//UPDATE
router.put('/:id', (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body)
})

//DELETE
router.delete('/:id', (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
})

//EDIT
router.get('/:id/edit', (req, res) => {
  db.Workout.findById(req.params.id)
})

module.exports = router
