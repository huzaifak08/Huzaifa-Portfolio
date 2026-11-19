import style from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Certifications from "./components/certifications/Certifications";
import { useReveal } from "./useReveal";

function App() {
  useReveal();

  return (
    <div className={style.App}>
      <div className={style.backdrop} aria-hidden="true">
        <div className={`${style.orb} ${style.orbBlue}`} />
        <div className={`${style.orb} ${style.orbPurple}`} />
        <div className={`${style.orb} ${style.orbTeal}`} />
        <div className={style.grain} />
      </div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}

export default App;
