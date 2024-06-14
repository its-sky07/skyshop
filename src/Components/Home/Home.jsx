import React from 'react'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GiReturnArrow } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
const Home = () => {
  const context = useOutletContext();
  return (<>
    <div className=' h-screen mt-10 w-full bg-cover flex justify-center  p-10  items-start flex-col bg-[url("https://st4.depositphotos.com/13193658/30137/i/450/depositphotos_301375510-stock-illustration-young-woman-holding-credit-card.jpg")] ' >
      <h1 className='text-white text-4xl font-extrabold'>Discover the perfect blend of style,<br></br> convenience, and joy.<br></br> Shop with us and make every purchase <br></br>an experience worth cherishing.</h1>
      <Link className='bg-blue-600 text-white p-2 mt-10 flex items-center font-bold' to="/Allproduct">Explore More. <FaArrowRight /></Link>
    </div>
    <div className='p-6 h-auto w-full bg-blue-300 text-white font-bold flex flex-col md:flex-row flex-wrap gap-2 justify-evenly items-center'>
      <div className='text-3xl justify-center flex flex-col items-center  bg-blue-500 p-8 rounded-xl'>
        <span className='text-6xl'> <FaShippingFast /></span>Free Delivery
      </div>
      <div className='text-3xl justify-center flex flex-col items-center  bg-blue-500 p-8 rounded-xl'>
        <span className='text-6xl' ><RiSecurePaymentFill /></span>Secure Payment
      </div>
      <div className='text-3xl justify-center flex flex-col items-center  bg-blue-500 p-8 rounded-xl'>
        <span className='text-6xl'><GiReturnArrow /></span>Easy Returns
      </div>
      <div className='text-3xl justify-center flex flex-col items-center  bg-blue-500 p-8 rounded-xl'>
        <span className='text-6xl'><Ri24HoursFill /></span>Customer Support
      </div>

    </div>
    <div><section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to our e-commerce store. your one-stop destination for all your shopping nedds!Discover a wide range of high-quality products at unbeatable prices. Enjoy a seamless shopping experience with fast shipping, secure payment and exceptional customer service.Shop now and find everything you love all in one place</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover hover:h-[98%] h-full object-center block" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover hover:h-[98%] h-full object-center block" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full hover:h-[98%] object-cover object-center block" src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full hover:h-[98%] object-cover object-center block" src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover hover:h-[98%] h-full object-center block" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover hover:h-[98%] h-full object-center block" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">for more product</h1>
          <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Welcome to our e-commerce store. your one-stop destination for all your shopping nedds!Discover a wide range of high-quality products at unbeatable prices. Enjoy a seamless shopping experience with fast shipping, secure payment and exceptional customer service.</p>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
         
         
        </div>
        <Link to="/Allproduct" class="flex mx-auto w-fit mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">view all products</Link>
      </div>
    </section>



  </>

  )
}

export default Home