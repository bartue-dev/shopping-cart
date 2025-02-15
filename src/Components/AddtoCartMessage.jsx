import { CircleCheck } from "lucide-react";
import { useEffect } from "react";

function AddtoCartMessage({id, timerFn}) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      timerFn(id)
    }, 1000);

    return () => {
      clearTimeout(timer); 
    }
  },[id, timerFn]);

  return (
    <div 
      className="flex justify-center items-center rounded-full bg-lime-400 py-1 px-3"
    >
      <CircleCheck size={20} color="#fafaf9"/>
      <h1 className="font-semibold text-white text-xs">Added</h1>
  </div>
  )
}

export default AddtoCartMessage