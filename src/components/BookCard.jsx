export default function BookCard({
  book,
  onSelect,
  onFavorite,
  isFavorite,
}) {
  const info = book.volumeInfo;

  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
      <img
        src={info.imageLinks?.thumbnail || "/no-book.png"}
        className="h-48 w-full object-cover rounded-t-2xl"
      />

      <div className="flex flex-col grow p-3">
        <h3 className="font-semibold text-sm line-clamp-2 dark:text-white">
          {info.title}
        </h3>

        <p className="flex grow text-xs text-gray-500">
          {info.authors?.[0] || "Unknown Author"}
        </p>

        <div className="flex justify-between items-center mt-3">
          <button
            onClick={() => onSelect(book)}
            className="text-blue-600 text-sm"
          >
            View
          </button>

          <button onClick={() => onFavorite(book)}>
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
