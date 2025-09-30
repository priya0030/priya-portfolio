import { certifications } from "../data";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications">
      <div className="card" style={{ background: 'var(--card)', color: 'var(--text)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
        <ul style={{margin:0, paddingLeft:'1.1rem'}}>
          {certifications.map((c,i)=><li key={i}>{c}</li>)}
        </ul>
      </div>
    </Section>
  );
}
