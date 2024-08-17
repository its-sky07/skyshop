import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({setactive , active}) {
  return (
    < >
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/'  >Home</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/Allproduct' >Allproduct</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/About' >About</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/Contact' >Contact</NavLink></li>
    
    </>
  )
}

export default Navlink