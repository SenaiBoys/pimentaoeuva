import { Item } from "./components/Item";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <div className="grid grid-cols-2 p-16 gap-2">
        <Item type="pimentao"/>
        <Item type="uva"/>
      </div>
    </div>
  );
}