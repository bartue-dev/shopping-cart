import { Link } from "react-router-dom"

function NoData() {

  return (
    <div className="flex flex-col items-center justify-center gap-15 z-1">
      <h1 className="text-5xl">Opps!</h1>
      <p className="text-xl italic">No product details found</p>
      <Link to="/products" className="underline">go back to products</Link>
    </div>
  )
}

export default NoData