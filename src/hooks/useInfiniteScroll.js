import { useEffect } from "react";

export default function useInfiniteScroll(callback, isLoading) {
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading) return;

      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200;

      if (nearBottom) callback();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, isLoading]);
}
