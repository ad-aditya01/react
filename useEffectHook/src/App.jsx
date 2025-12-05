
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count,setCount]=useState(0);
  const [total,setTotal]=useState(1);
  useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  
    //first->side effect function
    //second-> clean up function
    //third-> comma seperated dependencies list

    //variation:1
    //runs on every render
// useEffect(() => {
//  alert("i will run on each render"); 
// })

    //variation 2
    //that run on only first render
// useEffect(()=>{
//   alert("i will run on only 1st render");
// },[])

     //variation 3
// useEffect(()=>{
//   alert("i will run in every time when count is updated")
// },[count])

     //variation 4
    //multiple dependencies
// useEffect(() => {
//  alert("i will run every time when count/total is updated")
// }, [count,total])

     //variation 5
    //iss baar let's add a cleanup function
// useEffect(() => {
// alert("count is updated")

//   return () => {
//     alert("count is unmounted from UI");
//   }
// }, [count])



function handleClick(){
  setCount(count+1);
}
function handleTotal(){
  setTotal(total+1);

}

  return (
  <div>
<button onClick={handleClick}>
  update Count
  </button>
  <br />
  Count is:{count};
  <br />

  <button onClick={handleTotal}>
  update total
  </button>
  <br />
  Total is:{total};
  </div>
  )
}

export default App
