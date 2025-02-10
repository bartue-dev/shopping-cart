import { Link } from "react-router-dom"
import BackgroundImage from "../../utils/Background-image"

function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen font-poppins">
      {/* background image */}
      <BackgroundImage />

      <div className="flex items-center justify-center max-w-4xl z-1 ">
        <div className="mb-30 flex flex-col gap-10 w-250">
          <h1 className="text-5xl font-bold">Get your Outfit with <span className="italic">anyWEAR</span></h1>
          <p className="text-wrap">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae minima recusandae, quam praesentium exercitationem nam ab, eveniet dolorem, id deleniti alias debitis fuga ut ratione accusamus esse mollitia error earum.
          </p>
          <Link to="/products">
            <button className="px-4 py-1 border-none cursor-pointer rounded-sm bg-blue-400 text-lg text-white w-40">Shop now</button>
          </Link>
        </div>
        <img src="/images/model-no-bg.png" className="w-4xs"/>
      </div>
    </div>
  )
}

export default HomePage