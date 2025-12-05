import { useState } from 'react';
import './App.css'
import Card from './component/Card'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync kardunga
  
  const [name,setName]=useState('');

  return (
  <div>
    <Card name={name} setName={setName}/>
    <p>I am inside Parent Component and Values of name is:{name}</p>
    

  
  </div>
  )
}

export default App
