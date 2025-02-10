import { useState } from "react";

function useProductDetails() {
  const [productDetails, setProductDetails] = useState([]);

  return {productDetails, setProductDetails}
}

export default useProductDetails