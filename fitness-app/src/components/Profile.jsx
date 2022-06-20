import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

function Profile() {
  const [workouts, setWorkouts] = useState([
    {
      title: "",
      content: "",
      sets: "",
      lbs: "",
      reps: "",
      timer: "",
    },
  ]);

  useEffect(() => {
    fetch("/profile")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setWorkouts(jsonRes));
  });

  // from heree to the return is an attempt at adding delete
  const deleteWorkout = () => {
    axios
      .delete("http://localhost:3002/Profile/delete-workout/")
      .then((res) => {
        if (res.status === 200) {
          alert("Workout deleted");
          window.location.reload();
        } else
          Promise.reject().catch((err) => alert("an error was encountered"));
      });
  };
  return (
    <div className="container">
      <Navbar />
      <h1>Routines Page</h1>
      {workouts.map((workout) => (
        <div>
          <h1>{workout.title}</h1>
          <p>{workout.content}</p>
          <p>{workout.sets}</p>
          <p>{workout.lbs}</p>
          <p>{workout.reps}</p>
          <p>{workout.timer}</p>

          <button onClick={deleteWorkout} size="sm" variant="danger">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Profile;
