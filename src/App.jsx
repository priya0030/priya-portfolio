import useTheme from "./hooks/useTheme.js";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Certifications from "./components/Certifications.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { profile } from "./data.js";
console.log("Profile data:", profile);

export default function App() {
  const { toggle } = useTheme();

  return (
    <>
      <Navbar onToggleTheme={toggle} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
