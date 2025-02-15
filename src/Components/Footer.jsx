import { useContext } from "react"
import { categoryNames } from "../utils/categoryNames"
import { AppContext } from "../utils/AppContext"

function Footer() {
  const {products} = useContext(AppContext)

  return (
    <div className=" p-20 font-poppins">
      <div className="border-t-1 border-b-1 flex border-gray-400 justify-between items-start p-5">
        <h1 className="font-light">Terms Privacy Policy</h1>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Products</h1>
          {categoryNames(products).map(names => {
            return (
              <h1 
                key={names} 
                className="font-light hover:text-gray-400"
              >
                {names}
              </h1>
            )
          })}
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Resources</h1>
          <h2 className="font-light hover:text-gray-400">The Odin Project</h2>
          <h2 className="font-light hover:text-gray-400">Documentation</h2>
          <h2 className="font-light hover:text-gray-400">Stack Overflow</h2>
          <h2 className="font-light hover:text-gray-400">Youtube</h2>
          <h2 className="font-light hover:text-gray-400">Articles</h2>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold">Company</h1>
          <h2 className="font-light hover:text-gray-400">Home</h2>
          <h2 className="font-light hover:text-gray-400">About us</h2>
          <h2 className="font-light hover:text-gray-400">Company Values</h2>
          <h2 className="font-light hover:text-gray-400">Pricing</h2>
          <h2 className="font-light hover:text-gray-400">Privacy Policy</h2>
        </div>
      </div>

      <div className="flex justify-between items-center p-5">
        <h1 className="font-light">Made by :{" "} bartue</h1>
        <a 
          href="https://github.com/bartue-dev/shopping-cart" target="_blank"
          className="w-8"
        >
          <img 
            src="/images/github-mark.png"
            className="w-full h-full place-self-center"
          />
        </a>
      </div>
      
    </div>
  )
}

export default Footer