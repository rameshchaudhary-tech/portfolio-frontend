import React, { useEffect, useState } from 'react';
import './css/Projects.css';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.log(err));

  }, []);

  return (
    <div className="projects-page">
      <div className="container">

        <header className="page-header">
          <span className="subtitle">Selected Work</span>
          <h1 className="title">
            Featured <span className="accent">Projects</span>
          </h1>
        </header>

        <div className="projects-list">
          {projects.map((proj) => (

            <div className="project-item" key={proj._id}>
              <div className="project-number">{proj.id}</div>

              <div className="project-info">
                <span className="project-cat">{proj.category}</span>

                <h2 className="project-title">
                  {proj.title}
                </h2>

                <p className="project-desc">
                  {proj.description}
                </p>

                <div className="project-tags">
                  {proj.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-link">
                <a href={proj.link} className="view-link">
                  View Project ↗
                </a>
              </div>

            </div>

          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;