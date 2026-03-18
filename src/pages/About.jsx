import React, { useEffect, useState } from 'react';
import './css/About.css';

const About = () => {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       fetch('https://portfolio-backend-paud.onrender.com/api/about')
            .then(res => res.json())
            .then(data => {
                setAbout(data);
                setLoading(false);
            })
            .catch(err => {
                console.log("About API Error:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <h2 style={{ padding: "40px", color: "#fff", textAlign: "center" }}>Loading System...</h2>;
    if (!about) return <h2 style={{ padding: "40px", color: "#fff", textAlign: "center" }}>No About Data Found</h2>;

    return (
        <section className="about-detailed">
            <div className="about-grid-bg"></div>
            <div className="container">

                <div className="about-grid">
                    <div className="identity-block">
                        <span className="tag-line">{about.tagline || "// ABOUT_ME"}</span>
                        <h2 className="section-title">
                            {about.title} <span className="blue-text">{about.subtitle}</span>
                        </h2>
                        <p className="bio-text">{about.bio}</p>

                        <div className="education-module">
                            <h4>EDUCATION_HISTORY</h4>
                            {about.education?.map((edu, idx) => (
                                <div key={idx} className="edu-item">
                                    <span className="year">{edu.year}</span>
                                    <div className="edu-info">
                                        <p className="inst">{edu.institution}</p>
                                        <p className="degree">{edu.degree}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="specs-block">
                        <div className="glass-panel">
                            <h3 className="panel-title">TECHNICAL_SPECS</h3>
                            {about.technicalSpecs && Object.entries(about.technicalSpecs).map(([key, value]) => (
                                <div key={key} className="spec-row">
                                    <span className="spec-key">{key}:</span> 
                                    <span className={`spec-val ${value === 'Online' || value === 'Active' ? 'status-online' : ''}`}>
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="creative-modules">
                    <h3 className="module-title">// CORE_DEVELOPMENT_UNITS</h3>
                    <div className="modules-grid">
                        {about.modules?.map((mod, idx) => (
                            <div key={idx} className="module-card">
                                <div className="module-header">
                                    <span className="icon">{mod.icon}</span>
                                    <h4>{mod.title}</h4>
                                </div>
                                <p>{mod.description}</p>
                                <span className="model-no">{mod.modelNo}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="secondary-interests">
                    {about.interests?.map((int, idx) => (
                        <div key={idx} className="interest-pill">{int}</div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;