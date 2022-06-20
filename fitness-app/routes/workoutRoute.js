const express = require("express"),
  router = require("express").Router();
const Workout = require("../models/workouts");

//
router.route("/routine").post((req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sets = req.body.sets;
  const lbs = req.body.lbs;
  const reps = req.body.reps;
  const timer = req.body.timer;
  const newRoutine = new Workout({
    title,
    content,
    sets,
    lbs,
    reps,
    timer,
  });

  newRoutine.save();
});

router.route("/profile").get((req, res) => {
  Workout.find().then((foundWorkouts) => res.json(foundWorkouts));
});
// delete route
router.delete("/delete-routine/:id", (req, res, next) => {
  Workout.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = router;
