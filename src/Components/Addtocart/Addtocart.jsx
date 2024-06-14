import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
import { db } from '../firebase/Firebase'
import Checkout from '../checkout/Checkout'

function Addtocart() {
  const [placeorder, setplaceorder] = useState({
    pincode: "",
    address: "",
    phonenumber: ""
  })
  const context = useOutletContext()
  const [selectedop, setselectedop] = useState("")
  console.log(selectedop)
  const handlepromo = (e) => {
    context.setpromocode(e.target.value)
  }
  const navi = useNavigate()

  const handlecheckout = (event) => {
    event.preventDefault();
    if (!placeorder.pincode || !placeorder.address || !placeorder.phonenumber) {
      return toast.error('All fields are Required')

    }

    if (context.username) {
      navi("/")

      addDoc(collection(db, "product details"), {
        name: context.username,
        product: context.Cart,
        totalprice: totalprice,
        pincode: placeorder.pincode,
        address: placeorder.address,
        phonenumber: placeorder.phonenumber


      }).then((res) =>
        toast.success("order placed succesfully")

      ).catch((err) =>
        toast.error(err))
    } else {
      toast.error("pls login first")
      navi("/Login")
    }
  }
  const totalprice = Number(Math.ceil(context.gettotalproce() + parseInt(selectedop) - parseInt(context.promocode)))
  const handlechange = (e) => {
    setplaceorder({ ...placeorder, [e.target.name]: e.target.value })

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!placeorder.pincode || !placeorder.address || !placeorder.phonenumber) {
      return toast.error('All fields are Required')
    }
  };


  return (
    <>
      {context.Cart.length < 1 ? (
        <div className="flex items-center  justify-center min-h-screen bg-gray-100">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <img src="https://th.bing.com/th/id/OIP.cd25YbIAZemYd9Pd-BkORAHaHa?rs=1&pid=ImgDetMain" alt="Empty Cart" className="w-64 mx-auto mb-8" />
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-lg text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/Allproduct" className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition duration-300 ease-in-out">
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-4 sm:px-0">
          <div className="flex flex-col md:flex-row shadow-md my-10">
            <div className="md:w-3/4 bg-white mt-20 px-6 sm:px-10 py-3 w-full">
              <div className="flex justify-between border-b pb-5">
                <h1 className="font-semibold text-xl sm:text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-xl sm:text-2xl">{context.Cart.length} items</h2>
              </div>
              <div className="hidden sm:flex mt-5 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Quantity</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Price</h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">Total</h3>
              </div>
              <div>
                {context.Cart.map((dd) => (
                  <div key={dd.id} className="flex flex-col sm:flex-row items-center sm:hover:bg-gray-100 -mx-8 px-6 py-5">
                    <div className="flex w-full sm:w-2/5">
                      <div className="w-20">
                        <Link to="/Singlepage" onClick={() => context.handlesiglepage(dd)}>
                          <img className="h-26 bg-cover" src={dd.image} alt="" />
                        </Link>
                      </div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{dd.title}</span>
                        <span className="text-blue-500 text-xs">{dd.category}</span>
                        <button onClick={() => context.Handleremove(dd)} className="font-semibold hover:text-red-500 text-gray-500 text-xs">Remove</button>
                      </div>
                    </div>
                    <div className="flex justify-center w-full sm:w-1/5 mt-4 sm:mt-0">
                      <button className="text-black w-3 text-3xl shadow-lg w-fit p-1" onClick={() => context.handledec(dd.id)}>-</button>
                      <input className="mx-2 border text-center w-8" type="text" value={dd.quantity} readOnly />
                      <button className="text-black w-3 text-2xl shadow-lg p-1" onClick={() => context.handleinc(dd.id)}>+</button>
                    </div>
                    <span className="text-center w-full sm:w-1/5 font-semibold text-sm mt-4 sm:mt-0">${dd.price}</span>
                    <span className="text-center w-full sm:w-1/5 font-semibold text-sm mt-4 sm:mt-0">${dd.price * dd.quantity}</span>
                  </div>
                ))}
              </div>
              <Link to="/Allproduct" className="flex font-semibold text-indigo-600 text-sm mt-10">
                <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </Link>
            </div>
            <div id="summary" className="w-full md:w-1/4 px-6 sm:px-8 py-4">
              <h1 className="font-semibold text-xl sm:text-2xl border-b pb-8">Order Summary</h1>
              <div className="flex justify-between mt-10 mb-4">
                <span className="font-semibold text-sm uppercase">{context.Cart.length} Items</span>
                <span className="font-semibold text-sm">{context.gettotalproce()}$</span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select value={selectedop} onChange={(e) => setselectedop(e.target.value)} className="block p-2 text-gray-600 w-full text-sm">
                  <option>Choose shipping options</option>
                  <option value="10">Standard shipping - $10.00</option>
                  <option value="20">Prime shipping - $20.00</option>
                </select>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
                <input
                  value={context.promocode}
                  onChange={handlepromo}
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                />
              </div>
              <button onClick={context.handlepromocode} className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>{totalprice}$</span>
                </div>
                <div className="container mx-auto p-6">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-6">Place Your Order</h1>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="pincode" className="block text-lg font-medium mb-2">Pincode <span className="text-red-600">*</span></label>
                      <input
                        type="text"
                        name="pincode"
                        value={placeorder.pincode}
                        maxLength={6}
                      
                        onChange={handlechange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-lg font-medium mb-2">Address <span className="text-red-600">*</span></label>
                      <textarea
                        name="address"
                      
                        value={placeorder.address}
                        onChange={handlechange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-lg font-medium mb-2">Mobile Number <span className="text-red-600">*</span></label>
                      <input
                        type="tel"
                        maxLength={10}
                     
                        name="phonenumber"
                        value={placeorder.phonenumber}
                        onChange={handlechange}
                        className="w-full px-4 py-2 border rounded-md"
                        required
                      />
                    </div>
                  </form>
                </div>
                <Link onClick={handlecheckout} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 px-3 text-sm text-white uppercase w-full text-center">Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>

  )
}


export default Addtocart