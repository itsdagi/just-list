import React from 'react'
import { useState } from 'react'
import TaskCard from './TaskCard'

export default function TaskList() {
    const [tasks, setTasks] = useState([{id: 1, name:'Complete thesis proposal in two weeks', completed: false},{id: 2, name:"Finish The stranger book",completed: false},{id: 3, name:"Work on new React project",completed: true},])
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
      <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
    ))}
  </ul>
  </>
  )
}
