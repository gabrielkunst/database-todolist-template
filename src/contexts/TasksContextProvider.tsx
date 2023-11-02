"use client";
import { TaskType } from "@/@types/TaskType";
import { createContext, useContext, useState } from "react";

interface TasksProviderProps {
  children: React.ReactNode;
}

interface TasksContextProps {
  tasks: TaskType[];
  handleDeleteTask: (_id: string) => void;
  handleToggleTask: (_id: string) => void;
  totalTasks: number;
  totalDoneTasks: number;
}

const TasksContext = createContext<TasksContextProps>({
  tasks: [],
  totalTasks: 0,
  totalDoneTasks: 0,
  handleDeleteTask: () => {},
  handleToggleTask: () => {},
});

export function useTasks() {
  return useContext(TasksContext);
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: "asdasdsadas",
      isDone: false,
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
      createdAt: new Date(),
    },
    {
      id: "asdasdasdsadasdasdas",
      isDone: true,
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
      createdAt: new Date(),
    },
    {
      id: "asasa",
      isDone: false,
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
      createdAt: new Date(),
    },
  ]);
  // temp variables
  const totalTasks = tasks.length;
  const totalDoneTasks = tasks.filter((task) => task.isDone).length;

  const handleDeleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  const handleToggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        totalDoneTasks,
        totalTasks,
        handleDeleteTask,
        handleToggleTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
