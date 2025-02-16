
function About() {
  return (
    <div className="p-20 font-poppins flex flex-col gap-10 max-[480px]:py-10" >
      <div>
        <h1 className="text-5xl mb-3 text-slate-800 max-[769px]:text-4xl max-[480px]:text-3xl">About me</h1>
        <p className="font-light text-xl/8 text-slate-800 max-[769px]:text-base max-[480px]:text-sm">
          Hello there! Im <span className="text-sky-500 font-semibold">bartue</span>. Currently studying Full Stack Web Development while having a none tech related full time job. I&apos;am currently taking free web development course called &apos;The Odin Project&apos;
        </p>
      </div>

      <div>
        <h1 className="text-5xl mb-3 text-slate-800 max-[769px]:text-4xl max-[480px]:text-3xl">Frameworks and Technogies used</h1>
        <p className="font-light text-xl/8 text-slate-800 mb-6 max-[769px]:text-base max-[480px]:text-sm">
          For this project <span className="text-sky-500 font-semibold">react js</span> is the frontend along with the <span className="text-sky-500 font-semibold">react-router</span> framework
        </p>
        <div className="max-w-100 flex gap-5">
          <img className="w-200 h-30 object-contain max-[480px]:w-30" src="/images/react-logo.png" />
          <img className="w-200 h-30 object-contain max-[480px]:w-30" src="/images/react-router-logo.png" />
        </div>
      </div>
    </div>
  )
}

export default About