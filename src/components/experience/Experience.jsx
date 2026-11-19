import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <section className="page-section" id="experience">
      <div className="section-head reveal">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title">Where I&apos;ve worked.</h2>
        <p className="section-sub">
          The tools I reach for, and the teams I&apos;ve shipped with.
        </p>
      </div>

      <div className={styles.content}>
        <div className={`glass reveal ${styles.skillsCard}`}>
          <h3 className={styles.cardLabel}>Toolkit</h3>
          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill} title={skill.title}>
                <div className={styles.skillIcon}>
                  <img src={getImageUrl(skill.imageSrc)} alt="" />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>

        <ol className={styles.history}>
          {history.map((item, id) => (
            <li
              key={id}
              className={`glass glass-interactive reveal ${styles.historyItem}`}
            >
              <div className={styles.logo}>
                <img
                  src={getImageUrl(item.imageSrc)}
                  alt={`${item.organisation} logo`}
                />
              </div>
              <div className={styles.details}>
                <div className={styles.headRow}>
                  <h3>
                    {item.role}
                    <span>{item.organisation}</span>
                  </h3>
                  <p className={styles.date}>
                    {item.startDate} — {item.endDate}
                  </p>
                </div>
                <ul className={styles.tags}>
                  {item.experiences.map((exp, i) => (
                    <li key={i} className="pill">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
