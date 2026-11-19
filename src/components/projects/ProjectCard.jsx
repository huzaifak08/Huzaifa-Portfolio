import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

// Self-explanatory labels for store / repo / video links
const getLinkLabel = (url) => {
  if (!url) return "";
  const path = url.toLowerCase();
  if (path.includes("apple.com")) return "App Store";
  if (path.includes("play.google.com") || path.includes("google.com"))
    return "Play Store";
  if (path.includes("github.com")) return "GitHub";
  if (path.includes("youtu.be") || path.includes("youtube.com"))
    return "Watch Demo";
  return "Source";
};

function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <article className={`glass glass-interactive reveal ${styles.container}`}>
      <div className={styles.media}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Screenshot of ${title}`}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className="pill">
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {getLinkLabel(demo)}
            </a>
          )}
          {source && (
            <a
              href={source}
              className="btn btn-glass"
              target="_blank"
              rel="noreferrer"
            >
              {getLinkLabel(source)}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
