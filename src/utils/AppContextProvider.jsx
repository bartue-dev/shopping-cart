import { AppContext } from "./AppContext"
import { useState, useEffect } from "react";

export default function AppContextProdiver({children}) {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState(null);
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
          quantity: 0,
          isCartMessage: false
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
      }
    }
    fetchData();
    return () => {
      controller.abort();
    }
  }, []);

  console.log(products);
  

  return (
    <AppContext.Provider value={{data, products, loading, setProducts}}>
      {children}
    </AppContext.Provider>
  )

}
