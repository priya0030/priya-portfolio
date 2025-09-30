import Section from "./Section.jsx";
import { profile } from "../data";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="card">
        <p style={{marginTop:0}}>{profile.summary}</p>
        <p className="muted" style={{marginBottom:0}}>
          Focus areas: Android (Java/Kotlin, Jetpack Compose), Flutter, performance, testing, CI/CD.
        </p>
      </div>
    </Section>
  );
}
