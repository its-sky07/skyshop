import { useEffect, useState } from 'react'
import Nav from './Components/Header/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { Auth } from './Components/firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
// import { auth, onAuthStateChanged } from 'firebase/auth';
// import { Auth } from './Components/firebase/Firebase';

function App() {
  // const [Cart, setCart] = useState([])

  const [Cart, setCart] = useState([]);
  const [promocode, setpromocode] = useState(0)
  const [username, setusername] = useState("")
  const [siglepagedata, setsiglepagedata] = useState([])
  const [homepro, sethomepro] = useState([])
  const [proadded, setproadded] = useState(false)


  const Addtingtocar = (pro) => {
    const itemExists = Cart.find((item) => item.id === pro.id);

    if (itemExists) {
      const updatedCart = Cart.map((item) =>
        item.id === pro.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      toast.success("Product already in Cart")
      setCart(updatedCart);
    } else {
      setCart([...Cart, { quantity: 1, ...pro }]);
      setproadded(true)
      toast.success("Product added to cart")
    }
    console.log(Cart);
  };

  useEffect(() => {
    onAuthStateChanged(Auth, (user) => {
      console.log(user)
      if (user) {
        setusername(user.displayName)
      } 
    })
  }, [])
  

  const gettotalproce = () => (
    Cart.reduce((total, prices) => {
      const finalprice = total + prices.price * prices.quantity
      return finalprice;

    }, 0)
  )

  const handlepromocode = () => {
    if (promocode == "DISCOUNT10") {
      setpromocode(Number(10))
    }



    // gettotalproce()-promocode

  }
  // const homeproduct=()=>{

  // }

  const Handleremove = (id) => {
    console.log(id)
    const filnalcart = Cart.filter((pro) => (id.id != pro.id))
    setCart(filnalcart)
    toast.success("Product Removed succesfully")
  }
  const handleinc = (id) => {
    const inccart = Cart.map((item) => (item.id == id ? { ...item, quantity: item.quantity + 1 } : item))
    setCart(inccart)
  }
  const handledec = (id) => {
    const inccart = Cart.map((item) => (item.id == id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))
    setCart(inccart)
  }
  function handlesiglepage(pro){
    console.log(pro)
    setsiglepagedata(pro)
  }

  

  

  return (
    <>
      <Toaster toastOptions={{
        className: 'mt-20'
      }} />
      <Nav Cart={Cart} username={username} />
      <Outlet context={{ Cart,  username,setproadded,proadded, siglepagedata ,sethomepro,homepro, Addtingtocar, Handleremove, handleinc, handledec, gettotalproce, promocode, setpromocode, handlepromocode,handlesiglepage }} />
      <Footer />
    </>
  )
}

export default App
