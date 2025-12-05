
import './App.css'
import Button from './component/Button'
import Card from './component/card'
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0);

  function handleClick(){
    setCount(count+1);
  }
  

  return (
   <div>
          <Button handleClick={handleClick} 
          text="click me!">
            <h1>{count}</h1>
          </Button>
         

  <Card name="aditya yadav">
    <h1>Today is holiday</h1>
    <p>Tomarrow is holliday</p>
    <p>yesterday was holiday</p>
  </Card>
  <Card children="main thik hu">
    {/* this is override over main thik hu */}
    hello.ji kaise ho app     
  </Card>


           
   </div>
  )
}

export default App
