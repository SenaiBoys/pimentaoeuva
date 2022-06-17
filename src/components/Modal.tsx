import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { VitaminContent } from "./VitaminContent";


interface ModalProps {
  type: "pimentao" | "uva";
  onClose: () => void;
}

export function Modal({ type, onClose }: ModalProps) {
  const [vitaminActive, setVitaminActive] = useState<"A" | "B1" | "C" | "K">("B1");
  const modalRef = useRef<HTMLDivElement>(null);

  const content = {
    name: "Pimentão",
    group: "Capsicum annuum",
    description: "O pimentão é uma hortaliça usada na culinária do mundo todo, e é geralmente conhecido em três cores: vermelho, verde e amarelo. Suas vitaminas são:",
    vitamins: ["A", "B1", "C"],
    bVariants: ["B1", "B2", "B3"],
    imgs: ['https://i.imgur.com/xCUGaPm.png', 'https://i.imgur.com/1q25Zxw.png', 'https://i.imgur.com/L75HoIB.png', 'https://i.imgur.com/Nr1FyeZ.png', 'https://i.imgur.com/F1KBiHl.png']
  }

  if(type === "uva") {
    content.name = "Uva";
    content.group = "Vitis vinifera"
    content.description = "A uva é o fruto da videira, geralmente usada para fazer geleia, vinho e passas, ou para ser consumida ao natural. Suas vitaminas são:",
    content.vitamins = ["B1", "C", "K"],
    content.bVariants = ["B1", "B2", "B3", "B6"],
    content.imgs = ["https://i.imgur.com/lHdTxtw.png", "https://i.imgur.com/1qBKsc6.png", "https://i.imgur.com/etvRrUr.png", "https://i.imgur.com/YBQoPns.png", "https://i.imgur.com/3oXLJ25.png"]
  }
  
  const handleCloseModal = useCallback(
    (e: any) => {
      if (!modalRef?.current?.contains(e.target)) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => document.removeEventListener("mousedown", handleCloseModal);
  }, [handleCloseModal]);

  return (
    <div className="fixed z-50 top-0 left-0 w-full grid place-items-center min-h-screen bg-[rgba(3,3,3,0.5)]">
      <motion.div
        animate={{ scale: [0, 1]}}
        // exit={{ scale: 0 }}
        transition={{ type: "spring", stiffness: 100, duration: 0.3 }}
        className="text-normal my-4 w-[1000px] p-4 z-90 bg-zinc-700 drop-shadow-xl rounded-2xl"
        ref={modalRef}
        
      >
        <h2 className="text-bold text-6xl">{content.name}</h2>
        <h4 className="italic font-extralight text-xl pb-8">{content.group}</h4>
        <p className="m-t-6 text- xl text-xl">{content.description}</p>
        <div className="flex py-4 justify-center gap-4">
          {content.vitamins.map(vitamin => {
            const rotateValues = [3, -3, 8, -8];
            return (
              <motion.div
                key={vitamin}
                whileHover={{ rotate: rotateValues[Math.floor(Math.random() * rotateValues.length)], scale: 1.20 }}
                onClick={() => setVitaminActive(`${vitamin}` as any)}
                whileTap={{scale: [1.2, 1.5]}}
                transition={{ type: "spring", velocity: 2 }}
                className={`h-16 text-4xl w-16 ${vitaminActive === vitamin ? "opacity-100" : "opacity-40"} cursor-pointer rounded-lg ${vitamin === "A" ? "bg-fuchsia-400" : vitamin === "B1" ? "bg-teal-400" : vitamin === "C" ? "bg-orange-400" : "bg-rose-400"} grid leading-[4rem] text-center`}
              >
                <p>{vitamin.replace("1", "")}</p>
              </motion.div>
            )
          })}
        </div>
          <VitaminContent bVariants={content.bVariants as any} vitaminActive={vitaminActive}/>
      <Swiper
        className="pt-8"
        spaceBetween={20}
        modules={[Autoplay, Pagination]}
        pagination={{clickable: true}}
        autoplay
      >
        {content.imgs.map(img => (
          <SwiperSlide>
            <img src={img} key={img} className="rounded-lg w-full h-80 object-cover"/>
          </SwiperSlide>
        ))}
      </Swiper>
      </motion.div>
    </div>
  );
}
