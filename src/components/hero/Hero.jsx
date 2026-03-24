import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Huzaifa</h1>
        <p className={styles.description}>
          I'm a Full Stack Engineer with a BS in Computer Science from COMSATS
          University. I specialize in building cross-platform mobile
          applications and am passionate about clean code and problem-solving.
          Currently seeking new opportunities.
        </p>
        <div className={styles.buttons}>
          <a href="mailto:huzaifa.uno@gmail.com" className={styles.contactBtn}>
            <span className={styles.icon}>✉️</span>
            <span className={styles.text}>Contact Me</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1k6mX5oV-yxYH7f_GAWg_C7KJLk8vOXyh/view?usp=sharing"
            className={styles.contactBtn}
            target="_blank"
          >
            <span className={styles.icon}>📥</span>
            <span className={styles.text}>Download CV</span>
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/new-dp.webp")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
