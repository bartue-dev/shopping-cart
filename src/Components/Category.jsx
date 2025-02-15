import { categoryNames } from "../utils/categoryNames";

function Category({products, onClickAll, setProducts}) {

  const handleCategoryClick = (categoryName) => {
    const result = products.filter((product) => {
      return product.category === categoryName
    })

    setProducts(result)
  }

  return (
    <>
      {products &&
        <div className="self-start flex flex-col justify-center items-start gap-2 w-70 min-h-75 border-1 border-slate-400 rounded-xl p-5">
          <h1 className="text-2xl">Categories:</h1>

          <div 
          onClick={onClickAll} 
          className="border-1 w-full p-2 rounded-md cursor-pointer text-xl border-slate-400"
          >
            All
          </div>

          {categoryNames(products).map((category, index) => {
            return (
              <button 
              key={index} 
              onClick={() => handleCategoryClick(category)} className="border-1 w-full p-2 rounded-md cursor-pointer border-slate-400"
              >
                <h1 className="text-xl text-left">{category.charAt(0).toUpperCase() + category.split("").slice(1).join("")}</h1>
              </button>
            )
          })}
      </div>
      }
    </>
  )
}

export default Category