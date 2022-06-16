import { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { VitaminContent } from "./VitaminContent";


interface ModalProps {
  type: "pimentao" | "uva";
  onClose: () => void;
}

export function Modal({ type, onClose }: ModalProps) {
  const [vitaminActive, setVitaminActive] = useState<"A" | "B1" | "C" >("B1");
  const modalRef = useRef<HTMLDivElement>(null);

  const imgs = ['https://i.imgur.com/yWH1qJP.png', 'https://i.imgur.com/yWH1qJP.png']

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
        className="text-normal my-4 scroll-p-8 overflow-y-scroll w-[1000px] h-[calc(100vh-4rem)] p-4 z-90 bg-zinc-700 drop-shadow-xl rounded-2xl"
        ref={modalRef}
      >
        <h2 className="text-bold text-6xl">Pimentão</h2>
        <h4 className="italic font-extralight text-xl pb-8">Capsicum annuum</h4>
        <p className="m-t-6 text- xl text-xl">O pimentão é uma hortaliça usada na culinária do mundo todo, e é geralmente conhecido em três cores, vermelho, verde e amarelo. Suas vitaminas são:</p>
        <div className="flex py-4 justify-center gap-8">
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
      >
        {imgs.map(img => (
          <SwiperSlide>
            <img src={img} key={img} className=" rounded-lg w-full h-96 object-cover"/>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}
