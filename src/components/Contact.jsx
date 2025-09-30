// ...existing code...
// This file should be moved to 'components' folder for consistent casing.
import { profile } from "../data";
import Section from "./Section";

export default function Contact() {
  const subject = encodeURIComponent("Hello Priya — Let's connect");
  const body = encodeURIComponent("Hi Priya,\n\nI came across your portfolio and would love to discuss an opportunity.\n\nBest,\n");
  return (
    <Section id="contact" title="Contact">
      <div className="card" style={{display:'grid', gap:12}}>
        <p style={{marginTop:0}}>
          I’m open to Android/Flutter roles, internships, and collaborations. The fastest way to reach me is email.
        </p>
        <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
          <a className="button primary" href={`mailto:${profile.email}?subject=${subject}&body=${body}`}>
            ✉️ Email
          </a>
          <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">
            🔗 LinkedIn
          </a>
          <a className="button" href={`tel:${profile.phone.replace(/[^\d+]/g,'')}`}>
            📞 Call
          </a>
        </div>
      </div>
    </Section>
  );
}
