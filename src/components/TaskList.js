import React from 'react'
import { useState } from 'react'
import TaskCard from './TaskCard'
import BoxCard from './BoxCard'

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

    <button onClick={() => setShow(!show)} className="trigger">Toggle</button> 
   
  <ul>

    {show && tasks.map((task)=>(
      <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
    ))}

  </ul>
   <BoxCard result="success">
    <p className="title">Lorem ipsum dolor sit amet.</p>
    <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, alias quibusdam facere ratione temporibus numquam dolores, pariatur doloremque, cupiditate eligendi ex explicabo enim.</p>
   </BoxCard>
   <BoxCard result="alert">
    <p className="title">Lorem, ipsum.</p>
    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis.</p>
   </BoxCard>
  
  </>
  )
}
