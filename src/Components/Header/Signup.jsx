import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithPopup } from 'firebase/auth';

const Signup = () => {
  const [Usersignup, setUsersignup] = useState({
    Username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const auth = getAuth();

  const handlechange = (e) => {
    setUsersignup({ ...Usersignup, [e.target.name]: e.target.value });
  };

  const handlesignup = (e) => {
    e.preventDefault();

    if (!Usersignup.Username || !Usersignup.email || !Usersignup.password) {
      return toast.error('All fields are required');
    } else {
      createUserWithEmailAndPassword(auth, Usersignup.email, Usersignup.password)
        .then(async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: Usersignup.Username
          });
          toast.success('Account created successfully');
          navigate('/login'); // Redirect to the login page
        })
        .catch((error) => {
          console.log(error.message);
          toast.error(error.message);
        });
    }
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('User info:', user);
        toast.success('Signed in with Google');
        navigate('/dashboard'); // Redirect to the dashboard or another page
      })
      .catch((error) => {
        console.error('Error during sign in:', error);
        toast.error('Failed to sign in with Google');
      });
  };

  return (
    <section className="bg-gray-50 md:mt-10 mt-24 h-full dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handlesignup}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your name
                </label>
                <input
                  value={Usersignup.Username}
                  onChange={handlechange}
                  type="text"
                  name="Username"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  value={Usersignup.email}
                  onChange={handlechange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  value={Usersignup.password}
                  onChange={handlechange}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <button
              onClick={signInWithGoogle}
              className="w-full text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-red-800"
            >
              Sign in with Google
            </button>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
