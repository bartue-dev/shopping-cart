import ProductsItems from "../../Components/Products-items";
import Category from "../../Components/Category";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react"

function Products() {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {signal: signal});
        
        if(!response.ok) {
          throw new Error(`Status ${response.status}`)
        }

        const data = await response.json();

        const newData = data.map(items => ({
          ...items,
          quantity: 0
        }))

        setData(newData);
        setProducts(newData);
        setLoading(false)
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Abort");
          return;
        }
        setData(null)
        console.log(error)
      }/*  finally {
        setLoading(false)
      } */
    }
    // const timer = setTimeout(fetchData, 3000)
    fetchData();
    return () => {
      controller.abort();
      // clearInterval(timer)
    }
  }, [])

  console.log("products:",products);

  const handleQuantity = (operator, index) => {

    const quantity = products.map((product, i) => {
      if (i === index) {
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