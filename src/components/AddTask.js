import React from 'react'
import "./AddTask.css"
import {useState} from "react"

export default function AddTask() {

  const [taskValue, setTaskValue] = useState(" ");

  const handleChange =(event)=>{
      setTaskValue(event.target.value)
  }

  const handleReset = ()=>{
      setTaskValue("");
  }

  return (
    <section className='addtask'>
        <form>
            
            <input onChange={handleChange} type="text" name='task' id='task' placeholder='Task Name' autoComplete='off'/>
            <button type='submit'>Add Task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
