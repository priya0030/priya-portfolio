import "./Hero.css";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const githubUrl = "https://github.com/priya0030"; // replace with your GitHub URL

  const handleViewProjects = (e) => {
    // open GitHub in new tab when Ctrl/Cmd is pressed, otherwise scroll to #projects
    if (e.ctrlKey || e.metaKey) {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
      return;
    }
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.open(githubUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="hero">
      {/* Aurora Background */}
      <div className="aurora-bg"></div>

      {/* Main Content */}
      <div className="hero-main">
        {/* Left Side - Text */}
        <div className="hero-text">
          <h2>Hi, I’m Priya</h2>

          <h1>
            <Typewriter
              options={{
                strings: [
                  "Mobile App Developer 📱",
                  "Flutter Enthusiast 🚀",
                  "Android Specialist 💡",
                  "Data Science Explorer 🤖",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 40,
              }}
            />
          </h1>

          <p>Flutter • Android • Firebase • Machine Learning</p>

          <div className="cta-buttons">
            <button className="btn primary" onClick={handleViewProjects}>
              View Projects
            </button>

            <a
                className="btn secondary"
                href="/Priya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Resume
              </a>
          </div>
        </div>

        {/* Right Side - Profile */}
        <div className="hero-profile">
          <div className="profile-wrapper">
            <img src="/PP.png" alt="Priya" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
}
