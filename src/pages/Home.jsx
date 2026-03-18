import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

const Home = () => {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-backend-paud.onrender.com/api/hero")
      .then((res) => res.json())
      .then((data) => {
        // Handle API structure securely
        setHero(data.data ? data.data : data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ padding: "40px", color: "#fff" }}>Loading...</h2>;
  if (!hero) return <h2 style={{ padding: "40px", color: "#fff" }}>No Data Found</h2>;

  return (
    <div className="home-container">
      {/* Background Glow */}
      <div className="glow-circle top-right"></div>
      <div className="glow-circle bottom-left"></div>

      <section className="hero-section">
        <div className="hero-content">
          {/* New Green Glowing Badge */}
          <span className="welcome-badge">
            {hero.availabilityStatus || "Open to Opportunities"}
          </span>
          
          <h1 className="hero-title">
            Hi, I'm <span className="name-gradient">{hero.name}</span>
            <br />
            <span className="typewriter">{hero.role}</span>
          </h1>
          
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <Link to="/projects" className="primary-btn">
              View My Work
            </Link>
            <Link to="/contact" className="secondary-btn">
              Let's Talk
            </Link>

            {/* Resume Download */}
            <a
              href={`http://localhost:5000/resume/${encodeURIComponent("Ramesh_Chaudhary.pdf")}`}
              download
              className="secondary-btn resume-btn"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        {/* Visual Side with Glass Card */}
        <div className="hero-visual">
          <div className="hero-card-wrapper">
            <div className="glass-card-hero">
              <div className="code-snippet">
                <p><code>{hero.codeSnippet?.dev || "const developer = 'Ramesh';"}</code></p>
                <p><code>{hero.codeSnippet?.status || "Currently crafting innovative solutions 🚀"}</code></p>
              </div>
            </div>

            {/* Floating Skills Badges */}
            {hero.floatingSkills?.map((skill, index) => (
              <div key={index} className={`floating-badge badge-${index}`}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;