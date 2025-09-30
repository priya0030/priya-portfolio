import Section from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="timeline">
        {education.map((ed, idx)=>(
          <div className="item" key={idx}>
            <div className="row">
              <div className="title">{ed.degree}</div>
              <div className="date">{ed.dates}</div>
            </div>
            <div className="org">{ed.school}</div>
            <div className="muted">{ed.location}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
