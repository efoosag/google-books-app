import { useEffect, useState } from "react";
import { searchBooks } from "../api/googleBooks";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import BookGrid from "../components/BookGrid";
import BookModal from "../components/BookModal";
import Pagination from "../components/Pagination";
import ViewToggle from "../components/ViewToggle";
import useFavorites from "../hooks/useFavourites";
import useSearchState from "../hooks/useSearchState";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

export default function Home() {
  const [searchState, setSearchState] = useSearchState();
  const [query, setQuery] = useState(searchState.query);
  const [page, setPage] = useState(searchState.page);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("pagination");
  const [selected, setSelected] = useState(null);

  const { toggleFavorite, isFavorite } = useFavorites();

  const fetchBooks = async (q, p, append = false) => {
    setLoading(true);
    const data = await searchBooks(q, p);
    setBooks((prev) =>
      append ? [...prev, ...(data.items || [])] : data.items || []
    );
    setLoading(false);
    setSearchState({ query: q, page: p });
  };

  const handleSearch = () => {
    setPage(0);
    fetchBooks(query, 0);
  };

  const handlePageChange = (p) => {
    setPage(p);
    fetchBooks(query, p);
  };

  const MAX_PAGES = 5;

  const loadMore = () => {
    if (page + 1 >= MAX_PAGES) return;

    const next = page + 1;
    setPage(next);
    fetchBooks(query, next, true);
  };

  useInfiniteScroll(
    loadMore,
    loading || page + 1 >= MAX_PAGES || mode !== "infinite"
  );

  useEffect(() => {
    if (query) fetchBooks(query, page);
    // eslint-disable-next-line
  }, []);

  return (
    <main className="min-h-screen bg-blue-50 pt-20">
      {/* Page Container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <Navbar />

        <Hero />

        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

        <ViewToggle mode={mode} setMode={setMode} />

        <BookGrid
          books={books}
          onSelect={setSelected}
          onFavorite={toggleFavorite}
          isFavorite={isFavorite}
        />

       {/* Pagination */}
        {mode === "pagination" && books.length > 0 && (
          <div className="flex justify-center py-6">
            <Pagination
              page={page}
              totalPages={10}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <BookModal book={selected} onClose={() => setSelected(null)} />
      )}
    </main>
  );
}
