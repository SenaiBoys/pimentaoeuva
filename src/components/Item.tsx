import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import { Modal } from "./Modal";

interface ItemProps {
  type: "pimentao" | "uva";
}

export function Item({ type }: ItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hover, setHover] = useState(false);
  console.log({isModalOpen})

  const bg = type === "uva" ? `bg-[url('https://i.imgur.com/yWH1qJP.png')]` : "bg-[url('https://i.imgur.com/DT3c5GT.png')]"

  return (
    <motion.div
      className={`
      relative
      grid place-items-center
      transition-all
      h-[calc(100vh-128px)]
      duration-300
      text-7xl
      cursor-pointer
    `}
      onClick={() => setIsModalOpen(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        animate={hover ?{ opacity: 1 }: {opacity: 0.3}}
        transition={{ type: "spring", velocity: 2, duration: 0.4}}
        className={`${bg} rounded-3xl ${type === "pimentao" ? "rounded-r-none" : "rounded-l-none"} transition-all z-10 w-full h-full bg-cover absolute top-0 left-0`}
      />
      <motion.h2
        animate={ hover ? {opacity: 1, y: 0} : {opacity: 0, y: 40}}
        transition={{ type: "spring", velocity: 2, duration: 0.4}}
        className="z-20"
      >
        {type === "pimentao" ? "Pimentão" : "Uva"}
      </motion.h2>
      <AnimatePresence>{isModalOpen && <Modal onClose={() => setIsModalOpen(false)} type={type} />}</AnimatePresence>
    </motion.div>
  );
}