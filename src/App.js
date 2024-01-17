import React from 'react';
import './App.css';
import {useState} from 'react'

export default function App() {
  const [tasks, setTasks] = useState([{id: 1, name:'dagim'},{id: 2, name:"abebe"},{id: 3, name:"zeleke"},{complited: false}])
  return (
    <div className='App'>
      
    </div>
  );
}
