import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

import { auth, db } from "../../../utils/firebase/firebase";
import { uploadToCloudinary } from "../../../utils/uploadToCloudinary";
import { useAuth } from "../../../contexts/AuthContext";
import "./ProfileEdit.css";

const ProfileEdit = () => {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return toast.error("User not logged in");

    setLoading(true);
    try {
      let avatarUrl = user?.avatar || user?.photoURL || null;

      if (image) {
        avatarUrl = await uploadToCloudinary(image);
      }

      // Update Firebase Auth
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatarUrl,
      });

      // Update Firestore
      await setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          name,
          avatar: avatarUrl,
          updatedAt: new Date(),
        },
        { merge: true }
      );

      // Update context immediately
      setUser({
        ...user,
        name,
        avatar: avatarUrl,
        photoURL: avatarUrl,
      });

      toast.success("Profile updated 🔥");
    } catch (err) {
      console.error(err);
      toast.error("Update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container profile-wrapper">
      <div className="card profile-card shadow-sm">
        <div className="card-body">
          <h4 className="mb-4 text-center">Edit Profile</h4>

          <form onSubmit={handleUpdate}>
            {/* Avatar */}
            <div className="text-center mb-4">
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : user?.avatar || user?.photoURL || "https://via.placeholder.com/120"
                }
                alt="avatar"
                className="profile-avatar mb-2"
              />

              <label className="btn btn-outline-primary btn-sm">
                Change Photo
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={loading}
            >
              {loading ? "Saving..." : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
