import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlink({setactive , active}) {
  return (
    < >
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/' onClick={()=>setactive(!active)} >Home</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/Allproduct' onClick={()=>setactive(!active)}>Allproduct</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/About'onClick={()=>setactive(!active)} >About</NavLink></li>
    <li><NavLink className={({isActive})=>(isActive)?"text-blue-700":"text-gray-700"} to='/Contact' onClick={()=>setactive(!active)}>Contact</NavLink></li>
    
    </>
  )
}

export default Navlink