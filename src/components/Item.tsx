import { useState } from "react";
import { Modal } from "./Modal";

interface ItemProps {
  type: "pimentao" | "uva";
}

export function Item({ type }: ItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const bg = type === "uva" ? `bg-[url('https://i.imgur.com/yWH1qJP.png')]` : "bg-[url('https://i.imgur.com/DT3c5GT.png')]"

  return (
    <div
      className={`
      relative
      grid place-items-center
      transition-all
      h-[calc(100vh-128px)]
      duration-300
      ${hover ? "text-7xl" : !isModalOpen ? "text-[0]" : "text-7xl"}
    `}
      onClick={() => setIsModalOpen(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`${bg} duration-300 rounded-3xl ${type === "pimentao" ? "rounded-r-none" : "rounded-l-none"} transition-all ${
          hover ? "opacity-70" : "opacity-100"
        } z-10 w-full h-full bg-cover absolute top-0 left-0`}
      />
      <h2 className="z-20 hover:">
        {type === "pimentao" ? "Pimentão" : "Uva"}
      </h2>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} type={type} />
      )}
    </div>
  );
}