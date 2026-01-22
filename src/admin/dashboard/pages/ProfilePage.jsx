import React, { useEffect, useState } from "react";
import { auth, db } from "../../../utils/firebase/firebase";
import { doc, onSnapshot, updateDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged, deleteUser, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    let unsubSnap;

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      const docRef = doc(db, "users", user.uid);

      // Real-time listener for Firestore
      unsubSnap = onSnapshot(
        docRef,
        (snap) => {
          if (snap.exists()) {
            setUserData(snap.data());
          } else {
            toast.error("Profile not found");
          }
          setLoading(false);
        },
        (err) => {
          toast.error(err.message);
          setLoading(false);
        }
      );
    });

    return () => {
      unsubAuth();
      if (unsubSnap) unsubSnap();
    };
  }, [navigate]);

  // 🔹 UPDATE PROFILE
  const handleUpdate = async () => {
    if (!userData.name.trim()) {
      toast.error("Name is required");
      return;
    }

    try {
      setSaving(true);
      const user = auth.currentUser;

      // Optimistically update local state (UI updates immediately)
      setUserData((prev) => ({ ...prev, name: userData.name }));

      // Update Firebase Auth
      await updateProfile(user, { displayName: userData.name });

      // Update Firestore
      await updateDoc(doc(db, "users", user.uid), { name: userData.name });

      toast.success("Profile updated ✅");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSaving(false);
    }
  };

  // 🔹 DELETE PROFILE
  const handleDelete = async () => {
    const confirm = window.confirm(
      "Are you sure? This will permanently delete your account."
    );
    if (!confirm) return;

    try {
      const user = auth.currentUser;

      // Delete Firestore data
      await deleteDoc(doc(db, "users", user.uid));

      // Delete Auth user
      await deleteUser(user);

      toast.success("Account deleted 🗑️");
      navigate("/signup");
    } catch (err) {
      toast.error("Re-login required to delete account");
    }
  };

  if (loading) return <p>Loading profile...</p>;

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>My Profile</h2>

      <label>Name</label>
      <input
        value={userData.name}
        onChange={(e) =>
          setUserData({ ...userData, name: e.target.value })
        }
      />

      <label>Email (readonly)</label>
      <input value={userData.email} disabled />

      <label>Role</label>
      <input value={userData.role} disabled />

      <button onClick={handleUpdate} disabled={saving}>
        {saving ? "Saving..." : "Update Profile"}
      </button>

      <hr />

      <button
        onClick={handleDelete}
        style={{ background: "red", color: "white" }}
      >
        Delete Account
      </button>
    </div>
  );
};

export default Profile;
