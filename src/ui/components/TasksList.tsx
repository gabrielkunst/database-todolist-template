import { EmptyList } from "./EmptyList";

export function TasksList() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 p-4 text-center border-t-2 rounded-lg border-customGray400">
      <EmptyList />
    </section>
  );
}
