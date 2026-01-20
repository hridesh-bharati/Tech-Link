import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

import "../auth/auth-base.css";

const AuthLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Welcome back 🚀");
      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <button type="button" className="btn-back-circle" onClick={() => navigate(-1)}>
        <ArrowLeft size={20} />
      </button>

      <form className="auth-card login-layout" onSubmit={handleSubmit}>
        {/* Title and Subtitle CSS se handle ho raha hai pseudo elements ke through */}
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="auth-footer-text">
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default AuthLogin;