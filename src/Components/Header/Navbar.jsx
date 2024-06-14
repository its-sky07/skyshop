import React, { createElement, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import MenuIcon from '../../Menu'
import Navlink from './Navlink'
import { FaCartArrowDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { signOut } from 'firebase/auth';
import { Auth } from '../firebase/Firebase';
import toast from 'react-hot-toast';
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

function Nav({ Cart, username }) {
  const [active, setactive] = useState(false)

  const handlemenu = () => {
    setactive(!active)
  }
  const handelogout = () => {
    signOut(Auth).then(() => {
      toast.success("Logout succesfully")
    })
  }
  return (
    <div className='h-24  border-b-2 w-full flex justify-between px-14 items-center relative '>
      <div className='font-extrabold   text-2xl '><span className='text-blue-700'>SKY</span>SHOP</div>
      <ul className='hidden md:flex gap-20 font-bold'>
        <Navlink />
      </ul >

      <span className='text-2xl font-bold flex gap-2 absolute right-52'><CgProfile size={30} />{username}</span>

      <div className=' flex justify-center relative items-center'>
        
        {(username) ? <Link onClick={handelogout} className='mx-4 bg-red-400 p-2 flex rounded-md h-fit'><CiLogout size={25} />Logout</Link> : <Link to="/Login" className='mx-4 bg-blue-400 p-2 flex rounded-md h-fit'>LogIn <CiLogin size={25} /></Link>}

        <Link className='text-3xl mr-2 line-c' to="/Addtocart"><span className=' text-lg ml-3 flex absolute -top-4 text-blue-500'>{Cart.length}</span><FaCartArrowDown /></Link>

      </div>

      <button onClick={handlemenu} className='right-8 absolute  lg:hidden'>{active ? 'X' : <MenuIcon />}</button>


      {active && (<div className='list-none mt-80 w-full flex flex-col justify-center gap-6 items-center font-bold bg-gray-400  leading-loose p-4 right-2 absolute z-10'><Navlink setactive={setactive} active={active} /></div>

      )
      }



    </div>
  )
}

export default Nav