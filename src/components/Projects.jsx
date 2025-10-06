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

            { /* replaced separate tags + links blocks with a single flex row */ }
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:12, gap:12}}>
              <div className="tags" style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                {p.tech.map((t,i)=> <span className="tag" key={i}>{t}</span>)}
              </div>

              {p.links?.length ? (
                <div style={{display:'flex', gap:10, alignItems:'center', flexWrap:'wrap'}}>
                  {p.links.map((l, i)=> {
  const raw = typeof l === 'string' ? l : (l.href ?? l.url ?? '');
  const resolved = raw ? ( /^(https?:)?\/\//i.test(raw) ? raw : `https://${raw}` ) : '';
  console.log('project link raw:', l, 'resolved:', resolved);
  return (
    <a
      className="button"
      key={i}
      href={resolved || '#'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={typeof l === 'string' ? `Open project link ${i+1}` : (l.label ?? l.name ?? `Open project link ${i+1}`)}
      onClick={(e) => {
        if (!resolved) e.preventDefault(); // don't navigate if we couldn't resolve a URL
      }}
      style={{cursor:'pointer'}}
    >
      🔗
    </a>
  );
})}
                </div>
              ) : null}
            </div>

          </article>
        ))}
      </div>
    </Section>
  );
}
