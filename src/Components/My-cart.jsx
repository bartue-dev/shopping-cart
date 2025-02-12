import { useOutletContext } from "react-router-dom"

function MyCart() {
  const [/* productDetails  */, /* setProductDetails*/, cartItems, /* setCartItems */] = useOutletContext();

  console.log("Cart Items from My Cart:", cartItems);

  return (
    <div
      className="border-1 bg-amber-500"
    >
      <h1>Hi from my cart dialog modal!</h1>
    </div>
  )
}

export default MyCart