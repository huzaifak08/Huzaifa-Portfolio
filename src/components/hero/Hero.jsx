import React from "react";
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
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1-xxQR6xY_0tb76OO3iwNoCBvKgviS6Ur/view?usp=sharing"
            className={styles.contactBtn}
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/ps-compressed.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
