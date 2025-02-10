import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-20 font-poppins items-center bg-neutral-50 text-stone-700">

      <h1 className="text-3xl italic">any<span className="font-bold">WEAR</span> </h1>

      <div className="text-2xl flex gap-10 border-1 px-10 py-2 rounded-full">
        <Link to="home">Home</Link>
        <Link to="products">Products</Link>
        <Link to="about">About</Link>
      </div>

      <div>
        <ShoppingCart size={30}/>
      </div>

    </nav>
  )
}

export default Navbar