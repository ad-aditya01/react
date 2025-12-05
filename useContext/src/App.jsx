
import { createContext,useState } from 'react'
import './App.css'
import ChildA from './assets/component/ChildA';


  //step1:create context
  const UserContext=createContext();
  //step2:wrap all the child inside a provider
  //step3:pass value
  //
  function App() {
    const [user,setUser]=useState({name:"Adi"});

  return (
    <>
  <UserContext.Provider value={user}>
   <ChildA/>
   </UserContext.Provider>
   </>
  )
}

export default App
export {UserContext}
