import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function Profile() {
  const [workouts, setWorkouts] = useState([
    {
      title: '',
      content: '',
      sets: '',
      lbs: '',
      reps: '',
      timer: '',
    },
  ])

  useEffect(() => {
    fetch('/profile')
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
      .then((jsonRes) => setWorkouts(jsonRes))
  })

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
        </div>
      ))}
    </div>
  )
}

export default Profile
