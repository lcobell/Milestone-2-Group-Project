import React, { useState } from 'react'
import axios from 'axios'

function Routine() {
  const [input, setInput] = useState({
    title: '',
    content: '',
    sets: '',
    lbs: '',
    reps: '',
    timer: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  function handleClick(e) {
    e.preventDefault()
    const newRoutine = {
      title: input.title,
      content: input.content,
      sets: input.sets,
      lbs: input.lbs,
      reps: input.reps,
      timer: input.timer,
    }
    axios.post('http://localhost:3000/routine', newRoutine)
  }

  return (
    <div className="container">
      <h1>Create Routine</h1>
      <form>
        <div className="form-group">
          <label htmlFor="title">Name</label>
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            className="form-control"
          ></input>
        </div>

        <div className="form-group">
          <label htmlFor="content">Description</label>
          <textarea
            onChange={handleChange}
            name="content"
            value={input.content}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="sets">Sets</label>
          <input
            type="number"
            onChange={handleChange}
            name="sets"
            value={input.sets}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lbs">Weight</label>
          <input
            type="number"
            onChange={handleChange}
            name="lbs"
            value={input.lbs}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reps">Reps</label>
          <input
            type="number"
            onChange={handleChange}
            name="reps"
            value={input.reps}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="timer">Time</label>
          <input
            type="number"
            onChange={handleChange}
            name="timer"
            value={input.timer}
            className="form-control"
          />
        </div>

        <button onClick={handleClick}>ADD ROUTINE</button>
      </form>
    </div>
  )
}

export default Routine
