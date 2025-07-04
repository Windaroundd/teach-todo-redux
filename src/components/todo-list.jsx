"use client";

import { useSelector } from "react-redux";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
          date={todo.date}
          id={todo.id}
        />
      ))}
    </div>
  );
}
