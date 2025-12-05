
import './App.css'

function App() {
  function handleClick(){
    alert("i am clicked!")
  }

  function handleMouseOver(){
alert("para ke upar mouse lekar aaye ho")
  }

  function handleChange(e){
    console.log("value till now",e.target.value);
  }

  return (
   <div>
    <form>
      <input type="text" onChange={handleChange} />
    </form>


    <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
      i am para
    </p>


    <button onClick={handleClick}>
      click me
    </button>
    
    {/* or  */}

    <button onClick={()=>{alert("i got clicked")}}>
      please click me
    </button>

   </div>
  )
}

export default App
