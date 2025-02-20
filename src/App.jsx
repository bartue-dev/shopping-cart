import { Outlet } from "react-router-dom"
import { useState } from "react"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";

function App() {
  //declare product details state here to pass it on the Product-items and Proudct Details Component (unrelated components)
  const [productDetails, setProductDetails] = useState()
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <Navbar cartItems={cartItems}/>
      <Outlet 
        context={[productDetails, setProductDetails, cartItems, setCartItems]}
      />
      <Footer />
    </div>
  )
}

export default App
