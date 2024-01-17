import React from 'react';
import './App.css';
import {useState} from 'react'

export default function App() {
  const [tasks, setTasks] = useState([{id: 1, name:'dagim', completed: false},{id: 2, name:"abebe",completed: false},{id: 3, name:"zeleke",completed: true},])
  return (
    <div className='App'>
      <h1>
        Task List
      </h1>
         <ul>
          {tasks.map((task)=>(
            <li>
                

            </li>
          ))}
         </ul>
    </div>
  );
}
