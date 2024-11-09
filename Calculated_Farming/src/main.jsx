import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import './index.css'
import Layout from './Layout'
import Calculate from './components/Calculate/Calculate'
import Home from './components/Home/Home'
import Explore from './components/Explore/Explore'
import { Route } from 'react-router-dom'
import Feedback_about from './components/Feedback_about/Feedback_about'
import GoogleGemini from './components/GoogleGemini/GoogleGemini'

//old approach
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//alternative approach
const router = createBrowserRouter(
  createRoutesFromElements(
    // here path spelling matters not convention means upper and lower cases both are equal here
    <Route path="/"  element={<Layout/>}>
      <Route path="/"  element={<Home/>}/>
      <Route path="/calculate"  element={<Calculate/>}/>
      <Route path="/explore"  element={<Explore/>}/>
      <Route path="/feedback"  element={<Feedback_about/>}/>
      <Route path="/googlegemini"  element={<GoogleGemini/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)