import { motion } from 'framer-motion';
import { useEffect, useState } from "react";


interface ViatminContent {
  vitaminActive: "A" | "B1" | "C" ;
}

export const VitaminContent: React.FC<ViatminContent> = ({ vitaminActive }) => {
  const [vitamin, setVitamin] = useState<"A" | "B1" | "B2" | "B3" | "C" | "K">(vitaminActive);
  
  const content = {
    theme: {
      variant700: "fuchsia-700",
      variant400: "fuchsia-400",
      variant200: "fuchsia-200",
      border: "border-fuchsia-400"
    },
    specificName: "Retinol",
    vitaminFunction: "Visão",
    amount: "600µg/dia",
    needs: "Dificuldade para enxergar, infecções nos olhos (às vezes, fatais) e até mesmo cegueira",
    exceeds: "Sono, dor de cabeça, náusea e vômito",
  }

  switch(vitamin) {
    case "B1":
      content.specificName = "Tiamina";
      content.vitaminFunction = "Metabolismo de carboidratos e aminoácidos";
      content.amount = "1,2mg/dia";
      content.needs = "Beribéri e anomalias cerebrais";
      content.exceeds = "Fadiga, dor de cabeça, neuropatias, disfunções cardiovasculares e cerebrais";
      content.theme.variant700 = "teal-700";
      content.theme.variant400 = "teal-400";
      content.theme.border = "border-teal-400";
      content.theme.variant200 = "teal-200";
      break
    case "B2":
      content.specificName = "Riboflavina";
      content.vitaminFunction = "Metabolismo das proteínas	";
      content.amount = "1,3mg/dia";
      content.needs = "Pele pálida, rachaduras nos lábios, boca e língua doloridas e língua arroxeada";
      content.exceeds = "Sensação de queimadura, sensibilidade à luz e diarreias";
      content.theme.variant700 = "teal-700"
      content.theme.variant400 = "teal-400"
      content.theme.border = "border-teal-400"
      content.theme.variant200 = "teal-200"
      break
    
    case "B3":
      content.specificName = "Niacina";
      content.vitaminFunction = "Produção de energia e síntese de ácidos graxos e esteroides";
      content.amount = "16mg/dia";
      content.needs = "Erupções nos braços, mãos, pés, panturrilhas, pescoço e face, além de outras anomalias na pele";
      content.exceeds = "Rubor, prurido e aumento da glicose sanguínea";
      content.theme.variant700 = "teal-700"
      content.theme.variant400 = "teal-400"
      content.theme.border = "border-teal-400"
      content.theme.variant200 = "teal-200"
      break
    case "C":
      content.specificName = "Ácido ascórbico";
      content.vitaminFunction = "Antioxidante, aborção do ferro formação do colágeno";
      content.amount = "90mg/dia";
      content.needs = "Cansaço, fraqueza e escorbuto (em casos graves)";
      content.exceeds = "Náuseas e diarréia, além de atrapalhar o sistema antioxidante do corpo";
      content.theme.variant700 = "orange-700"
      content.theme.variant400 = "orange-400"
      content.theme.border = "border-orange-400"
      content.theme.variant200 = "orange-200"
      break
  }

  useEffect(() => {
    setVitamin(vitaminActive);
  }, [vitaminActive])
  
  return (
    <div className={`w-full rounded-2xl grid border-4 ${content.theme.border} grid-cols-vitaminContent`}>
      <motion.div  
        className={`relative h-full p-16 text-8xl top-0 left-0 transition-all rounded-lg bg-${content.theme.variant400} grid gap-8 text-center`}
      >
        <p className="self-center">{vitamin}</p>
        {(vitamin === "B1" || vitamin === "B2" || vitamin === "B3") && 
          <div className="flex w-full justify-center gap-4 absolute bottom-4">
            <div
              onClick={() => setVitamin("B1")} 
              className={`p-2 cursor-pointer rounded-full ${vitamin === "B1" ? `bg-teal-700` : `bg-teal-200`}`} 
            />
            <div
              onClick={() => setVitamin("B2")} 
              className={`p-2 cursor-pointer rounded-full ${vitamin === "B2" ? `bg-teal-700` : `bg-teal-200`}`} 
            />
            <div
              onClick={() => setVitamin("B3")} 
              className={`p-2 cursor-pointer  rounded-full ${vitamin === "B3" ? `bg-teal-700` : `bg-teal-200`}`} 
            />
          </div>
        }
      </motion.div>
      <section className="w-full flex flex-col gap-2 p-2 text-2xl"> {/*flex flex-col gap-4 */}
        <div className="">
          <h3>Nome específico: <span className="font-extralight text-xl">{content.specificName}</span></h3>
        </div>
        <div className="">
          <h3>Função: <span className="font-extralight text-xl">{content.vitaminFunction}</span></h3>
        </div>
        <div className="">
          <h3>Quantidade diária necessária: <span className="font-extralight text-xl">{content.amount}</span></h3>
        </div>
        <div className="">
          <h3>Carência: <span className="font-extralight text-xl">{content.needs}</span></h3>
        </div>
        <div className="">
          <h3>Excesso: <span className="font-extralight text-xl">{content.exceeds}</span></h3>
        </div>
      </section>
    </div>
  );
}