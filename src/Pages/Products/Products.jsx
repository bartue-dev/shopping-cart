import ProductsItems from "./Products-items";
import Category from "../../Components/Category";
import { HashLoader } from "react-spinners";
import { useContext } from "react";
import { AppContext } from "../../utils/AppContext";

function Products() {
  const {data, products, setProducts, loading } = useContext(AppContext)
 

  // console.log("products:",products);

  const handleQuantity = (operator, id) => {

    const quantity = products.map((product) => {
      if (product.id === id) {
        if (operator === "add") {
          return {...product, quantity: product.quantity + 1}
        } else if (operator === "minus" && product.quantity > 0) {
          return {...product, quantity: product.quantity - 1}
        } else {
          return {...product, quantity: product.quantity}
        }
      } else {
        return {...product, quantity: product.quantity}
      }
    })

    setProducts(quantity);
  }

  return (
    <div>
      
      {loading && (
        <div className="mt-(--custom-margin) flex justify-center items-center">
          <HashLoader
            color="#94a3b8"
            loading={loading}
            size={50}
            aria-label="Loading HashLoader"
            data-testid="loader"
          />
        </div>
      )}

      <div className="flex justify-center p-10 font-poppins">
        <div className="w-full grid grid-cols-(--custom-grid) justify-center items-center gap-5" >
          <ProductsItems 
            data={data}
            products={products}
            setProducts={setProducts}
            handleQuantity={handleQuantity}
          />
        </div>

        <Category 
          products={data}
          onClickAll={() => setProducts(data)}
          setProducts={setProducts}
        />
      </div> 
    </div>
  )
}

export default Products