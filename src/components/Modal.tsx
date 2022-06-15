import { useCallback, useEffect, useRef } from "react";

interface ModalProps {
  type: "pimentao" | "uva";
  onClose: () => void;
}

export function Modal({ type, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = useCallback((e: any) => {
    if(!(modalRef?.current?.contains(e.target))) {
      onClose();
    }
  }, [])

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModal);

    return () => document.removeEventListener("mousedown", handleCloseModal);
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full min-h-screen bg-[rgba(0,0,0,0.6)]">
      <div ref={modalRef}>{type}</div>
    </div>
  )
}