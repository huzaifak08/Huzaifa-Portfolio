import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

function ProjectCard({
  project: { title, imageSrc, description, skills, demo, source },
}) {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skills, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skills}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link} target="_blank">
            {demo.includes("google")
              ? "Google"
              : demo.includes("apple")
              ? "Apple"
              : "Demo"}
          </a>
        )}
        {source && (
          <a href={source} className={styles.link} target="_blank">
            {source.includes("google")
              ? "Google"
              : source.includes("apple")
              ? "Apple"
              : "Source"}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
