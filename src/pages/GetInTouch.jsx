import React, { useState } from 'react';
import './css/GetInTouch.css';

const GetInTouch = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {

        alert("✅ Email sent successfully!");

        setFormData({
          name: '',
          email: '',
          message: ''
        });

      } else {

        alert("❌ Failed to send message");

      }

    } catch (error) {

      console.error("Error sending message:", error);
      alert("⚠️ Server error. Please try again.");

    }
  };

  return (
    <div className="contact-section">

      <div className="contact-header">
        <h2>Get In Touch</h2>
        <p>
          I'm currently looking for new opportunities to build scalable web applications.
          Whether you have a project idea, want to discuss React, or just want to chat about the latest cricket match, my inbox is always open!
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">

          <h3>Contact Information</h3>
          <p>Feel free to reach out through the form or directly via email.</p>

          <div className="info-item">
            <span className="icon">📍</span>
            <span>Ahmedabad, Gujarat</span>
          </div>

          <div className="info-item">
            <span className="icon">✉️</span>
            <span>rameshchaudhary2254@gmail.com</span>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn">LinkedIn</a>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">

          <form onSubmit={handleSubmit} className="contact-form">

            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we work together?"
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default GetInTouch;