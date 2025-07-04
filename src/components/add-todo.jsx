"use client";

import { useState } from "react";
import { addTodo } from "../store/todoSlice";

import { useDispatch } from "react-redux";

export function AddTodo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  return (
    <form
      className="flex gap-3 mb-6"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
      }}
    >
      <input
        type="text"
        placeholder="Thêm công việc mới..."
        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </form>
  );
}
