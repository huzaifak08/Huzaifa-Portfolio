import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  // Helper to determine self-explanatory labels
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

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {getLinkLabel(demo)}
            </a>
          )}
          {source && (
            <a
              href={source}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              {getLinkLabel(source)}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
