// src/components/Contact.js
import { addDoc, collection } from 'firebase/firestore';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { db } from '../firebase/Firebase';

const Contact = () => {
  const [contactDetails, setContactDetails] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!contactDetails.email || !contactDetails.message) {
      return toast.error('All fields are required');
    } else {
      try {
        await addDoc(collection(db, 'contact details'), {
          email: contactDetails.email,
          message: contactDetails.message
        });
        toast.success('Successfully submitted details');
        setContactDetails({ email: '', message: '' });
      } catch (error) {
        toast.error('Error submitting details');
        console.error('Error adding document: ', error);
      }
    }
  };

  return (
    <section className="bg-gray-100 text-gray-800 body-font relative py-24">
      <Toaster />
      <div className="container mx-auto px-5">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We would love to hear from you! Please fill out the form below to get in touch with us.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 flex flex-col shadow-md">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={contactDetails.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                name="message"
                value={contactDetails.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
