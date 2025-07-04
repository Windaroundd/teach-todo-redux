export function ProgressBar() {
  const completed = 2;
  const total = 5;
  const percentage = (completed / total) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Tiến độ hoàn thành
        </span>
        <span className="text-sm text-gray-500">
          {completed}/{total}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-gradient-to-r from-green-400 to-green-500 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-right mt-1">
        <span className="text-xs text-gray-500">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
}
