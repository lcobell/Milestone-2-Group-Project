import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

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
      .then((jsonRes) => setWorkouts(jsonRes))
      .catch((err) => console.log(err));
  }, [workouts]);

  function deleteWorkout(id) {
    axios.delete("http://localhost:3001/delete/" + id);
  }

  return (
    <div className="App">
      <Navbar />
      <h1>Routines Page</h1>
      {workouts.map((workout, index) => {
        return (
          <div key={index}>
            <h1>{workout.title}</h1>
            <p>{workout.content}</p>
            <p>{workout.sets}</p>
            <p>{workout.lbs}</p>
            <p>{workout.reps}</p>
            <p>{workout.timer}</p>
            {/* <Link to="/edit">
              <button>Edit</button>
            </Link> */}
            <button onClick={() => deleteWorkout(workout._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;
