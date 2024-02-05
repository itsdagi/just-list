import React from 'react'
import "./AddTask.css"

export default function AddTask() {
  return (
    <section className='addtask'>
        <from>
            
            <input type="text" name='task' id='task' placeholder='Task Name' autoComplete='off'/>
            <button type='submit'>Add Task</button>
        </from>
    </section>
  )
}
