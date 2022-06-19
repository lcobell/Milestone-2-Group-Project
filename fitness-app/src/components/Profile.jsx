import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Profile() {
  const [workouts, setWorkouts] = useState([ ])
  const [newWorkouts, setNewWorkouts] = useState([ ])
 
  useEffect(() => {
    axios.get('http://localhost:3001/profile')
      .then((res) => {
        console.log(res)
        setWorkouts(res.data)
        if (res.ok) {
          return res.json()
        }
      })
  },[])

  const setID = (_id) => {
    console.log(_id)
  }

  
  return (
    <div className="container">
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
          <input 
            type="text" 
            placeholder="New Workout..." 
            onChange={(e) =>{setNewWorkouts(e.target.value)}} />
          <Link to= '/edit'>
          <button onClick={()=> setID(workout._id)}>Edit</button>
          </Link>
          <Link to='/delete'>
          <button>Delete</button>
          </Link>
        </div>
      )})}
    </div>
  )
}

export default Profile
