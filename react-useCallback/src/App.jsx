import { useState, useCallback } from 'react';
import './App.css'
import ChildComponent from './component/ChildComponent';
import ExpensiveComponent from'./component/ExpensiveComponent';

function App() {
  // const [count, setCount]=useState(0);
  // const handleClick=useCallback(()=>{
  //   setCount(count+1);
  // },[count]);
 

  return (
    <div>
       <ExpensiveComponent/>
    </div>
  //   <div>
  //     <div>
  //       Count:{count}
  //     </div>
  //     <div>
  //       <button onClick={handleClick}>
  //         Increment
  //       </button>
  //     </div>
  //     <br /><br />

  //     <div>
  //       <ChildComponent buttonName="Click me" handleClick={handleClick} />
  //     </div>

  //   </div>
   )
}

export default App
