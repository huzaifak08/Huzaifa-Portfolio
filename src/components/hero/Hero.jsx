import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Huzaifa</h1>
        <p className={styles.description}>
          I'm a full stack Flutter developer with almost 1.5 years of
          Professional experience.I'm a BS Computer Science Graduate from
          Comsats University. I've strong problem solving skills and love to
          learn new things in my field and currently learning ReactJS.
        </p>
        <a href="mailto:hk7928042@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
