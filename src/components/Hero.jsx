import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      {/* Left Side - Text */}
      <div className="hero-text">
        <h2>Hi, I’m Priya</h2>
        <h1>Mobile App Developer</h1>
        <p>Flutter • Android • Firebase • Machine Learning</p>

        <div className="cta-buttons">
          <button className="btn primary">View Projects</button>
          <button className="btn secondary">Download Resume</button>
        </div>
      </div>

      {/* Right Side - Profile + Rings */}
      <div className="hero-profile">
        <div className="profile-wrapper">
          <div className="ring ring1"></div>
          <div className="ring ring2"></div>
          <div className="ring ring3"></div>
          <img src="/profile.jpg" alt="Priya" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}
