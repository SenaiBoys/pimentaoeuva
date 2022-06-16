
interface ViatminContent {
  vitaminActive: "A" | "B" | "C" ;
}

export const VitaminContent: React.FC<ViatminContent> = ({ vitaminActive }) => {
  const border = vitaminActive === "A" ? "border-fuchsia-400" : vitaminActive === "B" ? "border-teal-400" : "border-orange-400"
  const bg = vitaminActive === "A" ? "bg-fuchsia-400" : vitaminActive === "B" ? "bg-teal-400" : "bg-orange-400"
  
  return (
    <div className={`w-full rounded-2xl grid border-4 ${border} grid-cols-vitaminContent`}>
      <div  
        className={`h-full p-16 text-8xl top-0 left-0 transition-all rounded-lg ${bg} grid text-center`}
      >{vitaminActive}</div>
      <section className="w-full flex flex-col gap-1 p-2 text-xl">
        <div className="">
          <h3>Nome específico: <span className="font-extralight text-base">Rebellus Actobrus</span></h3>
        </div>
        <div className="">
          <h3>Quantidade diária necessária: <span className="font-extralight text-base">0,000000002kg</span></h3>
        </div>
        <div className="">
          <h3>Carência: <span className="font-extralight text-base">Morte</span></h3>
        </div>
        <div className="">
          <h3>Excesso: <span className="font-extralight text-base">Morte</span></h3>
        </div>
      </section>
    </div>
  );
}