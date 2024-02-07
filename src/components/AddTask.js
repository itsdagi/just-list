import React from 'react'
import "./AddTask.css"
import {useState} from "react"

export default function AddTask() {

  const [taskValue, setTaskValue] = useState(" ");
  const [progress, setProgress] = useState("")

  const handleChange =(event)=>{
      setTaskValue(event.target.value)
  }

  const handleReset = ()=>{
      setTaskValue("");
      setProgress(false)
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
     const task = {
      id: Math.floor(Math.random() * 10000000),
      name: taskValue,
      completed: Boolean(progress)
     } 
     handleReset();
     console.log(task);
     
  }
 // testing ai commit for chatgpt 
  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            
            <input onChange={handleChange} type="text" name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue}/>
            <select onChange={(event)=> setProgress(event.target.value)} value={progress}>
              <option value={false}>Pending</option>
              <option value={true}>Completed</option>
            </select>
            <button type='submit'>Add Task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
