import { useState } from "react";
import { Modal } from "./Modal";

interface ItemProps {
  type: "pimentao" | "uva";
}

export function Item({ type }: ItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hover, setHover] = useState(false);
  
  const bgUva = type === "uva" ? `bg-[url('https://i.imgur.com/5H72SXL.jpg')]` : `bg-[url('https://i.imgur.com/5HzoecL.png')]`
  // const bgPimentao = `bg-[url('https://i.imgur.com/5H72SXL.jpg')]`
  const bgUvaHover = type === "uva" ? `hover:bg-[url('https://i.imgur.com/hW3QjjN.jpg')]` : `hover:bg-[url('https://i.imgur.com/8orZQY9.png')]`
  // const bgPimentaoHover = `hover:bg-[url('https://i.imgur.com/hW3QjjN.jpg')]`

  return (
    <div className={
    `
      grid place-items-center
      ${bgUva} ${bgUvaHover} bg-cover
      transition-all
      h-[calc(100vh-128px)]
      duration-300
      rounded-xl ${type === "pimentao" ? 'rounded-r-none' : 'rounded-l-none'}
      ${hover ? "text-7xl" : !isModalOpen ? "text-[0]" : "text-7xl"}
    `
  } 

    onClick={() => setIsModalOpen(true)}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
    <h2>{type === "pimentao" ? "Pimentão" : "Uva"}</h2>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} type={type}/>}
    </div>
  )
}