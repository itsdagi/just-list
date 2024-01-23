import React from 'react';
import './App.css';
import {useState} from 'react';
import {Header} from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
export default function App() {

  return (
    <div className='App'>
      <Header/>
      <TaskList/>
      <Footer/>
    </div>
  );
}

