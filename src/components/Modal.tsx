import { useCallback, useEffect, useRef, useState } from "react";
import { VitaminContent } from "./VitaminContent";

interface ModalProps {
  type: "pimentao" | "uva";
  onClose: () => void;
}

export function Modal({ type, onClose }: ModalProps) {
  const [vitaminActive, setVitaminActive] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed z-50 top-0 left-0 w-full grid place-items-center p-4 min-h-screen bg-[rgba(3,3,3,0.5)]">
      <div
        className="text-normal w-1/2 p-4 z-90 h-full bg-zinc-700 drop-shadow-xl rounded-2xl"
        ref={modalRef}
      >
        <h2 className="text-bold text-6xl">Pimentão</h2>
        <h4 className="italic font-extralight text-xl pb-8">Capsicum annuum Group</h4>
        <p className="m-t-6 text- xl text-xl">No pimentão estão presentes as vitaminas:</p>
        <div className="flex py-4 justify-center gap-8">
          <div
            onClick={() => setVitaminActive("B")}
            className="h-16 w-16 cursor-pointer hover:brightness-90 transition-all rounded-lg bg-teal-400 grid leading-[4rem] text-center"
          >
            B
          </div>
          <div 
            onClick={() => setVitaminActive("A")}
            className="h-16 w-16 cursor-pointer hover:brightness-90 transition-all rounded-lg bg-fuchsia-400 grid leading-[4rem] text-center"
          >
            A
            </div>
          <div
            onClick={() => setVitaminActive("K")}
            className="h-16 w-16 cursor-pointer hover:brightness-90 transition-all rounded-lg bg-orange-400 grid leading-[4rem] text-center"
          >
            K
          </div>
        </div>
          <VitaminContent vitaminActive={vitaminActive}/>
      </div>
    </div>
  );
}
