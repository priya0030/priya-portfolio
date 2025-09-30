import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" title="Professional Experience">
      <div className="timeline">
        {experience.map((exp, idx) => (
          <div className="item" key={idx}>
            <div className="row">
              <div className="title">{exp.role} — <span className="org">{exp.org}</span></div>
              <div className="date">{exp.dates}</div>
            </div>
            <div className="muted">{exp.location}</div>
            <ul style={{paddingLeft: '1.1rem', margin: '8px 0'}}>
              {exp.bullets.map((b, i)=> <li key={i}>{b}</li>)}
            </ul>
            {exp.stack?.length ? (
              <div className="tags">
                {exp.stack.map((t, i)=><span className="tag" key={i}>{t}</span>)}
              </div>
            ):null}
          </div>
        ))}
      </div>
    </Section>
  );
}
