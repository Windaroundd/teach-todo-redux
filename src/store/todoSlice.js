import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("action: ", action);
      console.log("state: ", state);
      const newtodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
        date: new Date().toLocaleDateString(),
      };
      state.todos.push(newtodo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    handleComplete: (state, action) => {
      console.log("state: ", state);
      console.log("action: ", action);
      const todo = state.todos.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, handleComplete } = todoSlice.actions;
export default todoSlice.reducer;
