import React from 'react';
import './App.css';
import {useState} from 'react'

export default function App() {
  const [tasks, setTasks] = useState([{id: 1, name:'Dagim', completed: false},{id: 2, name:"Abebe",completed: false},{id: 3, name:"Zeleke",completed: true},])
  return (
    <div className='App'>
      <h1>
        Task List
      </h1>
         <ul>
          {tasks.map((task)=>(
            <li key={task.id}>
              <span>
                {task.id} - {task.name}
              </span>
              <button>Delete</button>
            </li>
          ))}
         </ul>
    </div>
  );
}
