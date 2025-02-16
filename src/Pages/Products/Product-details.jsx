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
    <div className="flex items-center justify-center font-poppins mt-10">
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

      
      <div className="flex items-center justify-center gap-10 p-5 w-250 z-1 max-[769px]:px-20 max-[480px]:flex-col max-[480px]:gap-5">

        <img 
          src={productDetails.image} 
          className="w-200 h-100 object-contain m-auto max-[769px]:w-50 max-[480px]:-mb-10" 
        />

        <div className="flex items-start justify-center flex-col">
          <div>
            <h1 className="text-3xl max-[769px]:text-2xl max-[480px]:text-lg">{productDetails.title}</h1>
            <h1 className="mt-5 underline text-lg max-[769px]:text-base">Description:</h1>
            <h1 className="text-base/6 text-justify max-[769px]:text-sm max-[480px]:text-xs">{productDetails.description}</h1>
          </div>

          <div className="flex gap-6 w-full max-[480px]:gap-1">
            <div className="flex justify-between items-center w-30 text-2xl max-[769px]:text-xl max-[480px]:text-lg">
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
                className="border-1 rounded-lg py-3 px-10 bg-blue-500 text-white text-xl cursor-pointer max-[769px]:text-lg max-[769px]:px-7 max-[769px]:py-2 max-[480px]:text-base max-[480px]:whitespace-nowrap max-[480px]:px-3"
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