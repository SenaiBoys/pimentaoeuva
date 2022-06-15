
interface ViatminContent {
  vitaminActive: string;
}

export const VitaminContent: React.FC<ViatminContent> = ({ vitaminActive }) => {
  return (
    <div className="w-full rounded-2xl p-4 border-slate-900 border">{vitaminActive}</div>
  );
}