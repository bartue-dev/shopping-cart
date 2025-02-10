import { useOutletContext } from "react-router-dom";
import BackgroundImage from "../utils/Background-image";

function ProductDetails() {
  const [productDetails] = useOutletContext()

  return (
    <div className="flex items-center justify-center font-poppins">
      <BackgroundImage />

      <div className="flex items-center justify-center gap-10 p-5 w-250 z-1">

        <div className=" w-200 h-120">
          <img src={productDetails.image} className="w-fulll h-full object-contain m-auto" />
        </div>

        <div className="w-250 flex items-start justify-center flex-col gap-10">
          <div>
            <h1 className="text-3xl">{productDetails.title.toUpperCase()}</h1>
            <h1 className="mt-5 underline text-lg">Description:</h1>
            <h1 className="text-base/5 text-justify">{productDetails.description}</h1>
          </div>

          <div className="flex gap-6 w-full">
            <div className="flex justify-between items-center w-30 text-2xl">
              <button 
                className="cursor-pointer px-2 text-xl"
                // onClick={() => handleQuantity("minus", index)}
                >
                  -
              </button>

              <h1>{productDetails.quantity}</h1>

              <button 
                className="cursor-pointer px-2 text-xl"
                // onClick={() => handleQuantity("add", index)}
              >
                +
              </button>
            </div>
            
            <button 
              className="border-1 rounded-lg py-3 px-10 bg-blue-500 text-white text-xl cursor-pointer"
              >
                Add to cart
            </button>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default ProductDetails