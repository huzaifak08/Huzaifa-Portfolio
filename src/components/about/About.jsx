import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const items = [
  {
    icon: "about/cursorIcon.png",
    title: "Frontend Developer",
    text: "Frontend development using Flutter and ReactJS",
    tint: "blue",
  },
  {
    icon: "about/serverIcon.png",
    title: "Backend Developer",
    text: "Backend development using NodeJS with AWS and Firebase",
    tint: "purple",
  },
  {
    icon: "about/cursorIcon.png",
    title: "Database",
    text: "Experience with Firestore, MongoDB and MySQL databases",
    tint: "teal",
  },
];

function About() {
  return (
    <section className="page-section" id="about">
      <div className="section-head reveal">
        <span className="eyebrow">About</span>
        <h2 className="section-title">What I do.</h2>
        <p className="section-sub">
          End-to-end product engineering, from pixel-perfect mobile interfaces
          to the services and data behind them.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={`glass reveal ${styles.imageCard}`}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Illustration of me working on a laptop"
            className={styles.aboutImage}
          />
        </div>

        <ul className={styles.items}>
          {items.map((item) => (
            <li
              key={item.title}
              className={`glass glass-interactive reveal ${styles.item}`}
            >
              <span className={`${styles.icon} ${styles[item.tint]}`}>
                <img src={getImageUrl(item.icon)} alt="" />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
