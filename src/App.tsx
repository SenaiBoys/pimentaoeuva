import { useState } from "react";

export default function App() {
  const [modalInfo, setModalInfo] = useState({
    title: "Pimentão"
  });

  const handleClick = (title: string) => {
    setModalInfo({ title });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="grid grid-cols-2 p-16 gap-2">
        <div className="
        text-7xl
        grid place-items-center  
        bg-pimentao bg-cover 
        rounded-r-none rounded-xl
        transition-all
        h-[calc(100vh-128px)]" 
        onClick={() => handleClick("Pimentão")}>
          <h2>Pimentão</h2>
        </div>
        <div className="
        text-7xl 
        grid place-items-center 
        bg-uva bg-cover
        transition-all
        rounded-xl rounded-l-none " onClick={() => handleClick("Uva")}>
          <h2>Uva</h2>
        </div>
      </div>
    </div>
  );
}