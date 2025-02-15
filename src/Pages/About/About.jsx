
function About() {
  return (
    <div className="p-20 font-poppins flex flex-col gap-10" >
      <div className="w-250">
        <h1 className="text-5xl mb-3 text-slate-800">About me</h1>
        <p className="font-light text-xl/8 text-slate-800">
          Hello there! Im <span className="text-sky-500 font-semibold">bartue</span>. Currently studying Full Stack Web Development while having a none tech related full time job. I&apos;am currently taking free web development course called &apos;The Odin Project&apos;
        </p>
      </div>

      <div className="w-250">
        <h1 className="text-5xl mb-3 text-slate-800">Frameworks and Technogies used</h1>
        <p className="font-light text-xl/8 text-slate-800 mb-6">
          For this project <span className="text-sky-500 font-semibold">react js</span> is the frontend along with the <span className="text-sky-500 font-semibold">react-router</span> framework
        </p>
        <div className="w-200 h-30 flex">
          <img className="w-full h-full object-contain" src="/images/react-logo.png" />
          <img className="w-full h-full object-contain" src="/images/react-router-logo.png" />
        </div>
      </div>
    </div>
  )
}

export default About