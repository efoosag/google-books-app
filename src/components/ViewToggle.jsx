export default function ViewToggle({ mode, setMode }) {
  return (
    <div className="mx-auto mt-6 flex w-full max-w-xs sm:max-w-sm justify-center px-4">
      <div className="flex gap-2 rounded-xl border bg-white p-1 dark:border-gray-700 dark:bg-gray-900">
        <button
          onClick={() => setMode("pagination")}
          className={`flex-1 rounded-lg px-4 py-2 text-sm sm:text-base font-medium
        transition
        ${
          mode === "pagination"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        }`}
        >
          Pages
        </button>

        <button
          onClick={() => setMode("infinite")}
          className={`flex-1 rounded-lg px-4 py-2 text-sm sm:text-base font-medium
        transition
        ${
          mode === "infinite"
            ? "bg-blue-600 text-white shadow"
            : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        }`}
        >
          Infinite
        </button>
      </div>
    </div>
  );
}
