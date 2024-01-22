import React from 'react'
import { useState } from 'react'

export default function TaskList() {
    const [tasks, setTasks] = useState([{id: 1, name:'Dagim', completed: false},{id: 2, name:"Abebe",completed: false},{id: 3, name:"Zeleke",completed: true},])
    const [show, setShow] = useState(true)
  
    function handleDelete(id){
      setTasks(tasks.filter(task => id !== task.id))
    }
  return (
    <>
    <h1>
    Task List
  </h1>
   <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
  <ul>
    {show && tasks.map((task)=>(
    <li  key={task.id} className={task.completed  ? 'completed' : 'incomplete'}>
   <span>{task.id} - {task.name}</span>  
     <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>
    ))}
  </ul>
  </>
  )
}
