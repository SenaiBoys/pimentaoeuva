import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

interface ModalInfo {
  onClose: () => void;
}

export function ModalInfo({onClose}: ModalInfo) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = useCallback(
    (e: any) => {
      if (!modalRef?.current?.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => document.removeEventListener("mousedown", handleCloseModal);
  }, [handleCloseModal]);
  return (
    <div className="fixed z-50 top-0 left-0 w-full grid place-items-center min-h-screen bg-[rgba(3,3,3,0.5)]">
    <motion.section
      animate={{ scale: [0, 1]}}
      transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
      className="text-normal my-4 w-[1000px] p-4 z-90 bg-zinc-700 drop-shadow-xl rounded-2xl"
      ref={modalRef}
    >
        <h1 className="text-bold text-6xl">Informações</h1>
        <h4 className="italic font-extralight text-xl pt-4">Autores</h4>
        <motion.div
          variants={variants}
          animate="visible"
          initial="hidden"
          className="flex justify-around py-8"
        >
          <motion.div 
            whileHover={{scale: 1.2}}
            transition={{duration: 0.3}}
            variants={item}
            className="text-center text-base"
          >
            <img className="rounded-full w-48 h-48" src="https://i.imgur.com/LOICwj4.jpg" />
            <p>GUILHERME SCHNEIDER</p>
          </motion.div>
          <motion.div
            whileHover={{scale: 1.2}}
            transition={{duration: 0.3}}
            variants={item}
            className="text-center text-base"
          >
            <img className="rounded-full w-48 h-48" src="https://i.imgur.com/qZtkrmV.jpg" />
            <p>HIGOR BOHN</p>
          </motion.div>
          <motion.div
            whileHover={{scale: 1.2,}}
            transition={{duration: 0.3}}
            variants={item} 
            className="text-center text-base"
          >
            <img className="rounded-full w-48 h-48 block" src="https://i.imgur.com/0BZ7M0O.jpg" />
            <p>VINÍCIUS HACK</p>
          </motion.div>
        </motion.div>
        <h4 className="italic font-extralight text-xl pb-4">Bibliografia</h4>
        <ul className="text-red-400 ml-5">
          <li className="list-disc list-inside hover:text-red-500 transition"><a href="https://www.einstein.br">Hospital Israelita Albert Einstein</a></li>
          <li className="list-disc list-inside hover:text-red-500 transition"><a href="https://www.msdmanuals.com">Manual MSD</a></li>
          <li className="list-disc list-inside hover:text-red-500 transition"><a href="www.tuasaude.com/vitaminas">Tua Saúde</a></li>
        </ul>
        <div className="flex gap-8 justify-center align-center">
          <img className="self-center grayscale w-[36] h-8 hover:grayscale-0 transition duration-1000" src="https://i.imgur.com/kUidQYD.png"></img>
          <img className="self-center grayscale w-28 h-8 hover:grayscale-0 transition duration-1000" src="https://i.imgur.com/bYW8pfX.png"></img>
          <img className="self-center grayscale w-32 hover:grayscale-0 transition duration-1000" src="https://i.imgur.com/aAl1JnZ.png"></img>
        </div>
    </motion.section>
    </div>
  )
}