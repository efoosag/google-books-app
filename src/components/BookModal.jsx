export default function BookModal({ book, onClose }) {
  const info = book.volumeInfo;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-sm sm:max-w-md
               max-h-[90vh] overflow-y-auto
               rounded-2xl bg-white shadow-xl
               dark:bg-gray-900"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center
                 rounded-full text-xl text-gray-600
                 hover:bg-gray-100 transition
                 dark:text-gray-300 dark:hover:bg-gray-800"
        >
          ×
        </button>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <img
            src={info.imageLinks?.thumbnail || "/no-book.png"}
            alt={info.title}
            className="mx-auto mb-4 w-32 sm:w-40 rounded-lg object-contain"
          />

          <h3 className="text-center text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {info.title}
          </h3>

          <p className="mt-1 text-center text-sm text-gray-500 dark:text-gray-400">
            {info.authors?.join(", ") || "Unknown Author"}
          </p>

          <p
            className="mt-4 text-sm leading-relaxed text-gray-700
                    dark:text-gray-300 line-clamp-6"
          >
            {info.description || "No description available."}
          </p>

          {info.infoLink && (
            <a
              href={info.infoLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 block rounded-xl bg-blue-600
                     py-2.5 text-center text-sm font-medium text-white
                     hover:bg-blue-700 transition"
            >
              View on Google Books
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
