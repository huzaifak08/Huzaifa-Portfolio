import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:huzaifa.uno@gmail.com" target="_blank">
            huzaifa.uno@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a href="https://www.linkedin.com/in/huzaifak08/" target="_blank">
            Huzaifa Khan (huzaifak08)
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/huzaifak08" target="_blank">
            huzaifak08
          </a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/whatsapp.png")} alt="Github icon" />
          <a>+92 318 0794547</a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
