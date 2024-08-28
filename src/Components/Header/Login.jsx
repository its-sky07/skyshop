import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from '../firebase/Firebase'
import toast from 'react-hot-toast'

const Login = () => {
  const [Usersignin, setUsersignin] = useState({
    email: "",
    password: ""
  })
  const gotologin = useNavigate()

  const handlechange = (e) => {
    setUsersignin({ ...Usersignin, [e.target.name]: e.target.value })
    console.log(Usersignin)
  }

  const handlesignup = (e) => {
    e.preventDefault()

    if (!Usersignin.email || !Usersignin.password) {
      return toast.error('All fields are Required')

    } else {
      signInWithEmailAndPassword(Auth, Usersignin.email, Usersignin.password)
        .then((res) => {
          // Signed up 
          const user = res.user;

          gotologin("/")
          console.log(user);


          return toast.success("logged in succesfully")



          // ...
        })

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message)
          return toast.error(error.message)
          // ..
        });


    }

  }

  
  return (
    <>
      <section className="bg-gray-50 md:mt-10 mt-24 h-full dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input value={Usersignin.email} onChange={handlechange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input value={Usersignin.password} onChange={handlechange} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
              
                <button onClick={handlesignup} type="submit" className="hover:bg-blue-600 bg-blue-700 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <Link to="/Signup" className='text-yellow-500'>Signup</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Login