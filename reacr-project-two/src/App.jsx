import React, { useState } from "react";
import UserCard from "./components/UserCard";


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="container">
   <UserCard name="Rana" desc="desc1"/>
   <UserCard name="Maharana" desc="desc2"/>
   <UserCard name="Prithvi" desc="desc3"/>
  </div>
  )
}

export default App
