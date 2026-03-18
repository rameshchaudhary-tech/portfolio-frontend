import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./css/Dashboard.css";

export default function Dashboard() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/projects");
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Panel</h2>

        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/projects">Projects</Link>
        <Link to="/admin/add-project">Add Project</Link>
      </div>

      {/* Main */}
      <div className="main-content">
        <h1>Admin Dashboard</h1>

        <div className="card-container">

          <div className="card">
            <h3>Total Projects</h3>
            <p>{projects.length}</p>
          </div>

          <div className="card">
            <h3>Total Users</h3>
            <p>0</p>
          </div>

          <div className="card">
            <h3>Messages</h3>
            <p>0</p>
          </div>

        </div>

      </div>

    </div>
  );
}