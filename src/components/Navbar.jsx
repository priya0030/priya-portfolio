import { useState, useEffect } from "react";
import { nav, profile } from "../data";
console.log("Nav data:", nav);
console.log("Profile data:", profile);

import { User, GraduationCap, Briefcase, Code, FolderGit2, Award, Mail, FileText } from "lucide-react";

const iconMap = {
  about: <User size={20} strokeWidth={1.7} />,
  education: <GraduationCap size={20} strokeWidth={1.7} />,
  experience: <Briefcase size={20} strokeWidth={1.7} />,
  skills: <Code size={20} strokeWidth={1.7} />,
  projects: <FolderGit2 size={20} strokeWidth={1.7} />,
  certifications: <Award size={20} strokeWidth={1.7} />,
  contact: <Mail size={20} strokeWidth={1.7} />,
  resume: <FileText size={20} strokeWidth={1.7} />,
};

export default function Navbar({ onToggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleScrollTo = (id) => {
    if (!id) return;
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", "#top");
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
      return;
    }
    console.warn(`Navbar: no element found with id="${id}"`);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    if (drawerOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div
          className="brand"
          onClick={() => handleScrollTo("top")}
          style={{ cursor: "pointer" }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter") handleScrollTo("top"); }}
        >
          <div className="brand-badge">P</div>
          <div>Priya Dobariya</div>
        </div>

        {/* Desktop links (hidden on small screens) */}
        <div className="nav-links">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(n.id);
              }}
            >
              {n.label}
            </a>
          ))}

          {profile.resumePdf && (
            <a href={profile.resumePdf} target="_blank" rel="noreferrer">
              Resume
            </a>
          )}
        </div>

        {/* Hamburger for mobile */}
        <button
          className="hamburger"
          aria-label="Open navigation"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="20" height="2" rx="1" fill="currentColor" />
            <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
            <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>

        <button
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          🌗 Theme
        </button>
      </div>

      {/* Drawer + backdrop */}
      <div className={`drawer-backdrop ${drawerOpen ? "visible" : ""}`} onClick={() => setDrawerOpen(false)} />
      <aside className={`drawer ${drawerOpen ? "open" : ""}`} aria-hidden={!drawerOpen}>
        <div className="drawer-inner container">
          <nav className="drawer-nav">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo(n.id);
                  setDrawerOpen(false);
                }}
              >
                <span className="drawer-icon" aria-hidden>{iconMap[n.id] ?? fallbackIcon}</span>
                {n.label}
              </a>
            ))}
            {profile.resumePdf ? (
              <a href={profile.resumePdf} target="_blank" rel="noopener noreferrer" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-icon" aria-hidden>{iconMap['resume']}</span>
                Resume
              </a>
            ) : (
              <a href="/Priya_Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setDrawerOpen(false)}>
                <span className="drawer-icon" aria-hidden>{iconMap['resume']}</span>
                Resume
              </a>
            )}
          </nav>
        </div>
      </aside>
    </nav>
  );
}
