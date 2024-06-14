import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Allproduct from './Components/Allproduct/Allproduct.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Login from './Components/Header/Login.jsx'
import Signup from './Components/Header/Signup.jsx'
import Addtocart from './Components/Addtocart/Addtocart.jsx'
import productcontexts from './Context/Context.js'
import Singlepage from './Components/singlepage/Singlepage.jsx'
import Checkout from './Components/checkout/Checkout.jsx'


// const [cart, setcart] = useState([])
//  const Addtingtocar=(pro)=>{
  // setcart(...cart,pro)
  // console.log(pro)
//  }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      
      <Route path='' element={<Home />} />
      <Route path='Allproduct' element={<Allproduct   />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Login' element={<Login />} />
      <Route path='Signup' element={<Signup />} />
      <Route path='Addtocart' element={<Addtocart  />}/>
      <Route path='Singlepage' element={<Singlepage  />}/>
      <Route path='Checkout' element={<Checkout  />}/>

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
