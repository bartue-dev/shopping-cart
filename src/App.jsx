import { Outlet } from "react-router-dom"
import { useState } from "react"
import Navbar from "./Components/Navbar"

function App() {
  //declare product details state here to pass it on the Product-items and Proudct Details Component (unrelated components)
  const [productDetails, setProductDetails] = useState()

  return (
    <div>
      <Navbar />
      <Outlet context={[productDetails, setProductDetails]}/>
    </div>
  )
}

export default App
