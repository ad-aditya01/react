import { useState, useEffect, useRef } from 'react';
import './App.css'

function App()
{
  const [time, setTime]=useState(0);

  let timerRef=useRef(null);

  function startTimer(){
   timerRef.current =setInterval(()=>{
      setTime(time=>time+1)
    },1000);
  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null;

  }
  function resetTimer(){
    stopTimer();
    setTime(0);

  }
  // const [count, setCount]=useState(0);
  // //using useRef->it persist its value across re render
  // let val=useRef(0);
  // let btnRef=useRef();

  // function handleIncrement(){
  //   val.current=val.current+1;
  //   console.log("value of val:",val.current);
  //   setCount(count+1);
  // }
  // useEffect(() => {
  //   console.log("main ferse render hogya hu")
  
  // })
  // function changeColor(){
  //   btnRef.current.style.backgroundColor="red";
  //  } 
  return (
    <div>
      <h1>Stopwatch: {time} seconds </h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /> <br />
      <button onClick={stopTimer}>
        Stop
      </button>
      <br /> <br />
      <button onClick={resetTimer}>
        Reset
      </button>
      {/* <button
      ref={btnRef}
       onClick={handleIncrement}>
        Increment
      </button>
<br />
<br />
<button onClick={changeColor}>
  Change Color of 1st Button
</button>
    <div>
      Count:{count}
    </div> */}
    </div>
  )
}

export default App
