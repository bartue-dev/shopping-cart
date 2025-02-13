import { CircleX, ShoppingBag } from "lucide-react";
import { useOutletContext } from "react-router-dom"
import CartEmpty from "../../Components/Cart-empty";

function MyCart() {
  const [/* productDetails  */, /* setProductDetails*/, cartItems, setCartItems] = useOutletContext();

  console.log("Cart Items from My Cart:", cartItems);

  const quantityTotalPrice = (price, quantity) => {
    let total = quantity * price

    return Math.round((total + Number.EPSILON) * 100) / 100
  }
  
  const handleQuantity = (operator, index) => {
    const cart = cartItems.map((items, i) => {
      if (i === index) {
        if (operator === "add") {
          return {...items, quantity: items.quantity + 1}
        } else if (operator === "minus" && items.quantity > 0) {
          return {...items, quantity: items.quantity - 1}
        } else {
          return {...items, quantity : items.quantity}
        }
      } else {
        return {...items, quantity: items.quantity}
      }
    });

    setCartItems(cart)
  }

  const handleDeleteItem = (index) => {
    const cart = cartItems.filter((_, i) => i !== index);

    setCartItems(cart)
  }

  const total = () => {
    const total = cartItems.reduce((total, items) => total = total + (items.quantity * items.price) ,0)
    return Math.round((total + Number.EPSILON) * 100) / 100
  }

  return (
    <div className="h-[86vh] px-10 py-5 font-poppins">
      <div className="flex justify-center items-center gap-3 h-20">
        <ShoppingBag size={30}/>
        <h1 className="text-2xl font-bold">My Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <CartEmpty />
      ) : (
        <div className="flex justify-center items-start gap-10 w-full">

          <div className="overflow-auto h-100 p-5">
            <table className="w-full table-auto border-collapse">
              <thead className="border border-gray-400">
                <tr className="border border-gray-400">
                  <th className="text-left text-2xl p-3 border border-gray-400">Items</th>
                  <th className="text-center text-2xl p-3 border border-gray-400">Price</th>
                  <th className="text-center text-2xl p-3 border border-gray-400">Quantity</th>
                  <th className="text-center text-2xl p-3 border border-gray-400">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((items, index) => {
                  return (
                    <tr key={items.id} className="border border-gray-400">
                      <td className="flex  items-center gap-5 p-3 ">
                        <div className="w-40 h-40">
                          <img src={items.image} className="w-full h-full object-contain" />
                        </div>
                        <h1 className="text-xl font-semibold">{items.title}</h1>
                      </td>
                      <td className="p-3 text-xl border border-gray-400">${items.price}</td>
                      <td 
                      className="p-3 text-xl border border-gray-400"
                      >
                        <div className="flex justify-between items-center">
                          <button 
                            className="cursor-pointer px-2 text-xl"
                            onClick={() => handleQuantity("minus", index)}
                            >
                              -
                          </button>

                          <h1>{items.quantity}</h1>

                          <button 
                            className="cursor-pointer px-2 text-xl"
                            onClick={() => handleQuantity("add", index)}
                          >
                            +
                          </button>
                      </div>
                      </td>
                      <td 
                        className="px-5 text-xl border border-gray-400 font-bold text-wrap"
                      >
                        <div className="w-25">
                          <h1 className="text-center">
                          ${quantityTotalPrice(items.price, items.quantity)}
                          </h1>
                        </div>
                        <CircleX 
                          color="#4b5563"
                          className="cursor-pointer m-auto -mb-6"
                          onClick={() => handleDeleteItem(index)}
                        />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
      
          <div className="border rounded-md border-gray-400 w-100 h-78 p-5">
            <div className="text-3xl font-semibold border-b-1 p-1 border-gray-400">Order Summary</div>

            <div className="flex flex-col gap-2 border-b-1 border-gray-400 mt-5 p-1">
              <div className="flex items-center justify-between">
                <h1>Subtotal:</h1>
                <h2>${total()}</h2>
              </div>

              <div className="flex items-center justify-between">
                <h1>Shipping:</h1>
                <h2>0</h2>
              </div>
              
              <div className="flex items-center justify-between">
                <h1>Tax:</h1>
                <h2>0</h2>
              </div>
            </div>
            <div 
              className="flex items-center justify-between mt-5 border-b-1 p-1 border-gray-400"
            >
              <h1 className="">Total</h1>
              <h2>${total()}</h2>
            </div>
            <button 
              className="cursor-pointer bg-blue-500 rounded-md py-2 px-3 text-white mt-4"
              onClick={() => alert("Order Placed!")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

    </div>
  )
}

export default MyCart