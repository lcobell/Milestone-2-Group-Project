const express = require('express'),
  router = require('express').Router()
const Workout = require('../models/workouts')

//
router.post("/routine", (req, res)=>{
  const title = req.body.title;
  const content = req.body.content;
  const lbs = req.body.lbs;
  const reps = req.body.reps;
  const timer = req.body.timer;
  const newRoutine = new Workout({
      title,
      content,
      lbs,
      reps,
      timer,
  });

  newRoutine.save();
})

router.get("/profile", (req, res) => {
  Workout.find()
      .then(foundWorkouts => res.json(foundWorkouts))
      .catch(err => res.status(400).json("Error: " + err));
});


router.delete('/delete/:id', (req,res) => {
  const id = req.params.id;
  Workout.findByIdAndDelete({_id: id}, (req, res, err) => {
    if(!err){
      console.log("Item deleted");
    }else {
      console.log(err);
    }
  })
})

router.put('/edit/:id', (req, res) => {
  const updateRoutine = {
    title: req.body.title,
    content: req.body.content,
    lbs: req.body.lbs,
    reps: req.body.reps,
    timer: req.body.timer,

};
  Workout.findByIdAndUpdate({_id: req.params.id}, {$set: updateRoutine}, (req, res, err) => {
    if(!err){
      console.log("Item updated");
    }else {
      console.log(err);
    }
  })
})

module.exports = router
