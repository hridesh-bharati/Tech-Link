import { useEffect, useRef } from "react";
import axios from "axios";

export default function usePageAnalytics(page) {
  const startTime = useRef(Date.now());

  useEffect(() => {
    if (!page) return;

    const key = `viewed_${page}`;

    if (!sessionStorage.getItem(key)) {
      axios.post("/api/analytics/view", { page });
      sessionStorage.setItem(key, "true");
    }

    return () => {
      const timeSpent = Math.floor((Date.now() - startTime.current) / 1000);
      if (timeSpent > 2) {
        axios.post("/api/analytics/time", {
          page,
          timeSpent,
        });
      }
    };
  }, [page]);
}
