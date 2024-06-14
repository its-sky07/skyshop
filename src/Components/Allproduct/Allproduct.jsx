import React from 'react'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast'
import { useOutletContext } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Allproduct() {
  const [Allcategory, setAllcategory] = useState([])
  const [products, setproducts] = useState([])
  const [ogproducts, setogproducts] = useState([])
  const [loading, setloading] = useState(true)

  const [sercherproduct, setsercherproduct] = useState("")
  const [first, setfirst] = useState('')
  const context = useOutletContext()

  const handlecategory = (e) => {

    const filterd = ogproducts.filter((item) => (e === item.category)
    )
    setproducts(filterd)
    console.log(e)
  }

  if (loading) {

    <div role="status">
      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span class="sr-only">Loading...</span>
    </div>

  }


  const handlesearch = (e) => {
    e.preventDefault()

    const serchitem = ogproducts.filter((item) => (item.title.toLowerCase().includes(sercherproduct.toLowerCase())))

    setproducts(serchitem)
    //  console.log(serchitem)
    //  console.log(sercherproduct)


  }

  useEffect(() => {
    async function api() {
      setloading(true)
      try {
        const data = await fetch("https://fakestoreapi.com/products/categories")
        const category = await data.json()
        setAllcategory(category)
      } catch (error) {
        console.log(error)
        toast.error("might your data is off or issues with server try later")
      }
      finally {
        setloading(false)
      }
    }
    api()
  }, [])

  useEffect(() => {
    const productapi = async () => {
      try {
        const data2 = await fetch("https://fakestoreapi.com/products")
        const product = await data2.json()

        setproducts(product)
        setogproducts(product)
        context.sethomepro()
        // console.log(products)

      } catch (error) {
        console.log(error)
      }
    }
    productapi()
  }, [])

  return (
    <>

      <form onSubmit={handlesearch} className="max-w-md mx-auto mt-32 ml-2 mr-2">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input

            value={sercherproduct}
            onChange={(e) => setsercherproduct(e.target.value)}


            type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
          <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
      {loading ? <>


        <button disabled type="button" className=" ml-[47%] mt-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
          <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
          </svg>
          Loading...
        </button>

      </>

        : ""}

      <div className=' w-full mt-2 p-8  flex flex-wrap gap-3 '>

        {Allcategory.map((item, index) => (

          <button key={index} onClick={() => handlecategory(item)} className='p-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg' >
            {item}
          </button>

        ))}

      </div>
      <div className=' w-full mt-2 p-8  flex justify-evenly flex-wrap gap-6 '>
        {products.map((pro, index) => (

          <div key={pro.id} className=" mt-1 w-64 h-auto relative grid bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <Link to="/Singlepage" onClick={() => context.handlesiglepage(pro)}> <img className="p-8  h-60  bg-cover w-[100%]" src={pro.image} alt="product image" /></Link>

            <div className="px-5 pb-5">

              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{pro.title}</h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5 text-white">
                Rating:
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{pro.rating.rate}</span>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{pro.price}$</span>
                    {(context.Cart.find((item)=>(item.id==pro.id))?<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={() => context.Handleremove(pro)}>Remove</button>:<button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => context.Addtingtocar(pro)}>Add to cart</button>)
}  </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Allproduct