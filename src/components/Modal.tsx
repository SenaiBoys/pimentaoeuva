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
  const [vitaminActive, setVitaminActive] = useState<"A" | "B1" | "C" >("B1");
  const modalRef = useRef<HTMLDivElement>(null);

  const content = {
    name: "Pimentão",
    group: "Capsicum annuum",
    description: "O pimentão é uma hortaliça usada na culinária do mundo todo, e é geralmente conhecido em três cores: vermelho, verde e amarelo. Suas vitaminas são:",
    vitamins: ["A", "B", "C"],
    imgs: ['https://i.imgur.com/xCUGaPm.png', 'https://i.imgur.com/1q25Zxw.png', 'https://i.imgur.com/L75HoIB.png', 'https://i.imgur.com/Nr1FyeZ.png', 'https://i.imgur.com/F1KBiHl.png']
  }

  if(type === "uva") {
    content.name = "Uva";
    content.group = "Rebellus capiscus"
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
      <div
        className="text-normal my-4 w-[1000px] p-4 z-90 bg-zinc-700 drop-shadow-xl rounded-2xl"
        ref={modalRef}
      >
        <h2 className="text-bold text-6xl">{content.name}</h2>
        <h4 className="italic font-extralight text-xl pb-8">{content.group}</h4>
        <p className="m-t-6 text- xl text-xl">O pimentão é uma hortaliça usada na culinária do mundo todo, e é geralmente conhecido em três cores: vermelho, verde e amarelo. Suas vitaminas são:</p>
        <div className="flex py-4 justify-center gap-2">
         <div 
            onClick={() => setVitaminActive("A")}
            className="h-16 w-16 cursor-pointer hover:brightness-90 transition-all rounded-lg bg-fuchsia-400 grid leading-[4rem] text-center"
          >
            A
            </div>
          <div
            onClick={() => setVitaminActive("B1")}
            className="h-16 w-16 cursor-pointer hover:brightness-90 transition-all rounded-lg bg-teal-400 grid leading-[4rem] text-center"
          >
            B
          </div>
          <div
            onClick={() => setVitaminActive("C")}
            className="h-16 w-16 cursor-pointer hover:brightness-90 transition-all rounded-lg bg-orange-400 grid leading-[4rem] text-center"
          >
            C
          </div>
        </div>
          <VitaminContent vitaminActive={vitaminActive}/>
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
      </div>
    </div>
  );
}
