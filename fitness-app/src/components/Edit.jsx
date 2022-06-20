import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Edit() {
  const [isPut, setIsPut] = useState(false)
  const [newWorkout, setNewWorkout] = useState({
    title: '',
    content: '',
    sets: '',
    lbs: '',
    reps: '',
    timer: '',
  })

    
  
  function updateWorkout(id) {
    axios.put('http://localhost:3001/edit/' + id, newWorkout)
  }

  
  function handleUpdate(e) {
    const { name, value } = e.target
    setNewWorkout((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  
  return (
    <div className="container">
      <h1>Update Routine</h1>
      <form>
        <div className="form-group">
        <label htmlFor="name">Name</label>
          <input
            onChange={handleUpdate}
            name="title"
            value={newWorkout.title}
            className="form-control"
          ></input>
        </div>

        <div className="form-group">
        <label htmlFor="Description">Description</label>
          <textarea
            onChange={handleUpdate}
            name="content"
            value={newWorkout.content}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="sets">Sets</label>
          <input
            type="number"
            onChange={handleUpdate}
            name="sets"
            value={newWorkout.sets}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lbs">Weight</label>
          <input
            type="number"
            onChange={handleUpdate}
            name="lbs"
            value={newWorkout.lbs}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps</label>
          <input
            type="number"
            onChange={handleUpdate}
            name="reps"
            value={newWorkout.reps}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="timer">Time</label>
          <input
            type="number"
            onChange={handleUpdate}
            name="timer"
            value={newWorkout.timer}
            className="form-control"
          />
        </div>
        <Link to= '/profile'>
        <button onClick={() => updateWorkout(newWorkout._id)}>UPDATE</button>
        </Link>
      </form>
    </div>
      
  )
}

export default Edit