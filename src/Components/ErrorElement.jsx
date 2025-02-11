import { Link, useRouteError } from "react-router-dom"

function ErrorElement() {
  const error = useRouteError();
  console.log("From error element:",error);
  

  return (
    <div className="flex flex-col items-center justify-center gap-15 z-1 h-screen">
      <h1 className="text-5xl">Opps!</h1>
      <p className="text-xl italic">Sorry, an unexpected error occured</p>
      <p className="italic">
        {error.statusText || error.message}
      </p>
      <Link to="/home" className="underline">go back to home</Link>
    </div>
  )
}

export default ErrorElement