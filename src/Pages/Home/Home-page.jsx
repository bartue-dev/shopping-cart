import { Link } from "react-router-dom"
import BackgroundImage from "../../utils/Background-image"

function HomePage() {
  return (
    <div className="flex items-center justify-center font-poppins max-[480px]:pt-10">
      {/* background image */}
      <BackgroundImage />

      <div className="flex items-center justify-center z-1 px-20 max-[769px]:px-20">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl font-bold max-[769px]:text-3xl">Get your Outfit with <span className="italic">anyWEAR</span></h1>
          <p className="text-wrap max-[769px]:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima recusandae, quam praesentium exercitationem nam ab, eveniet dolorem, id deleniti alias debitis fuga ut ratione accusamus esse mollitia error earum.
          </p>
          <Link to="/products">
            <button className="px-4 py-1 border-none cursor-pointer rounded-sm bg-blue-400 text-lg text-white w-40 max-[769px]:text-sm">Shop now</button>
          </Link>
        </div>
        <img src="/images/model-no-bg.png" className="w-4xs max-[769px]:w-2xs max-[480px]:hidden"/>
      </div>
    </div>
  )
}

export default HomePage