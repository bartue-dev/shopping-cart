import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import AddtoCartMessage from "../../Components/AddtoCartMessage";

function ProductsItems({data, products, handleQuantity, setProducts}) {
  const [/* productDetails  */,setProductDetails, /* cartItems */, setCartItems] = useOutletContext();

  const handleProductDetails = (id) => {
    const detailsIndex = products.findIndex((product) => product.id === id)
    const result = products[detailsIndex];

    setProductDetails(result)
  } 
  
  const handleAddToCartItems = (id) => {
    const productIndex = products.findIndex((product) => product.id === id);

    products.map((product) => {
      if (product.id === id) {
        if (product.quantity === 0) {
          alert("Add product quantity!");
        } else {

          setCartItems(prev => {
            const exist = prev.some(items => items.id === id );

            if (exist) {
             return prev.map((items) => {
                return items.id === id ? {...items, quantity: items.quantity + products[productIndex].quantity} : items
              });
            } else {
              return [...prev, products[productIndex]]
            }
          });
          
          setProducts(prev => (
            prev.map((items) => {
              return items.id === id ? {...items, isCartMessage: true} : items
            })
          
          ));
        }
      }
    });

    setProducts(prev => (
      prev.map((items) => {
        return items.id === id ? {...items, quantity: 0} : items
      })
    ));

  }

  const timerFn = (id) => {
    setProducts(prev => (
      prev.map((items) => {
        return id === items.id ? {...items, isCartMessage: false} : items
      })
    ))
  }

  return (
    <>
     {data && products.map((product) => {
        return (
          <div 
            key={product.id} 
            className="flex flex-col gap-3 border-1 border-slate-400 p-5 rounded-xl w-81 h-135 max-[769px]:w-100 max-[480px]:w-full">
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
                  <span onClick={() => handleProductDetails(product.id)}
                  className="underline cursor-pointer font-semibold"
                  >
                    Read more
                  </span>
                </Link> 
              </h1>

              <div className="flex justify-between items-center mb-3 h-7">
                <h1 
                className="text-xs border-1 border-slate-400 rounded-xl bg-slate-200 w-fit px-3 py-1 flex justify-center items-center"
                >
                  {product.category}
                </h1>
                {product.isCartMessage ? (
                  <AddtoCartMessage 
                    id={product.id}
                    timerFn={timerFn}                      
                  />
                ) : (
                  <></>
                )}
              </div>

              <div className="flex justify-between items-center gap-2">
                <div>
                  <h1 className="text-xs">Price</h1>
                  <h1 className="text-xl">${product.price}</h1>
                </div>

                <div className="flex flex-col gap-3 -mt-4 w-30">
                  <div className="flex justify-between items-center">
                    <button 
                      className="cursor-pointer px-2 text-xl"
                      onClick={() => handleQuantity("minus", product.id)}
                      >
                        -
                    </button>

                    <h1>{product.quantity}</h1>

                    <button 
                      className="cursor-pointer px-2 text-xl"
                      onClick={() => handleQuantity("add", product.id)}
                    >
                      +
                    </button>
                  </div>

                  <button 
                    className="border-1 rounded-lg py-2 px-3 bg-blue-500 text-white text-sm cursor-pointer"
                    onClick={() => handleAddToCartItems(product.id)}
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