import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./css/AdminLogin.css";


export default function AdminLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        { email, password }
      );

      localStorage.setItem("token", res.data.token);

      alert("Login Success ✅");
      navigate("/admin/dashboard");

    } catch (err) {
      alert("Invalid Email or Password ❌",err);
    }
  };

  return (
  <div className="admin-container">
    <div className="admin-card">
      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have account? <Link to="/admin/register">Register</Link>
      </p>
    </div>
  </div>
);
}