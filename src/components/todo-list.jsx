"use client";

import { TodoItem } from "./todo-item";

const mockTodos = [
  {
    id: "1",
    text: "Học ReactJS cơ bản",
    completed: true,
    date: "15/12/2024",
  },
  {
    id: "2",
    text: "Thực hành TailwindCSS",
    completed: false,
    date: "16/12/2024",
  },
  {
    id: "3",
    text: "Xây dựng TodoList UI",
    completed: false,
    date: "17/12/2024",
  },
  {
    id: "4",
    text: "Học TypeScript",
    completed: true,
    date: "18/12/2024",
  },
  {
    id: "5",
    text: "Deploy ứng dụng lên Vercel",
    completed: false,
    date: "19/12/2024",
  },
];

export function TodoList() {
  return (
    <div className="space-y-3">
      {mockTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          date={todo.date}
        />
      ))}
    </div>
  );
}
