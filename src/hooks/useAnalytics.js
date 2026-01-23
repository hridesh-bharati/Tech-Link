// src/hooks/useAnalytics.js
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../utils/firebase/firebase";
import { useEffect, useState } from "react";

const useAnalytics = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const ref = doc(db, "analytics", "siteStats");

    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        setStats(snap.data());
      } else {
        console.warn("⚠️ Analytics document not found!");
      }
    });

    return () => unsub();
  }, []);

  return stats;
};

export default useAnalytics;
