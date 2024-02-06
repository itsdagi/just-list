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
  const handleSubmit =(event)=>{
    event.preventDefault();
     const task = {
      id: Math.floor(Math.random() * 10000000),
      name: taskValue,
      completed:false
     } 
     handleReset();
     console.log(task)
  }

  return (
    <section className='addtask'>
        <form onSubmit={handleSubmit}>
            
            <input onChange={handleChange} type="text" name='task' id='task' placeholder='Task Name' autoComplete='off' value={taskValue}/>
            <select onChange={()=>{}}>
              <option value={false}>False</option>
              <option value={true}>True</option>
            </select>
            <button type='submit'>Add Task</button>
            <span onClick={handleReset} className='reset'>Reset</span>
        </form>
        <p>{taskValue}</p>
    </section>
  )
}
