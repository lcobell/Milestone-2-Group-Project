import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Routine() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    function handleChange(e) {
        const {name, value} = e.target;

        setInput(prevInput =>{
            return{
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();
        const newRoutine = {
            title: input.title,
            content: input.content
        }
        axios.post('http://localhost:3001/routine', newRoutine)
    }

    return <div className="container">
        <Navbar />
        <h1>
            Create Routine
        </h1>
        <form>
            <div className='form-group'>
            <input onChange={handleChange} name="title" value={input.title} className='form-control'></input>
            </div>

            <div className='form-group'>
            <textarea onChange={handleChange} name="content" value={input.content} className='form-control'></textarea>
            </div>

            <button onClick={handleClick} >ADD ROUTINE</button>
        </form>


    </div>
}

export default Routine;