export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="mx-auto mt-6 w-full max-w-3xl px-4 sm:px-0">
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books..."
          className="w-full flex-1 rounded-xl border border-gray-300
                 px-4 py-3 text-base
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />

        <button
          onClick={onSearch}
          className="w-full sm:w-auto rounded-xl bg-blue-600
                 px-6 py-3 text-base font-medium text-white
                 hover:bg-blue-700 transition
                 active:scale-[0.98]"
        >
          Search
        </button>
      </div>
    </div>
  );
}
