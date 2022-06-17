import { motion } from 'framer-motion';
import { Item } from "./components/Item";


export default function App() {
  return (
    <div className="overflow-hidden min-h-screen bg-zinc-900 text-zinc-100">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 p-16 gap-2"
        >
          <Item type="pimentao"/>
          <Item type="uva"/>
        </motion.div>
    </div>
  );
}