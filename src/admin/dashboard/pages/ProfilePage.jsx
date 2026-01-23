import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { User, Mail, Shield, Calendar } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-3">My Profile</h2>

      <div className="card shadow-sm p-4" style={{ maxWidth: "500px" }}>
        <div className="text-center mb-4">
          <img
            src={user.avatar || user.photoURL || "/default-avatar.png"}
            alt="Profile"
            className="rounded-circle shadow"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <User size={18} />
          <strong>Name:</strong>
          <span>{user.name}</span>
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <Mail size={18} />
          <strong>Email:</strong>
          <span>{user.email}</span>
        </div>

        <div className="d-flex align-items-center gap-2 mb-3">
          <Shield size={18} />
          <strong>Role:</strong>
          <span>{user.role}</span>
        </div>

        <div className="d-flex align-items-center gap-2">
          <Calendar size={18} />
          <strong>UID:</strong>
          <span>{user.uid}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
