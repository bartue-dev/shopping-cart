//remove the duplicates of categories and return each on of it to render it in the products component
export const categoryNames = (products) => {
  let categoryNames;

  if(products) {
    categoryNames = products.map((product) => {
      return product.category
    });
  }

  return [...new Set(categoryNames)]
}