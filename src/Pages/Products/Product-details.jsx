import { Link, useOutletContext } from "react-router-dom";
import { CircleChevronLeft } from "lucide-react";
import BackgroundImage from "../../utils/Background-image";
import NoData from "../../Components/NoData";
import AddtoCartMessage from "../../Components/AddtoCartMessage";

function ProductDetails() {
  const [productDetails, setProductDetails, cartItems, setCartItems] = useOutletContext();

  const handleQuantity = (operator) => {

    const quantity = {
      ...productDetails,
      quantity: operator === "add" ? productDetails.quantity + 1 : operator === "minus" ? productDetails.quantity - 1 : productDetails.quantity
    }

    setProductDetails(quantity);
  }

  const handleAddToCartItems = (id, detailsQuantity ) => {
    const exist = cartItems.some(items => items.id === id);
    

    if (detailsQuantity <= 0) {
      alert("Add product quantity!")
    } else if (exist) {

      setCartItems(prev => (
        prev.map(items => {
          return {...items, quantity: items.quantity + detailsQuantity}
        })
      ));

      setProductDetails({
        ...productDetails,
        quantity: 0,
        isCartMessage: true
      });
      
    } else {
      setProductDetails({
        ...productDetails,
        quantity: 0,
        isCartMessage: true
      });
      setCartItems(prev => [...prev, productDetails])
    }
  }

  const timerFn = () => {
    setProductDetails({
      ...productDetails,
      isCartMessage: false
    })
  }


  return (
    <div className="flex items-center justify-center font-poppins h-[86vh] mt-10">
      <BackgroundImage />

      {productDetails ? (
        <>
        <Link to="/products">
          <CircleChevronLeft 
            className="absolute left-20 top-30 cursor-pointer z-2" 
            size={50} 
            color="#57534e"
          />
        </Link>

      
      <div className="flex items-center justify-center gap-10 p-5 w-250 z-1">

        <div className=" w-200 h-120">
          <img src={productDetails.image} className="w-fulll h-full object-contain m-auto" />
        </div>

        <div className="w-250 flex items-start justify-center flex-col ">
          <div>
            <h1 className="text-3xl">{productDetails.title}</h1>
            <h1 className="mt-5 underline text-lg">Description:</h1>
            <h1 className="text-base/6 text-justify">{productDetails.description}</h1>
          </div>

          <div className="flex gap-6 w-full">
            <div className="flex justify-between items-center w-30 text-2xl">
              <button 
                className="cursor-pointer px-2 text-xl"
                onClick={() => handleQuantity("minus")}
                >
                  -
              </button>

              <h1>{productDetails.quantity}</h1>

              <button 
                className="cursor-pointer px-2 text-xl"
                onClick={() => handleQuantity("add")}
              >
                +
              </button>
            </div>
            
            <div className="mb-10 flex flex-col gap-2">
              <div className="w-full h-8">
                {productDetails.isCartMessage ? (
                  <AddtoCartMessage 
                    id={productDetails.id}
                    timerFn={timerFn}
                  />
                ) : (
                  <></>
                )}
              </div>

              <button 
                className="border-1 rounded-lg py-3 px-10 bg-blue-500 text-white text-xl cursor-pointer"
                onClick={() => handleAddToCartItems(productDetails.id, productDetails.quantity)}
                >
                  Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
        </>
      ) : (
        <NoData />
      )}
    </div>
  )
}

export default ProductDetails