import { useEffect, useState } from "react";
import axios from "axios";
import "./css/ProjectsAdmin.css";

export default function ProjectsAdmin() {
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

  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);

      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>

      {projects.map((p) => (
        <div key={p._id} className="project-card">
          <h3>{p.title}</h3>

          <button
            className="delete-btn"
            onClick={() => deleteProject(p._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}