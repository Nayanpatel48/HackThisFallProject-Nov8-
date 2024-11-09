import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import './index.css'
import Layout from './Layout'
//import About from './components/About/About'
import Home from './components/Home/Home'
//import Contact from './components/Contact/Contact'
import { Route } from 'react-router-dom'
//import Github from './components/Github/Github'

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
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)