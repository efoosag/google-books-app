import { useEffect, useState } from "react";

export default function useSearchState() {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem("searchState")) || {
      query: "",
      page: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("searchState", JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
