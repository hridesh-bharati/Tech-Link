import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Mail, Lock, Camera, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

import "../auth/auth-base.css";

const AuthSignup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!name || !email || !password) return toast.error("All fields are required");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (image) formData.append("profileImage", image);

    setLoading(true);
    try {
      await signup(formData);
      toast.success("Account created 🎉");
      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <button className="btn-back-circle" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} />
      </button>

      <div className="auth-avatar-wrapper">
        <div className="avatar-preview">
           {image ? <img src={URL.createObjectURL(image)} alt="avatar" /> : <User size={32} />}
        </div>
        <label className="avatar-upload-icon">
          <Camera size={16} />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (!file) return;
              if (file.size > 1024 * 1024) return toast.error("Image must be under 1MB");
              setImage(file);
            }}
          />
        </label>
      </div>

      <form className="auth-card signup-layout" onSubmit={handleSubmit}>
        <div className="auth-input-group">
          <User size={18} />
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="auth-input-group">
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="auth-input-group">
          <Lock size={18} />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
          <span className="toggle-password" onClick={() => setShow(!show)}>
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        <button className="btn-auth-submit" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <p className="auth-footer-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default AuthSignup;