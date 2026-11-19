import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className="page-section" id="projects">
      <div className="section-head reveal">
        <span className="eyebrow">Projects</span>
        <h2 className="section-title">Things I&apos;ve shipped.</h2>
        <p className="section-sub">
          Production apps live on the App Store and Google Play.
        </p>
      </div>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
