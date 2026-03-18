import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css/AdminRegister.css";

export default function AdminRegister() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/admin/register",
        { email, password }
      );

      alert("Admin Registered Successfully ✅");

    } catch (err) {
      alert(err.response?.data?.message || "Register Failed ❌");
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>Admin Register</h2>

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

        <button onClick={handleRegister}>Register</button>

        <p>
          Already have account? <Link to="/admin">Login</Link>
        </p>
      </div>
    </div>
  );
}