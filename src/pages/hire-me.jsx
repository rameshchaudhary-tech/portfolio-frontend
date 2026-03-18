import React, { useEffect, useState } from 'react';
import './css/HireMe.css';
import { Link } from 'react-router-dom';

const HireMe = () => {
  const [hireData, setHireData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/hire")
      .then(res => res.json())
      .then(data => {
        setHireData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("HireMe API Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ padding: "100px 20px", color: "#fff", textAlign: "center", backgroundColor: "#030712", minHeight: "100vh" }}>Loading Connection...</h2>;
  if (!hireData) return <h2 style={{ padding: "100px 20px", color: "#fff", textAlign: "center", backgroundColor: "#030712", minHeight: "100vh" }}>No Data Found</h2>;

  return (
    <div className="hire-me-container">
      <div className="content-wrapper">

        {/* Header Section */}
        <section className="header-section">
          <span className="tagline">// LET'S_WORK_TOGETHER</span>
          <h1 className="main-title">{hireData.title}</h1>
          <p className="subtitle">
            {hireData.subtitle}
          </p>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">Technical Arsenal</h2>
          <div className="skills-container">
            {hireData.skills?.map((skill, index) => (
              <span key={index} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* What I Do Section */}
        <section className="projects-section">
          <h2 className="section-title">What I Do</h2>
          <ul className="action-list">
            {hireData.actions?.map((action, index) => (
              <li key={index} className="action-item">
                <span className="bullet-icon">▹</span>
                <span className="action-text">{action}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Call to Action Box (Glassmorphism) */}
        <section className="cta-section">
          <h3 className="cta-title">Ready to collaborate?</h3>
          <p className="cta-text">
            Whether you have a project idea, a role to fill, or just want to discuss tech, my inbox is always open.
          </p>
          <Link to="/contact" className="cta-button">
            Get In Touch <span>→</span>
          </Link>
        </section>

      </div>
    </div>
  );
};

export default HireMe;