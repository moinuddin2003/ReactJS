
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLoaderData } from 'react-router-dom'
import {Home, About , Contact , User , Github, githubInfoLoader } from './components/'
import Layout from './Layout.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// 2nd Way to do Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
      <Route path='' element = {<Home/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/user/:userId' element = {<User/>}/>
      <Route loader = {githubInfoLoader} path='/github' element = {<Github/>}/>
    </Route>

    
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
