export function TodoFilter() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
          Tất cả (5)
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Chưa hoàn thành (3)
        </button>
        <button className="px-4 py-2 bg-white text-gray-700 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          Đã hoàn thành (2)
        </button>
      </div>

      <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors">
        Xóa đã hoàn thành
      </button>
    </div>
  );
}
