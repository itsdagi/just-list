import React from 'react'

export default function TaskCard() {
  return (
    <li  key={task.id} className={task.completed  ? 'completed' : 'incomplete'}>
     <span>{task.id} - {task.name}</span>  
     <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
    </li>
  )
}
