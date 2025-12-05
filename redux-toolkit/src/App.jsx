import React from 'react';
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment, reset} from './feature/counter/counterSlice.jsx';

function App() {
  const [amount,setAmount]=useState(0);
  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  function handleIncrementClick(){
    dispatch(increment());

  }
  function handleDecrementClick(){
    dispatch(decrement());

  }
  function handleResetClick(){
    dispatch(reset);
  }
  function handleIncAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  

  return (
   <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count:{count}</p>
    <button onClick={handleDecrementClick}>-</button>
    <br />
    <br />
      <button onClick={handleRestClick}>-</button>
      <input 
      type='Number'
      value={amount}
      placeholder='Enter Amount'
      onChange={(e)=>setAmount(e.target.value)}
      />
      <br />
      <button onClick={handleIncAmountClick}>Inc by Amount</button>

   </div>
  )
}

export default App
