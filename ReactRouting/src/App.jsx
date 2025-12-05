import './App.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import About from './component/About';
import Navbar from './component/Navbar';
import ParamComp from './component/ParamComp';
import Reports from './component/Reports';
import Courses from './component/courses';
import MockTests from './component/mockTests';
import NotFound from './component/NotFound';


const router=createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:
      <div>
        <Navbar/>
        <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'mock-tests',
          element:<MockTests/>
        },
        {
          path:'reports',
          element:<Reports/>
        }
      ]
    },
  {
    path:"/student/:id",
    element:
       <div>
        <Navbar/>
        <ParamComp/>
      </div>
  },
  {
    path:'*',
    element:<NotFound/>
  }
  ]

);

function App() {


  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
