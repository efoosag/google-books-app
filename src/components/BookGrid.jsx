import BookCard from "./BookCard";

export default function BookGrid({ books, onSelect, onFavorite, isFavorite }) {
  if (!books.length) {
    return (
      <div className="mx-auto mt-16 max-w-md px-4 text-center">
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
          Search for books to get started 📖
        </p>
      </div>
    );
  }

  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        className="grid gap-4 sm:gap-5 md:gap-6
                 grid-cols-1
                 sm:grid-cols-1
                 md:grid-cols-3
                 lg:grid-cols-4"
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onSelect={onSelect}
            onFavorite={onFavorite}
            isFavorite={isFavorite(book.id)}
          />
        ))}
      </div>
    </section>
  );
}
