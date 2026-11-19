import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container} id="top">
      <div className={styles.content}>
        <span className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Open to new opportunities
        </span>
        <h1 className={styles.title}>
          Hi, I&apos;m Huzaifa.
          <span className={styles.titleGradient}>I build apps people love.</span>
        </h1>
        <p className={styles.description}>
          Full Stack Engineer with a BS in Computer Science from COMSATS
          University. I specialize in cross-platform mobile applications and
          care deeply about clean code and thoughtful problem-solving.
        </p>
        <div className={styles.buttons}>
          <a href="mailto:contact@huzaifakhan.com" className="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="3" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/14iUGoZr87RC46KlRiQq39h5rnuJZ3dPf/view?usp=sharing"
            className="btn btn-glass"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 4v11" />
              <path d="m7 10 5 5 5-5" />
              <path d="M5 20h14" />
            </svg>
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <div className={styles.halo} aria-hidden="true" />
        <div className={`glass ${styles.frame}`}>
          <img
            src={getImageUrl("hero/new-dp.webp")}
            alt="Portrait of Huzaifa"
            className={styles.heroImg}
          />
        </div>
        <div className={`glass ${styles.badge} ${styles.badgeTop}`}>
          <strong>Flutter</strong>
          <span>Mobile engineer</span>
        </div>
        <div className={`glass ${styles.badge} ${styles.badgeBottom}`}>
          <strong>Full Stack</strong>
          <span>Node · AWS · Firebase</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
