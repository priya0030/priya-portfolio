import Section from "./Section";
import { projects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A selection of academic and product work.">
      <div className="grid">
        {projects.map((p, idx)=>(
          <article className="card project-card" key={idx}>
            <h3 style={{marginTop:0}}>{p.title}</h3>
            <p className="muted" style={{marginTop:0}}>{p.brief}</p>
            <ul style={{paddingLeft:'1.1rem', margin:'8px 0'}}>
              {p.details.map((d,i)=> <li key={i}>{d}</li>)}
            </ul>
            <div className="tags">
              {p.tech.map((t,i)=> <span className="tag" key={i}>{t}</span>)}
            </div>
            {p.links?.length ? (
              <div style={{marginTop:12, display:'flex', alignSelf:'right', gap:10, flexWrap:'wrap'}}>
                {p.links.map((l, i)=> <a className="button" key={i} href={l.href} target="_blank" rel="noreferrer">🔗 {l.label}</a>)}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  );
}
