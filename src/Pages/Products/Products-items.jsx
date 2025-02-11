import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

function ProductsItems({data, products, handleQuantity}) {
  const [/* productDetails  */,setProductDetails, cartItems, setCartItems] = useOutletContext();

  const handleProductDetails = (index) => {
    const detailsIndex = products.findIndex((product, i) => i === index)
    const result = products[detailsIndex]

    setProductDetails(result)
  }

  
  const handleCartItems = (index) => {
    const productIndex = products.findIndex((_, i) => i === index)
    const product = products[productIndex];

    setCartItems(prev => [...prev, product])
  }

  // console.log("Cart Items:", cartItems);

  // console.log("ProductDetails:",productDetails)

  return (
    <>
     {data && products.map((product, index) => {
        return (
          <div key={product.id} className="flex flex-col gap-3 border-1 border-slate-400 p-5 rounded-xl w-81 h-133">
            <div className="p-10 w-full h-70">
              <img src={product.image} alt="" className="w-full h-full object-contain"/>
            </div>

            <div className="flex flex-col w-full gap-3 ">
              <h1 
              className="text-base font-semibold"
              >
                {product.title.split(" ").slice(0,3).join(" ")}...
              </h1>

              <h1 className="text-[0.7rem] h-10 mb-2">
                {product.description.split(" ").slice(0,10).join(" ")}... 
                {" "}
                <Link to="/product-details" >
                  <span onClick={() => handleProductDetails(index)}
                  className="underline cursor-pointer font-semibold"
                  >
                    Read more
                  </span>
                </Link> 
              </h1>

              <h1 
              className="text-xs border-1 border-slate-400 rounded-xl bg-slate-200 w-fit px-3 py-1 flex justify-center items-center"
              >
                {product.category}
              </h1>

              <div className="flex justify-between items-center gap-2">
                <div>
                  <h1 className="text-xs">Price</h1>
                  <h1 className="text-xl">${product.price}</h1>
                </div>

                <div className="flex flex-col gap-3 -mt-4 w-30">
                  <div className="flex justify-between items-center">
                    <button 
                      className="cursor-pointer px-2 text-xl"
                      onClick={() => handleQuantity("minus", index)}
                      >
                        -
                    </button>

                    <h1>{product.quantity}</h1>

                    <button 
                      className="cursor-pointer px-2 text-xl"
                      onClick={() => handleQuantity("add", index)}
                    >
                      +
                    </button>
                  </div>

                  <button 
                    className="border-1 rounded-lg py-2 px-3 bg-blue-500 text-white text-sm cursor-pointer"
                    onClick={() => handleCartItems(index)}
                    >
                      Add to cart
                  </button>
                </div>
              </div>
            </div>

           </div>
        )
      })}
    </>
  )
}

export default ProductsItems