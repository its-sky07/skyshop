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
    <div className='h-24  top-0 border-b-2 w-full flex  justify-between px-14 items-center fixed z-10 bg-white '>
      <div className='font-extrabold   text-2xl '><span className='text-blue-700'>SKY</span>SHOP</div>
      <ul className='hidden md:flex gap-20 font-bold'>
        <Navlink />
      </ul >

      <details className='flex absolute top-8 left-3 flex-col'>
        <summary className='flex top-5 items-center justify-between'>
          <span className='text-2xl  font-bold  flex gap-2'>
             <CgProfile size={35} /> 

          </span>
        </summary>
        <div className='mt-2 font-bold'>
          {username}
          {username ? (
            <Link onClick={handelogout} className=' bg-red-400 p-2 flex items-center rounded-md h-fit'>
              <CiLogout size={25} />
              <span className='ml-2'>Logout</span>
            </Link>
          ) : (
            <Link to="/Login" className='mx-4 bg-blue-400 p-2 flex items-center rounded-md h-fit'>
              <span className='mr-2'>LogIn</span>
              <CiLogin size={25} />
            </Link>
          )}
        </div>
      </details>

      <div className=' flex justify-center relative items-center'>


        <Link className='text-3xl mr-2 line-c' to="/Addtocart"><span className=' text-lg ml-3 flex absolute -top-5 text-blue-500'>{Cart.length}</span><FaCartArrowDown /></Link>

      </div>

      <button onClick={handlemenu} className='right-8 absolute  lg:hidden'>{active ? 'X' : <MenuIcon />}</button>


      {active && (<div className='list-none mt-80 w-full z-10 flex flex-col justify-center gap-6 items-center font-bold bg-gray-400  leading-loose p-4 right-2 absolute z-10'><Navlink setactive={setactive} active={active} /></div>

      )
      }



    </div>
  )
}

export default Nav