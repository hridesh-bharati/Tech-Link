// src/utils/analytics.js
import { doc, setDoc, updateDoc, getDoc, increment, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase/firebase";

export const trackUserVisit = async (userId) => {
  if (!userId) return;

  const sessionKey = `visited_${userId}`;
  if (sessionStorage.getItem(sessionKey)) return;
  sessionStorage.setItem(sessionKey, "true");

  const ref = doc(db, "analytics", "siteStats");
  const snap = await getDoc(ref);
  const today = new Date().toISOString().split("T")[0];

  if (!snap.exists()) {
    await setDoc(ref, {
      totalUsers: 1,
      activeUsers: 1,
      dailyVisits: { [today]: 1 },
      lastActive: { [userId]: serverTimestamp() },
      createdAt: serverTimestamp(),
      devices: {},
      countries: {}
    });
  } else {
    await updateDoc(ref, {
      totalUsers: increment(1),
      activeUsers: increment(1),
      [`dailyVisits.${today}`]: increment(1),
      [`lastActive.${userId}`]: serverTimestamp()
    });
  }
};

export const removeInactiveUsers = async (timeoutMinutes = 10) => {
  const ref = doc(db, "analytics", "siteStats");
  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const data = snap.data();
  const now = Date.now();
  const lastActive = { ...(data.lastActive || {}) };
  let active = 0;

  Object.keys(lastActive).forEach((uid) => {
    const t = lastActive[uid]?.toMillis?.() || 0;
    if (now - t < timeoutMinutes * 60 * 1000) active++;
    else delete lastActive[uid];
  });

  await updateDoc(ref, {
    activeUsers: active,
    lastActive
  });
};
