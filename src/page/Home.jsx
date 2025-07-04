import React from "react";
import { AddTodo } from "../components/add-todo";
import { ProgressBar } from "../components/progress-bar";
import { TodoFilter } from "../components/todo-filter";
import { TodoList } from "../components/todo-list";
import { TodoStats } from "../components/todo-stats";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
        <div className="max-w-3xl mx-auto px-4">
          {/* Main Container */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                TodoList
              </h1>
              <p className="text-gray-600">
                Quản lý công việc hiệu quả với ReactJS + TailwindCSS
              </p>
            </div>

            {/* Stats Cards */}
            <TodoStats />

            {/* Progress Bar */}
            <ProgressBar />

            {/* Add Todo Form */}
            <AddTodo />

            {/* Filter Buttons */}
            <TodoFilter />

            {/* Todo List */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Danh sách công việc
              </h2>
              <TodoList />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">
                ReactJS + TailwindCSS thuần túy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
