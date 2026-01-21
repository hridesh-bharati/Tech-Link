import React, { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase/firebase";
import { uploadToCloudinary } from "../../../utils/uploadToCloudinary";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user, setUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    location: "",
    website: "",
    bio: "",
    photoURL: "",
  });

  // Load profile from Firestore
  useEffect(() => {
    if (!user?.uid) return;

    const loadProfile = async () => {
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        if (snap.exists()) {
          setProfile({ ...snap.data(), photoURL: user.photoURL || snap.data().photoURL });
        } else {
          setProfile({ ...profile, photoURL: user.photoURL || "/avatar.png" });
        }
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };

    loadProfile();
  }, [user]);

  // Preview selected image before upload
  useEffect(() => {
    if (!imageFile) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, photoURL: reader.result }));
    };
    reader.readAsDataURL(imageFile);
  }, [imageFile]);

  const handleChange = (e) =>
    setProfile({ ...profile, [e.target.name]: e.target.value });

const handleSave = async () => {
  if (!profile.name.trim()) {
    toast.error("Name is required");
    return;
  }

  setLoading(true);
  try {
    let photoURL = profile.photoURL;

    // Upload to Cloudinary if a new image is selected
    if (imageFile) {
      photoURL = await uploadToCloudinary(imageFile);
    }

    // Build the updated profile object correctly
    const updatedProfile = {
      name: profile.name || "",
      phone: profile.phone || "",
      location: profile.location || "",
      website: profile.website || "",
      bio: profile.bio || "",
      photoURL: photoURL || "",
      email: user.email,
      uid: user.uid,
      updatedAt: new Date(),
    };

    console.log("Saving to Firestore:", updatedProfile); // Debug

    // Save to Firestore
    await setDoc(doc(db, "users", user.uid), updatedProfile, { merge: true });

    // Update AuthContext
    setUser({ ...user, name: profile.name, photoURL });

    toast.success("Profile updated successfully!");
    setEditMode(false);
    setImageFile(null);
  } catch (err) {
    console.error("Error saving profile:", err);
    toast.error("Profile update failed!");
  } finally {
    setLoading(false);
  }
};

  if (!user) return null;

  return (
    <div className="container py-4">
      <div className="card p-4 shadow">
        {/* Header */}
        <div className="d-flex justify-content-between mb-3">
          <h4>Profile</h4>
          {!editMode ? (
            <button
              className="btn btn-primary"
              onClick={() => setEditMode(true)}
            >
              Edit
            </button>
          ) : (
            <button
              className="btn btn-success"
              onClick={handleSave}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          )}
        </div>

        {/* Avatar */}
        <div className="text-center mb-4 position-relative">
          <img
            src={profile.photoURL || "/avatar.png"}
            alt="avatar"
            className="rounded-circle"
            style={{ width: 120, height: 120, objectFit: "cover" }}
          />
          {editMode && (
            <label className="btn btn-sm btn-dark position-absolute bottom-0 start-50 translate-middle-x">
              Change
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files[0])}
              />
            </label>
          )}
        </div>

        {/* Profile Form */}
        <div className="row g-3">
          <div className="col-md-6">
            <label>Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              disabled={!editMode}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label>Email</label>
            <input value={user.email} disabled className="form-control" />
          </div>

          <div className="col-md-6">
            <label>Phone</label>
            <input
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!editMode}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label>Location</label>
            <input
              name="location"
              value={profile.location}
              onChange={handleChange}
              disabled={!editMode}
              className="form-control"
            />
          </div>

          <div className="col-md-6">
            <label>Website</label>
            <input
              name="website"
              value={profile.website}
              onChange={handleChange}
              disabled={!editMode}
              className="form-control"
            />
          </div>

          <div className="col-12">
            <label>Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              disabled={!editMode}
              className="form-control"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
