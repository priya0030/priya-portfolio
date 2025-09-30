import { nav, profile } from "../data";
import { scrollToId } from "../utils/scrollToIds";
console.log("Nav data:", nav);
console.log("Profile data:", profile);

export default function Navbar({ onToggleTheme }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => scrollToId('top')} style={{cursor:'pointer'}}>
          <div className="brand-badge">P</div>
          <div>Priya Dobariya</div>
        </div>
        <div className="nav-links">
          {nav.map(n => (
            <a key={n.id} href={`#${n.id}`} onClick={(e)=>{e.preventDefault(); scrollToId(n.id);}}>
              {n.label}
            </a>
          ))}
          {profile.resumePdf && (
            <a href={profile.resumePdf} target="_blank" rel="noreferrer">Resume</a>
          )}
        </div>
        <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
          🌗 Theme
        </button>
      </div>
    </nav>
  );
}
