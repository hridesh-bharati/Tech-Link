import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { User, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

import { auth, db } from "../../utils/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import "../auth/auth-base.css";

const AuthSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(user, { displayName: name });

      // Firestore (background – no wait)
      setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        role: "admin",
        createdAt: new Date(),
      }).catch(console.error);

      toast.success("Account created 🎉");
      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <button className="btn-back-circle" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} />
      </button>

      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-input-group">
          <User size={18} />
          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="auth-input-group">
          <Mail size={18} />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
          />
          <span onClick={() => setShow(!show)} style={{ cursor: "pointer" }}>
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        <button className="btn-auth-submit" disabled={loading}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p className="auth-footer-text">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default AuthSignup;
