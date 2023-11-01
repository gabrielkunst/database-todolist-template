import { PlusCircle } from "lucide-react";

export function TaskForm() {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-2 -mt-7">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="flex-1 w-full p-4 transition-colors duration-300 border rounded-lg outline-none placeholder:text-customGray300 text-customGray100 bg-customGray500 border-customGray700 focus:border-customPurple min-w-[200px]"
      />
      <button className="flex items-center justify-center gap-2 p-4 font-bold transition-colors duration-300 rounded-lg text-customGray100 bg-customDarkBlue hover:bg-customBlue">
        Criar
        <PlusCircle />
      </button>
    </div>
  );
}
