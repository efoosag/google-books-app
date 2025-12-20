const PAGE_SIZE = 16;
const MAX_PAGES = 5;

export const searchBooks = async (query, page = 0) => {
  // ⛔ Prevent fetching beyond page 5
  if (page >= MAX_PAGES) {
    return { items: [] };
  }

  const startIndex = page * PAGE_SIZE;

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
      query
    )}&startIndex=${startIndex}&maxResults=${PAGE_SIZE}`
  );

  return res.json();
};
