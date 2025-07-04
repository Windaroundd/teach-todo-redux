export function TodoStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-xl text-white text-center">
        <div className="text-3xl font-bold mb-1">5</div>
        <div className="text-blue-100 text-sm">Tổng số công việc</div>
      </div>
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-xl text-white text-center">
        <div className="text-3xl font-bold mb-1">3</div>
        <div className="text-yellow-100 text-sm">Chưa hoàn thành</div>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-green-500 p-6 rounded-xl text-white text-center">
        <div className="text-3xl font-bold mb-1">2</div>
        <div className="text-green-100 text-sm">Đã hoàn thành</div>
      </div>
    </div>
  );
}
