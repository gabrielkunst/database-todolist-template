import { Header } from "@/ui/components/Header";
import { TasksContent } from "@/ui/components/TasksContent";

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-customGray600 flex flex-col">
      <Header />
      <TasksContent />
    </main>
  );
}
