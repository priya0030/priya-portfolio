import React, { useEffect, useState } from "react";
import { skills, techLogos } from "../data";
import "./Skills.css";

export default function SkillsSection() {
  const [floatingLogos, setFloatingLogos] = useState([]);

  useEffect(() => {
    // Pick some logos to float in background
    const selected = techLogos.slice(0, 20).map((logo, index) => ({
      ...logo,
      id: index,
      top: Math.random() * 90, // random Y
      left: Math.random() * 90, // random X
      delay: Math.random() * 6,
      duration: 12 + Math.random() * 8
    }));
    setFloatingLogos(selected);
  }, []);

  return (
    <section className="skills-section" id="skills">
      {/* Floating logos in background */}
      <div className="floating-logos">
        {floatingLogos.map((logo) => (
          <img
            key={logo.id}
            src={logo.logo}
            alt={logo.name}
            className="floating-logo"
            style={{
              top: `${logo.top}%`,
              left: `${logo.left}%`,
              animationDuration: `${logo.duration}s`,
              animationDelay: `${logo.delay}s`
            }}
          />
        ))}
      </div>

      {/* Skills content */}
      <div className="skills-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skill-card" key={category}>
              <h3 className="skill-category">{category}</h3>
              <ul className="skill-list">
                {items.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
