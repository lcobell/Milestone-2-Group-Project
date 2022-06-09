import React, { useEffect, useState } from 'react'

function Profile() {
  const [workouts, setWorkouts] = useState([
    {
      title: '',
      content: '',
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
      <h1>Routines Page</h1>
      {workouts.map((workout) => (
        <div>
          <h1>{workout.title}</h1>
          <p>{workout.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Profile
