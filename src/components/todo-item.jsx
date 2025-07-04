import { useDispatch } from "react-redux";
import { handleComplete } from "../store/todoSlice";

export function TodoItem({ text, completed, date, id }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow ${
        completed ? "opacity-60" : ""
      }`}
    >
      {/* Checkbox */}
      <div className="flex-shrink-0">
        <input
          type="checkbox"
          checked={completed}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          onChange={() => {
            dispatch(handleComplete(id));
          }}
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-medium ${
            completed ? "line-through text-gray-500" : "text-gray-900"
          }`}
        >
          {text}
        </p>
        <p className="text-xs text-gray-400 mt-1">{date}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 flex-shrink-0">
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
