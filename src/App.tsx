import { motion } from 'framer-motion';
import { Info } from 'phosphor-react';
import { useState } from 'react';
import { Item } from "./components/Item";
import { ModalInfo } from './components/ModalInfo';

export default function App() {
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);

  return (
    <div className="overflow-hidden min-h-screen bg-zinc-900 text-zinc-100">
        <motion.div 
          className="grid grid-cols-2 p-16 gap-2"
        >
          <Item type="pimentao"/>
          <Item type="uva"/>
        </motion.div>
        <motion.div 
          // initial={{x: "-100vw"}}
          // animate={{x: 0}}
          initial={{y: -300, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          whileHover={{scale: 1.3, rotate: 8}}
          transition={{duration: 0.7, type: "spring", stiffness: 200, damping: 15}}
          className="cursor-pointer fixed text-zinc-100 top-4 right-4"
        >
          <Info weight='fill' size={32} onClick={() => setIsModalInfoOpen(true)}/>
        </motion.div>
        {isModalInfoOpen &&
          <ModalInfo onClose={() => setIsModalInfoOpen(false)} />
        }
    </div>
  );
}