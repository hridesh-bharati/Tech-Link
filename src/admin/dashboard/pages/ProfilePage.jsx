import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, Globe, Edit, Camera, Home } from "lucide-react";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    location: "",
    website: "",
    bio: ""
  });
  const [imageFile, setImageFile] = useState(null);

  // Initialize profile from user data
  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "",
        phone: user.phone || "",
        location: user.location || "",
        website: user.website || "",
        bio: user.bio || ""
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Image must be less than 2MB");
      return;
    }

    setImageFile(file);
    toast.success("Image selected for upload");
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", profile.name);
      formData.append("phone", profile.phone);
      formData.append("location", profile.location);
      formData.append("website", profile.website);
      formData.append("bio", profile.bio);
      if (imageFile) {
        formData.append("avatar", imageFile);
      }

      // API call
      // const response = await API.put("/auth/profile", formData);
      
      toast.success("Profile updated successfully");
      setEditMode(false);
      setImageFile(null);
      
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  if (!user) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          
          {/* Header with Actions */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button 
              className="btn btn-outline-primary btn-sm"
              onClick={() => navigate("/dashboard")}
            >
              <Home size={16} className="me-2" />
              Back to Dashboard
            </button>
            
            <div>
              {!editMode ? (
                <button 
                  className="btn btn-primary"
                  onClick={() => setEditMode(true)}
                >
                  <Edit size={16} className="me-2" />
                  Edit Profile
                </button>
              ) : (
                <div className="d-flex gap-2">
                  <button 
                    className="btn btn-success"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setEditMode(false);
                      setProfile({
                        name: user.name || "",
                        phone: user.phone || "",
                        location: user.location || "",
                        website: user.website || "",
                        bio: user.bio || ""
                      });
                      setImageFile(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Profile Card */}
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body p-4">
              
              {/* Avatar & Basic Info */}
              <div className="d-flex flex-column flex-md-row align-items-center gap-4 mb-4">
                <div className="position-relative">
                  <div 
                    className="rounded-circle overflow-hidden border border-3 border-primary"
                    style={{ width: "100px", height: "100px" }}
                  >
                    {user.avatar ? (
                      <img 
                        src={user.avatar} 
                        alt="Profile" 
                        className="w-100 h-100 object-fit-cover"
                      />
                    ) : (
                      <div className="w-100 h-100 bg-primary d-flex align-items-center justify-content-center text-white">
                        <User size={40} />
                      </div>
                    )}
                  </div>
                  
                  {editMode && (
                    <label className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-2 cursor-pointer">
                      <Camera size={14} />
                      <input 
                        type="file" 
                        className="d-none" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  )}
                </div>
                
                <div className="text-center text-md-start">
                  <h3 className="mb-1">{user.name}</h3>
                  <p className="text-muted mb-2">
                    <Mail size={14} className="me-2" />
                    {user.email}
                  </p>
                  <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                    <span className="badge bg-primary">Admin</span>
                    <span className="badge bg-success">Verified</span>
                    <span className="badge bg-info">Active</span>
                  </div>
                </div>
              </div>

              {/* Profile Details Grid */}
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <User size={16} className="me-2" />
                    Full Name
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  ) : (
                    <div className="form-control-plaintext px-0">{user.name}</div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <Phone size={16} className="me-2" />
                    Phone Number
                  </label>
                  {editMode ? (
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={profile.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                    />
                  ) : (
                    <div className="form-control-plaintext px-0">
                      {user.phone || "Not provided"}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <MapPin size={16} className="me-2" />
                    Location
                  </label>
                  {editMode ? (
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      value={profile.location}
                      onChange={handleChange}
                      placeholder="City, Country"
                    />
                  ) : (
                    <div className="form-control-plaintext px-0">
                      {user.location || "Not provided"}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">
                    <Globe size={16} className="me-2" />
                    Website
                  </label>
                  {editMode ? (
                    <input
                      type="url"
                      name="website"
                      className="form-control"
                      value={profile.website}
                      onChange={handleChange}
                      placeholder="https://example.com"
                    />
                  ) : (
                    <div className="form-control-plaintext px-0">
                      {user.website || "Not provided"}
                    </div>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold">
                    Bio
                  </label>
                  {editMode ? (
                    <textarea
                      name="bio"
                      className="form-control"
                      rows="3"
                      value={profile.bio}
                      onChange={handleChange}
                      placeholder="Tell something about yourself..."
                    />
                  ) : (
                    <div className="form-control-plaintext px-0">
                      {user.bio || "No bio added yet"}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

       
          {/* Last Updated */}
          <div className="text-center mt-4 text-muted small">
            <i>Last updated: {new Date().toLocaleDateString()}</i>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;