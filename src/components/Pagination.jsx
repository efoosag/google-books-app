const MAX_PAGES = 5;

export default function Pagination({ page, onPageChange }) {
  const pages = Array.from({ length: MAX_PAGES }, (_, i) => i);

  return (
    <div className="flex justify-center gap-2 my-10 flex-wrap">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          disabled={p === page}
          className={`px-4 py-2 rounded-lg border
            ${
              p === page
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
        >
          {p + 1}
        </button>
      ))}
    </div>
  );
}
