import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Footer.css';

const Footer = () => {

  const [footer, setFooter] = useState(null);

  const currentYear = new Date().getFullYear();

  useEffect(() => {

    fetch("http://localhost:5000/api/footer")
      .then(res => res.json())
      .then(data => setFooter(data));

  }, []);

  if (!footer) return null;

  return (
    <footer className="stark-footer">

      <div className="footer-top-line"></div>

      <div className="footer-container">

        <div className="footer-brand">
          <h3 className="footer-logo">{footer.logo}<span className="dot">.</span>DEV</h3>
          <p className="footer-tagline">{footer.tagline}</p>

          <div className="system-status">
            <span className="pulse-dot"></span> SYSTEM_STABLE_v4.0
          </div>
        </div>


        <div className="footer-links">

          <div className="link-group">
            <span className="group-title">NAVIGATION</span>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>

          <div className="link-group">
            <span className="group-title">CONNECT</span>

            <a href={footer.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={footer.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={footer.twitter} target="_blank" rel="noreferrer">X (Twitter)</a>

          </div>

        </div>


        <div className="footer-info">

          <span className="group-title">LOCATION</span>

          <p>{footer.location}</p>

          <p className="coordinates">{footer.coordinates}</p>

         
            {/* Resume Download */}
           <a
  href={`http://localhost:5000/resume/${encodeURIComponent(
    "Ramesh_Chaudhary.pdf"
  )}`}
  download
  className="secondary-btn resume-btn"
>
  Download CV ↓
</a>

        </div>

      </div>


      <div className="footer-bottom">

        <div className="copyright">
          © {currentYear} ALL_RIGHTS_RESERVED
        </div>

        <div
          className="scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK_TO_TOP ↑
        </div>

      </div>

    </footer>
  );
};

export default Footer;