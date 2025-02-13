import { Link } from "react-router-dom"

function CartEmpty() {

  return (
    <div className="flex flex-col items-center justify-center gap-15 z-1 mt-15">
      <p className="text-xl italic">Your Cart is empty!</p>
      <Link to="/products" className="underline">go back to products</Link>
    </div>
  )
}

export default CartEmpty